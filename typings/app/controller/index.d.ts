// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportImg from '../../../app/controller/img';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    home: ExportHome;
    img: ExportImg;
  }
}
