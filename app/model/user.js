
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('db1');

    const UserSchema = new Schema({
        a: { type: String },
        b: { type: Number },
    });

    return conn.model('lists', UserSchema);
}