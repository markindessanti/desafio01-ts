import {CompanyAccount} from './class/CompanyAccount';
import {PeopleAccount} from './class/PeopleAccount';
import {LuckyAccount} from './class/LuckyAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Markin', 123123525);

console.log(peopleAccount, '\n\nDETALHES DA CONTA', '\n');

console.log('O nome da conta é', peopleAccount.getName());
console.log('O número da conta é', peopleAccount.getAccountNumber());
console.log('O documento do responsável da conta é', peopleAccount.getDocId());
console.log('O saldo da conta é', peopleAccount.getBalance());

if (peopleAccount.getStatus()) {
	console.log('A conta está ativa.', '\n');
} else {
	console.log('A conta está inativa.', '\n');
}

console.log('MOVIMENTAÇÕES PESSOA FÍSICA', '\n');

peopleAccount.withdraw(250);

peopleAccount.deposit(1000);

peopleAccount.deposit(500);

peopleAccount.withdraw(250);

peopleAccount.deposit(2000);

const companyAccount: CompanyAccount = new CompanyAccount('MD Produções', 2);

console.log(companyAccount, '\nMOVIMENTAÇÕES PESSOA JURÍDICA', '\n');

companyAccount.deposit(3000);

companyAccount.getLoan(100000);

const luckyAccount: LuckyAccount = new LuckyAccount('Sortudo da Silva', 3);

console.log(luckyAccount);

luckyAccount.deposit(100);
