/**
 * @description 计算偏移值
 * @param {Number} page 当前页数
 * @param {Number} size 每页数量
 * @return {Number} 数据库中的偏移值
 */
export const calcPagingOffset = (page: number, size: number): number => {
  return size && page ? size * (page - 1) : 0;
};
