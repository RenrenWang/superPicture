import BaseController from "./baseController";
import { ArticleType } from "../types";
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
    status: { type: "enum", required: true, values: [ 1, 0 ] },
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
      params,
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
  async delete() {
    const { ctx } = this;
    const data = ctx.request.body;
    const id = data?.id;
    if (!id) {
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("missing field id"),
      }));
    }
    const result = await this.ctx.service.article.delete(id);
    if (!result) {
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("fail"),
      }));
    }
    ctx.body = this.resultSuccessMessage({
      code: 200,
      message: ctx.__("success"),
      data: result,
    });
  }
  async update() {
    const { ctx } = this;
    const data = ctx.request.body;
    if (!data?.id) {
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("missing field id"),
      }));
    }
    if (data?.status != null && (data?.status !== 0 || data?.status !== 1)) {
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("invalid field status"),
      }));
    }
    const { id, status, title, describe, content, imgs, keywords } = data;
    const saveData: ArticleType = { id };
    if (status === 0 || status === 1) {
      saveData.status = status;
    }
    if (title) {
      saveData.title = title;
    }
    if (describe) {
      saveData.describe = describe;
    }
    if (content) {
      saveData.content = content;
    }
    if (imgs) {
      saveData.imgs = imgs;
    }
    if (keywords) {
      saveData.keywords = keywords;
    }

    const keys = Object.keys(saveData);
    if (keys.length <= 1) {
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("not  field update"),
      }));
    }
    try {
      const result = await this.ctx.service.article.update(saveData);
      if (!result) {
        return (ctx.body = this.resultErrorMessage({
          message: ctx.__("fail"),
        }));
      }
      ctx.body = this.resultSuccessMessage({
        code: 200,
        message: ctx.__("success"),
        data: result,
      });
    } catch (error) {
      this.logger.warn(error);
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("fail"),
      }));
    }

  }
  async findById() {
    const { ctx } = this;
    const data = ctx.request.body;
    if (!data?.id) {
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("missing field id"),
      }));
    }
    if (typeof data?.id !== "string") {
      return (ctx.body = this.resultErrorMessage({
        message: ctx.__("id not a string"),
      }));
    }
    try {
      const result = await this.ctx.service.article.findById(data?.id);
      if (!result) {
        return (ctx.body = this.resultErrorMessage({
          message: ctx.__("not found data"),
        }));
      }
      ctx.body = this.resultSuccessMessage({
        code: 200,
        message: ctx.__("success"),
        data: result,
      });
    } catch (error) {
      this.logger.warn(error);
      ctx.body = this.resultSuccessMessage({
        code: 200,
        message: ctx.__("fail"),
      });
    }

  }
}
