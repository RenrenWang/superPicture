import { Controller } from "egg";

export default class ArticleController extends Controller {
  public async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.find();
  }
  public async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.body = await ctx.service.article.create(data);
  }
}
