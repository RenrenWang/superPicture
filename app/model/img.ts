export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ImgSchema = new Schema({
    imgUrl: {
      type: String,
    },
    size: {
      type: String,
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model("Img", ImgSchema);
};
