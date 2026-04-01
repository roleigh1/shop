const { VoucherLink, Voucher } = require("../models/models");
const moment = require("moment");

const expiredContent = {
    headline: "This Voucher Has Expired",
    text: "This voucher has expired and can no longer be redeemed. Check back soon for new offers!"
};

const voucherLinkHandler = async (req, res) => {
    try {
        const { token } = req.body;

        const voucherLink = await VoucherLink.findOne({ where: { redeemToken: token } });
        if (!voucherLink) {
            return res.status(404).json({ message: "Voucher not found" });
        }

        const voucherData = await Voucher.findOne({ where: { id: voucherLink.voucherId } });
        if (!voucherData) {
            return res.status(404).json({ message: "Voucher data not found" });
        }
        const validityfrom = moment(voucherLink.validityfrom);
        const validitytill = moment(voucherLink.validitytill);
        const datetoday = moment()

        let response = {
            token: voucherLink.redeemToken,
            bannerColor: voucherLink.bannerColor
        }
        if (voucherLink.currentredemptions > voucherLink.maxredemptions) {
            response.token = false;
            response.bannerColor = "red";
            response.bannerHeadline = "Voucher Limit Reached";
            response.bannerText = "This voucher has already been redeemed too many times and has exceeded the maximum number of allowed redemptions. Unfortunately, it can no longer be used. Please try another voucher or contact our support team if you have any questions."
            return res.status(200).json({ message: "Voucher Limit Reached", response });
        }

        if (datetoday.isBefore(validityfrom)) {
            response.token = false;
            response.bannerColor = "yellow";
            response.bannerHeadline = "Gift Voucher Coming Soon!";
            response.bannerText = `The voucher isn’t active yet. Check back between ${validityfrom.format("DD-MM-YYYY")} and ${validitytill.format("DD-MM-YYYY")}!`;
            return res.status(200).json({ message: "Voucher isnt active yet.", response });
        }

        if (datetoday.isAfter(validitytill)) {
            response.token = false;
            response.bannerColor = "red";
            response.bannerHeadline = expiredContent.headline;
            response.bannerText = expiredContent.text;
            return res.status(200).json({ message: "Voucher is expired", response });
        }


        if (voucherLink.bannerContent === "default") {
            switch (voucherData.vouchertype) {
                case "total":
                    response.bannerHeadline = "Congratulations!";
                    response.bannerText = `You get ${voucherData.value}% off your entire shopping cart.`;
                    break;
                case "category":
                    response.bannerHeadline = "Congratulations!";
                    response.bannerText = `Enjoy ${voucherData.value}% off all items in the category of ${voucherData.vouchertype}.`;
                    break;
                case "product":
                    response.bannerHeadline = "Congratulations!";
                    response.bannerText = `Enjoy ${voucherData.value}% off ${voucherData.discountedgroup}.`;
                    break;
            }

        } else {

            response.bannerHeadline = voucherLink.bannerHeadline || response.bannerHeadline;
            response.bannerText = voucherLink.bannerText || response.bannerText;
        }


        return res.status(200).json({ message: "Voucher link valid", response });

    } catch (error) {
        console.error("Error finding VoucherLink Data", error);
        res.status(400).json({ message: "Voucher error", error });
    }
};
const voucherCart = async (req, res) => {
    try {
        const { token } = req.body;
        console.log("token", token);
        const cartVoucher = await VoucherLink.findOne({
            where: { redeemToken: token },
            attributes: ["voucherId", "validityfrom", "validitytill"]
        });

        if (!cartVoucher) {
            return res.status(404).json({ message: "Voucher not found" });
        }

        const validityfrom = moment(cartVoucher.validityfrom);
        const validitytill = moment(cartVoucher.validitytill);
        const datetoday = moment()
      
        if (datetoday.isBefore(validityfrom)) {
            return res.status(200).json({ message: "voucher not active yet", validityfrom });
        }
        if (datetoday.isAfter(validitytill)) {
            return res.status(200).json({ message: "voucher validity expired", validitytill });
        }
        const voucherData = await Voucher.findOne({
            where: { id: cartVoucher.voucherId },
            attributes: [
                "DISCOUNTEDGROUP",
                "VOUCHERTYPE",
                "VALUE",
                "MAXREDEMPTIONS",
                "CURRENTREDEMPTIONS"
            ]
        });

        if (!voucherData) {
            return res.status(404).json({ message: "Voucher not found" });
        }
        if (
            Number(voucherData.CURRENTREDEMPTIONS) >
            Number(voucherData.MAXREDEMPTIONS)
        ) {
            return res.status(200).json({ message: "Voucher expired " });
        } else {
            const response = voucherData.toJSON();
            console.log(response)
            return res.status(200).json({ message: "Voucher valid", response });

        }
    } catch (error) {
        console.error("Error getting Voucher to cart", error);
        res.status(400).json({ message: "Error decrypting voucher", error });
    }
};

const voucherApply = async (req, res) => {
    try {
        const { token, cart } = req.body;
        console.log("cart", cart); 
        if (!token || !cart || !Array.isArray(cart)) {
            return res.status(400).json({ message: "Invalid request data" });
        }


        const voucherLink = await VoucherLink.findOne({
            where: { redeemToken: token },
            attributes: ["voucherId", "validityfrom", "validitytill"]
        });

        if (!voucherLink) {
            return res.status(404).json({ message: "Voucher not found" });
        }


        const today = moment();
        if (today.isBefore(moment(voucherLink.validityfrom))) {
            return res.status(400).json({ message: "Voucher not valid yet" });
        }

        if (today.isAfter(moment(voucherLink.validitytill))) {
            return res.status(400).json({ message: "Voucher expired" });
        }


        const voucher = await Voucher.findByPk(voucherLink.voucherId);
        console.log("voucher", voucher);
        if (!voucher) {
            return res.status(404).json({ message: "Voucher data not found" });
        }


        if (
            Number(voucher.CURRENTREDEMPTIONS) >=
            Number(voucher.MAXREDEMPTIONS)
        ) {
            return res
                .status(400)
                .json({ message: "Voucher redemption limit exceeded" });
        }


        const totalCartValue = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

        let discountAmount = 0;
        let appliedOn = "";


        if (voucher.vouchertype === "total") {
            discountAmount = totalCartValue * (voucher.value / 100);
            appliedOn = "total";
        }

        else if (voucher.vouchertype === "product") {
            const item = cart.find(
                (i) => i.name === voucher.discountedgroup
            );

            if (!item) {
                return res
                    .status(400)
                    .json({ message: "Product not in cart" });
            }

            discountAmount =
                item.price * item.quantity * (voucher.value / 100);

            appliedOn = "product";
        }

        else if (voucher.vouchertype === "category") {
            const items = cart.filter(
                (i) => i.category === voucher.discountedgroup
            );

            if (items.length === 0) {
                return res
                    .status(400)
                    .json({ message: "No matching items for voucher" });
            }

            discountAmount = items.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity * (voucher.value / 100),
                0
            );

            appliedOn = "category";
        }

        else {
            return res
                .status(400)
                .json({ message: "Invalid voucher type" });
        }


        const newTotal = totalCartValue - discountAmount;


        return res.status(200).json({
            success: true,
            message: "Voucher applied successfully",
            totalBefore: totalCartValue,
            discountAmount: Number(discountAmount.toFixed(2)),
            newTotal: Number(newTotal.toFixed(2)),
            appliedOn
        });

    } catch (error) {
        console.error("Error applying voucher:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
module.exports = { voucherLinkHandler, voucherCart, voucherApply };
