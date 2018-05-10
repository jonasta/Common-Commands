using System;
using System.Collections.Generic;

namespace models
{

    public class BankAcount
    {
        public BankAcount(string number, string owner)
        {
            this.Number = number;
            this.Owner = owner;

        }
        public string Number { get; }
        public string Owner { get; }
        public decimal Balance
        {
            get
            {
                decimal balance = 0;
                foreach (var t in AllTransactions)
                {
                    balance += t.Amount;
                }
                return balance;
            }
        }
        private List<Transaction> AllTransactions = new List<Transaction>();
        public static int AccountNumberSeed = 1234567890;

        public BankAcount(string name, decimal initialBalance)
        {
            this.Number = AccountNumberSeed++.ToString();
            this.Owner = name;
            this.MakeDeposit(initialBalance, new DateTime(), "Initial Balance");
        }

        public void MakeDeposit(decimal amount, DateTime date, string note)
        {
            if (amount < 0){
                throw new ArgumentOutOfRangeException("Amount must be positive");
            }
            this.AllTransactions.Add(new Transaction(amount, date, note));
        }
        public void MakeWithdrawal(decimal amount, DateTime date, string note)
        {
            if (amount < 0){
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount must be positive");
            }
            if (this.Balance - amount < 0){
                throw new ArgumentOutOfRangeException("Not sufficient funds for this withdrawal");
            }
            
            this.AllTransactions.Add(new Transaction(-amount, date, note));
        }

        public void GetAccountHistory(){
            foreach(var t in AllTransactions){
                Console.WriteLine($"{t.Date} {t.Amount} {t.Note}");
            }
        }

    }
}
