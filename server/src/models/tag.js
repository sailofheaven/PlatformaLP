import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var TagSchema = new Schema({
    title: { type: String, dropDups: true }
});

module.exports = mongoose.model('Tag', TagSchema)