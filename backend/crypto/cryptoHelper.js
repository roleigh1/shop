const crypto = require("crypto");

const ENC_KEY = process.env.VOUCHER_ENC_KEY;

function decryptVoucher(obj) {
    const decipher = crypto.createDecipheriv(
        "aes-128-ccm",
        Buffer.from(ENC_KEY, "hex"),
        Buffer.from(obj.iv, "hex"),
        { authTagLength: 16 }
    );

    decipher.setAuthTag(Buffer.from(obj.tag, "hex"));

    const decrypted = Buffer.concat([
        decipher.update(Buffer.from(obj.content, "hex")),
        decipher.final()
    ]);
    return decrypted.toString()
}

module.exports = { decryptVoucher }