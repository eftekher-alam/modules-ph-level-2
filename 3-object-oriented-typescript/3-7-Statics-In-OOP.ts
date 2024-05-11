{
    // ============
    class account {
        static balance: number = 0;


        public set setStatic(v: number) {
            account.balance += v;
        }


        public get getStatic(): number {
            return account.balance;
        }


    }

    account.balance = 20;

    const myAccount1 = new account();
    const myAccount2 = new account();

    myAccount1.setStatic = 10;
    console.log(myAccount1.getStatic); // 20(previous) + 10 = 30

    myAccount2.setStatic = 20;
    console.log(myAccount2.getStatic); //30 + 20 = 50 

    // ============
}