import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1656343906290_1854";

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.mongoose = {
    url:
      process.env.MONGO_URL ||
      "mongodb://wrr:123456@www.wangrenren.cn:27017/blog",
    options: {
      poolSize: 40,
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  return {
    ...config,
    ...bizConfig,
  };
};
