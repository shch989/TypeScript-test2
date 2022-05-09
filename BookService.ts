interface BookService {

	getGoodsList(cri: string):void;
	goodsGetTotal(cri: string):void;
	getCateCode1():void;
	getCateCode2():void;
	getGoodsInfo(bookId: number):void;
	getBookIdName(bookId: number):void;
	authorEnroll(author: string):void;  

}