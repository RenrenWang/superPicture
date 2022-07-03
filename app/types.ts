export type ArticleType = {
  title?: string;
  content?: string;
  keywords?: [];
  describe?: string;
  imgs?: [];
  create_time?: Date;
  id?: string;
  status?: [0, 1];
};
export type ImgType = {
  img_url: {
    type: string;
  };
  size: [string, string];
  create_time: Date;
};
