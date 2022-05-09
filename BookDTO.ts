class BookDTO {
  private bookId: number;
  private bookName: string;
  private authorId: number;
  private authorName: string;
  private publeYear: string;
  private publisher: string;
  private cateName: string;
  private bookPrice: number;
  private bookStock: number;
  private bookDiscount: number;
  private bookIntro: string;
  private bookContents: string;
  private regDate: Date;
  private updateDate: Date;

  constructor(bookId: number, bookName: string, publeYear: string, authorId: number, authorName: string, publisher: string, cateName: string, bookPrice: number, bookStock: number, bookDiscount: number, bookIntro: string, bookContents: string, regDate: Date, updateDate: Date) {
    this.bookId = bookId;
    this.bookName = bookName;
    this.authorId = authorId;
    this.authorName = authorName;
    this.publeYear = publeYear;
    this.publisher = publisher;
    this.cateName = cateName; 
    this.bookPrice = bookPrice;
    this.bookStock = bookStock;
    this.bookDiscount = bookDiscount;
    this.bookIntro = bookIntro;
    this.bookContents = bookContents;
    this.regDate = regDate;
    this.updateDate = updateDate;
  }

  public getBookId(): number {
    return this.bookId;
  }
  public setBookId(bookId: number): void {
    this.bookId = bookId;
  }
  public getBookName(): string {
    return this.bookName;
  }
  public setBookName(bookName: string): void {
    this.bookName = bookName;
  }
  public getAuthorId(): number {
    return this.authorId;
  }
  public setAuthorId(authorId: number): void {
    this.authorId = authorId;
  }
  public getAuthorName(): string {
    return this.authorName;
  }
  public setAuthorName(authorName: string): void {
    this.authorName = authorName;
  }
  public getPubleYear(): string {
    return this.publeYear;
  }
  public setPubleYear(publeYear: string): void {
    this.publeYear = publeYear;
  }
  public getPublisher(): string {
    return this.publisher;
  }
  public setPublisher(publisher: string): void {
    this.publisher = publisher;
  }
  public getCateName(): string {
    return this.cateName;
  }
  public setCateName(cateName: string): void {
    this.cateName = cateName;
  }
  public getBookPrice(): number {
    return this.bookPrice;
  }
  public setBookPrice(bookPrice: number): void {
    this.bookPrice = bookPrice;
  }
  public getBookStock(): number {
    return this.bookStock;
  }
  public setBookStock(bookStock: number): void {
    this.bookStock = bookStock;
  }
  public getBookDiscount(): number {
    return this.bookDiscount;
  }
  public setBookDiscount(bookDiscount: number): void {
    this.bookDiscount = bookDiscount;
  }
  public getBookIntro(): string {
    return this.bookIntro;
  }
  public setBookIntro(bookIntro: string): void {
    this.bookIntro = bookIntro;
  }
  public getBookContents(): string {
    return this.bookContents;
  }
  public setBookContents(bookContents: string): void {
    this.bookContents = bookContents;
  }
  public getRegDate(): Date {
    return this.regDate;
  }
  public setRegDate(regDate: Date): void {
    this.regDate = regDate;
  }
  public getUpdateDate(): Date {
    return this.regDate;
  }
  public setUpdateDate(updateDate: Date): void {
    this.updateDate  = updateDate ;
  }
}