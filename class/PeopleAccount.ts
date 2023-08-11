import {DioAccount} from './DioAccount';

export class PeopleAccount extends DioAccount {
	private doc_id: number;

	constructor(accountNumber: number, name: string, doc_id: number) {
		super(name, accountNumber);
		this.doc_id = doc_id;
	}

	setDocId = (doc_id: number) => {
		this.doc_id = doc_id;
	};

	getDocId = () => {
		return this.doc_id;
	};
}
