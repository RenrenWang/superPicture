import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  router.get("/img/list", controller.img.list);
  router.get("/", controller.home.index);
};
