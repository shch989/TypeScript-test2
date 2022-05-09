class CategoryDTO {

  private tier: number;
  private cateName: string;
  private cateCode: string;
  private cateParent: string;

  constructor(tier: number, cateName: string, cateCode: string, cateParent: string) {
    this.tier = tier;
    this.cateName = cateName;
    this.cateCode = cateCode;
    this.cateParent = cateParent;
  }

  public getTier(): number {
    return this.tier;
  }
  public setTier(tier: number): void {
    this.tier = tier;
  }
  public getCateName(): string {
    return this.cateName;
  }
  public setCateName(cateName: string): void {
    this.cateName = cateName;
  }
  public getCateCode(): string {
    return this.cateCode;
  }
  public setCateCode(cateCode: string): void {
    this.cateCode = cateCode;
  }
  public getCateParent(): string {
    return this.cateParent;
  }
  public setCateParent(cateParent: string): void {
    this.cateParent = cateParent;
  }
}