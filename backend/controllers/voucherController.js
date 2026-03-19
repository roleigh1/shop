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
        const datetoday = moment();

        let response = {
            token: voucherLink.redeemToken,
            bannerColor: voucherLink.bannerColor
        }
        if (voucherLink.currentredemptions > voucherLink.maxredemptions) {
            response.token = "none";
            response.bannerColor = "red";
            response.bannerHeadline = "Voucher Limit Reached";
            response.bannerText = "This voucher has already been redeemed too many times and has exceeded the maximum number of allowed redemptions. Unfortunately, it can no longer be used. Please try another voucher or contact our support team if you have any questions."
            return res.status(200).json({ message: "Voucher Limit Reached", response });
        }

        if (datetoday.isBefore(validityfrom)) {
            response.token = "none";
            response.bannerColor = "yellow";
            response.bannerHeadline = "Gift Voucher Coming Soon!";
            response.bannerText = `The voucher isn’t active yet. Check back between ${validityfrom.format("DD-MM-YYYY")} and ${validitytill.format("DD-MM-YYYY")}!`;
            return res.status(200).json({ message: "Voucher isnt active yet.", response });
        }

        if (datetoday.isAfter(validitytill)) {
            response.token = "none";
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
                    response.bannerText = `Enjoy ${voucherData.value}% off all items in the category of ${voucherData.voucherTyoe}.`;
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
module.exports = { voucherLinkHandler };
