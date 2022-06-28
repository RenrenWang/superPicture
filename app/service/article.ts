import { Service } from "egg";
import { ArticleType } from "../types";
export default class Article extends Service {
  public async find() {
    return this.ctx.model.Article.find();
  }
  public async create(post: ArticleType) {
    return this.ctx.model.Article.create(post);
  }
  public async delete(id: string) {
    return this.ctx.model.Article.deleteOne({ id });
  }
  public async update(post: ArticleType) {
    return this.ctx.model.Article.updateOne(post);
  }
}
