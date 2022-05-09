class BookServiceImpl implements BookService {

  getGoodsList(cri: string): void {
    console.log("상품 검색");
  }
  goodsGetTotal(cri: string): void {
    console.log("상품 총 개수");
  }
  getCateCode1(): void {
    console.log("국내 카테고리 리스트");
  }
  getCateCode2(): void {
    console.log("외국 카테고리 리스트");
  }
  getGoodsInfo(bookId: number): void {
    console.log("상품 정보");
  }
  getBookIdName(bookId: number): void {
    console.log("상품 id 이름");
  }
  authorEnroll(author: string): void {
    console.log("작가 등록");
  }

}