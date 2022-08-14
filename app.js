const string = "";
const num = 0;
const obj = {};
//=======================Problem:1  radianToDegree================================
function radianToDegree(radian) {
    if (typeof num === typeof radian) {
        const total = radian * 57.2958;
        const degree = total.toFixed(2);
        return degree;
    }
    else { return "error" }
};
const result1 = radianToDegree(199);
// console.log(result1);

//=======================Problem:2  isJavaScriptFile=============================
function isJavaScriptFile(fileName) {
    if (typeof string === typeof fileName) {
        if (fileName.endsWith(".js") == true) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "error";;
    }
}
const result2 = isJavaScriptFile("app.js");
// console.log(result2);

//==========================Problem 3: oilPrice=======================================
function oilPrice(diesel1, petrol2, octane3) {
    if (typeof num === typeof diesel1 && typeof num === typeof petrol2 && typeof num === typeof octane3) {
        const diesel = 114;
        const petrol = 130;
        const octane = 135;
        const dieselTotal = diesel1 * diesel;
        const petrolTotal = petrol2 * petrol;
        const octaneTotal = octane3 * octane;
        const total = dieselTotal + petrolTotal + octaneTotal;
        return total;
    }
    else { return "error"; }
};
const result3 = oilPrice(30, 20, 10);
// console.log(result3);

// ===========================Problem 4: publicBusFare====================================
function publicBusFare(people) {
    if (typeof num === typeof people) {
        if (people >= 365) {
            const bus1 = people - 50;
            const bus2 = bus1 - 50;
            const bus3 = bus2 - 50;
            const bus4 = bus3 - 50;
            const bus5 = bus4 - 50;
            const bus6 = bus5 - 50;
            const bus7 = bus6 - 50;
            const microbus = bus7 - 11;
            const publicBusFare = microbus * 250;
        }
        else if (people >= 235) {
            const bus1 = people - 50;
            const bus2 = bus1 - 50;
            const bus3 = bus2 - 50;
            const bus4 = bus3 - 50;
            const microbus1 = bus4 - 11;
            const microbus2 = microbus1 - 11;
            const microbus3 = microbus2 - 11;
            const publicBusFare = microbus3 * 250;
        }
        else if (people >= 112) {
            const bus1 = people - 50;
            const bus2 = bus1 - 50;
            const microbus1 = bus2 - 11;
            const publicBusFare = microbus1 * 250;
        }
        else if (people >= 55) {
            const bus1 = people - 50;
            const publicBusFare = bus1 * 250;
            console.log(publicBusFare)
        }
        else if (people >= 50) {
            const bus1 = people - 50;
            const publicBusFare = bus1 * 250;
            console.log(publicBusFare)
        }
    }
    else { return "error" }
}
const result4 = publicBusFare(430);
// console.log(result4)

// ==========================Problem 5: isBestFriend=====================================
const me = { name: "Al Amin", myFriend: "Tingko" };
const friend = { name: "Tingko", myFriend: "Al Amin" };
function isBestFriend(me, friend) {
    if (typeof obj === typeof me && typeof obj === typeof friend) {
        if (me.name === friend.myFriend && me.myFriend === friend.name) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "error"
    }
}
const result5 = isBestFriend(me, friend);
// console.log(result5);
// =============================================================================