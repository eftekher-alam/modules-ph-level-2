// Spread Operator | Array
let bubtFriends: string[] = ["Shohan", "Manik", "Shanto"];

let fciFriends: string[] = ["Manik", "Sayem", "Sharif"];

let allFriend: string[] = [];

allFriend.push(...bubtFriends);
allFriend.push(...fciFriends);

// Spread Operator | Object
const mentors1 = {
    javaScript: "Mr. A",
    java: "Mr. B",
    php: "Mr. C"
}

const mentors2 = {
    dbms: "Mr. X",
    prisma: "Mr. Y",
    sql: "Mr. z"
}

const allMentors = {
    ...mentors1,
    ...mentors2
}



// rest operator 
function sum(...numbers: number[]): number {
    let total: number = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));
