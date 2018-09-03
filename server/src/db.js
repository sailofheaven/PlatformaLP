import mongoose from 'mongoose';

export default url => {
    mongoose.connect(url);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
