import { Service } from "egg";
import { ArticleType } from "../types";
import { calcPagingOffset } from "../util";
type PageType = {
  page: number;
  pageSize: number;
  filter?: object;
};
export default class Article extends Service {
  public async findById(id: string) {
    return await this.ctx.model.Article.findOne({ _id: id }, {
      keywords: 1,
      imgs: 1,
      create_time: 1,
      coverImg: 1,
      title: 1,
      content: 1,
      describe: 1,
      _id: 0,
      id: "$_id",
      status: 1,
    });
  }
  public async findAll({ page = 1, pageSize = 5, filter = {} }: PageType) {
    const skip = calcPagingOffset(page, pageSize);
    const count = await this.count(filter);
    const countPage = Math.ceil(count / pageSize);
    if (page > countPage) {
      return {
        page,
        pageSize,
        countPage,
        list: [],
        count,
      };
    }
    const list = await this.ctx.model.Article.find(filter, {
      keywords: 1,
      imgs: 1,
      create_time: 1,
      coverImg: 1,
      title: 1,
      content: 1,
      describe: 1,
      _id: 0,
      id: "$_id",
      status: 1,
    })
      .skip(skip)
      .limit(pageSize);

    return {
      page,
      pageSize,
      list,
      count,
      lastPage: page === countPage,
      countPage,
    };
  }
  public async count(filter: object = {}) {
    return this.ctx.model.Article.find(filter).count();
  }
  public async findByTitle(title: string) {
    const data = this.ctx.model.Article.find({ title });
    return data;
  }
  public async create(post: ArticleType) {
    return this.ctx.model.Article.create(post);
  }
  public async delete(id: string) {
    return this.ctx.model.Article.deleteOne({ _id: id });
  }
  public async update(post: ArticleType) {
    const result = await this.ctx.model.Article.updateOne({
      ...post,
      _id: post?.id,
    });
    return result?.ok;
  }
}
