// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
  }
}
