export type ArticleType = {
  title: string;
  content: string;
  keywords: [string];
  describe: string;
  imgs: [string];
  create_time: Date;
};
export type ImgType = {
  img_url: {
    type: string;
  };
  size: [string, string];
  create_time: Date;
};
