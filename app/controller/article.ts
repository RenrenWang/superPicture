import BaseController from "./baseController";

export default class ArticleController extends BaseController {
  createRule: any = {
    title: { type: "string", required: true },
    content: { type: "string", required: true },
    keywords: {
      type: "array",
      required: true,
      min: 1,
    },
    describe: { type: "string", required: true },
    imgs: { type: "array", required: true, min: 1 },
    coverImg: { type: "string", required: true },
    status: { type: "enum", required: true, values: [1, 0] },
  };
  async create() {
    const { ctx, app } = this;
    const data = ctx.request.body;

    const errors = app.validator.validate(this.createRule, data);
    if (errors) {
      return (ctx.body = this.resultErrorMessage({
        message: this.toStringError(errors),
      }));
    }
    const { title } = data;
    const rows = await ctx.service.article.findByTitle(title);
    if (rows.length > 0) {
      return (ctx.body = this.resultErrorMessage({
        message: `title ${ctx.__("already exists")} `,
      }));
    }
    const result = await ctx.service.article.create(data);
    if (!result) {
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("fail"),
      }));
    }
    ctx.body = this.resultSuccessMessage({
      code: 200,
      message: ctx.__("success"),
    });
  }
  async findList() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const errors = app.validator.validate(
      {
        page: { type: "integer", required: true },
        pageSize: { type: "integer", required: true },
        filter: { type: "object", required: false, default: {} },
      },
      params
    );
    if (errors) {
      return (ctx.body = this.resultErrorMessage({
        message: this.toStringError(errors),
      }));
    }
    const { page, pageSize, filter } = params;
    const result = await ctx.service.article.findAll({
      page,
      pageSize,
      filter,
    });
    ctx.body = this.resultSuccessMessage({
      code: 200,
      data: result,
    });
  }
}
