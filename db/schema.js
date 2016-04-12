var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId

var ListSchema = new Schema({
  items: Array
})

var List = mongoose.model("List", ListSchema)
