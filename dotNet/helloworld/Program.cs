using System;
using System.Collections;
using System.Collections.Generic;
using models;


namespace helloworld
{

    public class Start
    {
        public static void Main()
        {
            BankAcount b = new BankAcount("Jonasta dos Santos", 1000);
            Console.WriteLine($" Account created for {b.Owner} with balance of {b.Balance}");

            b.MakeWithdrawal(500, DateTime.Now, "Rent payment");
            Console.WriteLine(b.Balance);
            b.MakeDeposit(100, DateTime.Now, "friend paid me back");
            Console.WriteLine(b.Balance);
            b.GetAccountHistory();
        }
    }
}
