class AuthorDTO {

  private authorId: number;
  private authorName: string;
  private nationId: string;
  private nationName: string;
  private authorintro: string;
  private regDate: Date;
  private updateDate: Date;

  constructor(authorId: number, authorName: string, nationId: string, nationName: string, authorintro: string, regDate: Date, updateDate: Date) {
    this.authorId = authorId;
    this.authorName = authorName;
    this.nationId = nationId;
    this.nationName = nationName;
    this.authorintro = authorintro;
    this.regDate = regDate;
    this.updateDate = updateDate;
  }

  public  getAuthorId(): number {
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
  public getNationId(): string {
    return this.nationId;
  }
  public setNationId(nationId: string): void {
    this.nationId = nationId;
  }
  public getNationName(): string {
    return this.nationId;
  }
  public setNationName(nationName: string): void {
    this.nationName = nationName;
  }
  public getAuthorIntro(): string {
    return this.authorintro;
  }
  public setAuthorIntro(authorintro: string): void {
    this.authorintro = authorintro;
  } 
  public getRegDate(): Date {
		return this.regDate;
	}
	public setRegDate(regDate: Date): void {
		this.regDate = regDate;
	}
	public getUpdateDate(): Date {
		return this.updateDate;
	}
	public setUpdateDate(updateDate: Date): void {
		this.updateDate = updateDate;
	}
}