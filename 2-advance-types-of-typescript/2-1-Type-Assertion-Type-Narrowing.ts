// declare a variable with any type that means it can take any type value.
let x: any;
x = 10;
//x. //ডট দেওয়ার পরে কোন building function suggest করবে না, কিন্তুু আমরা বুঝতে পারছি number type হবে
(x as number).toFixed(2); //(x as number), এটাকে বলে assertion