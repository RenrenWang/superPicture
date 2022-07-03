export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    keywords: {
      type: [],
      required: true,
    },
    describe: {
      type: String,
      required: true,
    },
    imgs: {
      type: [],
      required: true,
    },
    status: {
      // 是否启用
      required: true,
      type: Number,
      enum: [0, 1],
    },
    coverImg: {
      type: String,
      required: true,
    },
    create_time: {
      type: Number,
      required: true,
      default: new Date().getTime(),
    },
  });

  return mongoose.model("Article", ArticleSchema);
};
