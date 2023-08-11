import {DioAccount} from './DioAccount';

export class LuckyAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	deposit = (depositValue: number): void => {
		if (this.getStatus()) {
			this.setBalance(this.getBalance() + depositValue + 10);

			console.log(
				'Depósito de R$',
				depositValue.toLocaleString('pt-br', {
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
