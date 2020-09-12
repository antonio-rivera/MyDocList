const mongoose = require('mongoose')
const Schema = mongoose.Schema

const providerSchema = new Schema(
    {
        // _id: {type: String, required: true},
        provider_full_name: {type: String, required: true},
        specialty: {type: String, required: true}
    }
)

module.exports = mongoose.model('Provider', providerSchema)