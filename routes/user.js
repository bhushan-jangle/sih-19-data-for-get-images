var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
      email: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      filename: {
            type: String,
            trim: true,
            default: '',
            required:true
      }
});
mongoose.model('dataforgetimage', UserSchema);

module.exports = mongoose.model('dataforgetimage');
