const { Schema, model } = require('mongoose');

const exampleSchema = new Schema({
    GuildID: { type: String, required: true },
});

module.exports = model('example', exampleSchema);