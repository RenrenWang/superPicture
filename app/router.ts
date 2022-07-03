import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  router.post("/api/article/create", controller.article.create);
  router.get("/api/article/list", controller.article.findList);

  router.get("/", controller.home.index);
};
