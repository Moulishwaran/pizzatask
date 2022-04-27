const mongoose = require("mongoose");

var mongoURL =
  'mongodb+srv://Moulish:moulish9894@cluster0.cpow8.mongodb.net/mern-pizza';

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection

db.on("connected" , () => {
  console.log("Mongo DB connection successful");
});
db.on("error"  ,() => {
  console.log(`Mongo DB connection failed`);
});


module.exports = mongoose
