import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  router.get("/article/list", controller.article.list);
  router.post("/article/create", controller.article.create);

  router.get("/", controller.home.index);
};
