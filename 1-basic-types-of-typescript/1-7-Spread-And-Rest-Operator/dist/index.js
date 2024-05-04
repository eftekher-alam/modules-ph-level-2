"use strict";
// Spread Operator | Array
let bubtFriends = ["Shohan", "Manik", "Shanto"];
let fciFriends = ["Manik", "Sayem", "Sharif"];
let allFriend = [];
allFriend.push(...bubtFriends);
allFriend.push(...fciFriends);
// Spread Operator | Object
const mentors1 = {
    javaScript: "Mr. A",
    java: "Mr. B",
    php: "Mr. C"
};
const mentors2 = {
    dbms: "Mr. X",
    prisma: "Mr. Y",
    sql: "Mr. z"
};
const allMentors = Object.assign(Object.assign({}, mentors1), mentors2);
// rest operator 
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
sum(1, 2, 3, 4, 5); //15
