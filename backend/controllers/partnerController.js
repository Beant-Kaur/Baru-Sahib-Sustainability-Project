const Partner = require("../models/Partner");

const registerPartner = async (req, res) => {
    try {
        const partner = new Partner(req.body);

        await partner.save();

        res.status(201).json({
            success: true,
            message: "Partner registered successfully!",
            data: partner
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    registerPartner
};