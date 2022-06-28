import { Service } from "egg";

export default class Picture extends Service {
  public async list() {
    return this.ctx.model.Img.find();
  }
  public async create(post) {
    return this.ctx.model.Article.create(post);
  }
}
