import {DioAccount} from './DioAccount';

export class CompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	getLoan = (loanValue: number): void => {
		if (this.getStatus()) {
			this.setBalance(this.getBalance() + loanValue);

			console.log(
				'Empréstimo de R$',
				loanValue.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				}),
				'efetuado com sucesso.\nO saldo atual é de R$',
				this.getBalance().toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				}) + '.',
				'\n',
			);
		}
	};
}
