interface AuthorService {

  authorGetList(cri: string):void;
	authorGetTotal(cri: string):void;
	authorGetDetail(authorId: number):void;
	authorModify(autho: string):void;
	authorDelete(authorId: number):void; 

}