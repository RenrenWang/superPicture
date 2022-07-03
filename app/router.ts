import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  router.put("/api/article", controller.article.create);
  router.delete("/api/article", controller.article.delete);
  router.post("/api/article", controller.article.update);

  router.get("/api/article/list", controller.article.findList);
  router.get("/", controller.home.index);
};
