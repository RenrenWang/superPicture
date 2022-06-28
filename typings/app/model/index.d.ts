// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportImg from '../../../app/model/img';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Img: ReturnType<typeof ExportImg>;
  }
}
