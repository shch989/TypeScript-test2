class AuthorServiceImpl implements AuthorService {
  
  authorGetList(cri: string): void {
    console.log("작가 목록");
  }
  authorGetTotal(cri: string): void {
    console.log("작가 총 수");
  }
  authorGetDetail(authorId: number): void {
    console.log("작가 상세 페이지");
  }
  authorModify(autho: string): void {
    console.log("작가 정보 수정");
  }
  authorDelete(authorId: number): void {
    console.log("작가 정보 삭제");
  }

}