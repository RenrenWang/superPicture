import { Controller } from "egg";

export default class PictureController extends Controller {
  public async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.img.list();
  }
}
