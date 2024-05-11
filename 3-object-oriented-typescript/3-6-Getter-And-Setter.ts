{
    // ==============
    class account {
        private balance: number = 0;


        public set setBalance(v: number) {
            this.balance = v;
        }


        public get getBalance(): number {
            return this.balance;
        }

    }

    const myAccount = new account();

    myAccount.setBalance = 20;
    console.log(`My balance : ${myAccount.getBalance}`)

    // ==============
}