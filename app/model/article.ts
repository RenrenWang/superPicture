export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    keywords: {
      type: [],
    },
    describe: {
      type: String,
    },
    imgs: {
      type: [],
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model("Article", ArticleSchema);
};
