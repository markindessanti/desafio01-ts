export abstract class DioAccount {
	private readonly name: string;
	private readonly accountNumber: number;
	private balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	getName = (): string => {
		return this.name;
	};

	getAccountNumber = (): number => {
		return this.accountNumber;
	};

	setBalance = (balanceValue: number): void => {
		this.balance = balanceValue;
	};

	getBalance = (): number => {
		return this.balance;
	};

	deposit = (depositValue: number): void => {
		if (this.validateStatus()) {
			this.setBalance(this.getBalance() + depositValue);

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

	withdraw = (withdrawValue: number): void => {
		if (this.validateStatus() && this.hasBalance(withdrawValue)) {
			this.setBalance(this.getBalance() - withdrawValue);

			console.log(
				'Saque de R$',
				withdrawValue.toLocaleString('pt-br', {
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

	private validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error('Conta inválida');
	};

	getStatus = (): boolean => {
		return this.status;
	};

	private hasBalance = (withdrawValue: number): boolean => {
		if (withdrawValue <= this.balance && this.validateStatus()) {
			return true;
		} else {
			console.log(
				'Saldo insuficiente.\nSaque solicitado de',
				withdrawValue.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				}) +
					', mas o saldo atual é de apenas' +
					this.getBalance().toLocaleString('pt-br', {
						style: 'currency',
						currency: 'BRL',
					}) +
					'.',
				'\n',
			);
		}

		return false;
	};
}
