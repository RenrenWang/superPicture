import { Service } from "egg";
import { ArticleType } from "../types";
export default class Article extends Service {
  public async create(post: ArticleType) {
    return this.ctx.model.Article.create(post);
  }
}
