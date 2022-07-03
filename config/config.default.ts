import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
// import i18n from "i18n";
// import path from "path";
// i18n.configure({
//   locales: ["zh", "en"],
//   directory: path.join(__dirname, "/locales"),
// });
const lang = "zh";
// i18n.setLocale(lang);

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

  // config.validate = {
  //   translate,
  // };
  config.i18n = {
    defaultLocale: lang,
  };

  return {
    ...config,
    ...bizConfig,
  };
};
