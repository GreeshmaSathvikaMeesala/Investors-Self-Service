// models/Scheme.js
const mongoose = require('mongoose');

const SchemeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    risk: { type: String, required: true },
    horizon: { type: String, required: true },
    tax: { type: String, required: true },
    investmentType: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Scheme', SchemeSchema);
