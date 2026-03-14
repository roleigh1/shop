const { VoucherLink } = require("../models/models");
const moment = require("moment");


const defaultContent = {
    headline: "Welcome to your voucher!",
    text: "Your voucher is active and can now be redeemed. Feel free to browse and take advantage of your offer. Enjoy discovering!"
}

const expiredContent = {
    headline: "This Voucher Has Expired",
    text: "This voucher has expired and can no longer be redeemed. Check back soon for new offers!"
}
const voucherLink = async (req, res) => {
    try {
        const { token } = req.body;

        const voucherLink = await VoucherLink.findOne({
            where: { redeemToken: token }
        })
        const validityfrom = moment(voucherLink.validityfrom);
        const validitytill = moment(voucherLink.validitytill);
        let response;

        const datetoday = moment(new Date(), "YYYY-MM-DD");
        console.log("date today", datetoday);
        if (datetoday.isSameOrAfter(validityfrom) && datetoday.isSameOrBefore(validitytill)) {
            if (voucherLink.bannerContent === "default") {
                response = {
                    token: voucherLink.redeemToken,
                    bannerColor: voucherLink.bannerColor,
                    BannerHeadline: defaultContent.headline,
                    bannerText: defaultContent.text,
                }
            } else {
                response = {
                    token: voucherLink.redeemToken,
                    bannerColor: voucherLink.bannerColor,
                    bannerHeadline: voucherLink.bannerHeadline,
                    bannerText: voucherLink.bannerText
                }
            }
            res.status(200).json({
                message: "Voucher link valid",
                response
            });
        } else if (datetoday.isBefore(validityfrom)) {
            const content = {
                headline: "Gift Voucher Coming Soon!",
                text: `The voucher isn’t active yet. Check back on ${validityfrom} to get yours!`
            }
            response = {
                bannerColor: "yellow",
                bannerHeadline: content.headline,
                bannerText: content.text
            }
            res.status(200).json({
                message: "Voucher isnt active yet.",
                response
            })
        } else if (datetoday.isAfter(validitytill)) {
            response = {
                bannerColor: "red",
                bannerHeadline: expiredContent.headline,
                bannerText: expiredContent.text
            }
            res.status(200).json({
                message: "Voucher is expired",
                response
            })
        }
    } catch (error) {
        console.error("error finding VocherLink Data ", error);
        res.status(400).json({ message: "Voucher error ", error })
    }
}

module.exports = { voucherLink }; 