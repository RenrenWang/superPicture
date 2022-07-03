// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportBaseController from '../../../app/controller/baseController';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    baseController: ExportBaseController;
    home: ExportHome;
  }
}
