import { Service } from "egg";
import { ImgType } from "../types";
export default class Picture extends Service {
  public async list() {
    return this.ctx.model.Img.find();
  }
  public async create(post: ImgType) {
    return this.ctx.model.Img.create(post);
  }
}
