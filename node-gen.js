function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var eikeCorp = String.fromCharCode(
    getRandomInt(65,90), 
    getRandomInt(65,90)
);

console.log("Eike's next corp name is " + eikeCorp + "X");
