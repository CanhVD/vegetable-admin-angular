export class PageRequest {
  page: number;
  size: number;
  keyword: string;
  property: string;
  orderBy: string;

  constructor(
    page: number = 1,
    size: number = 10, 
    keyword: string = '',
    property: string = 'id',
    orderBy: string = 'DESC'
  ) {
    this.page = page;
    this.size = size;
    this.keyword = keyword;
    this.property = property;
    this.orderBy = orderBy;
  }
}
