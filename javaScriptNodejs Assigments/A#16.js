// Muhammad Imran Mangral
//   Date: 02/10/2022
// Assignment # 15
var guestList = ["AbuBakar", "Umar", "Usman"]
for (var i = 0; i < guestList.length; i ++){
    console.log("Dear Mr. \"" + guestList[i] + "\" you are cordially invited to dinner")
}
console.log("Mr \"" + guestList[2] + "\" is not available !");
var notAvailPerson = "Usman";
guestList.pop()
guestList.push("Ali");
for (var i = 0; i < guestList.length; i ++){
    console.log("Dear Mr. \"" + guestList[i] + "\" you are cordially invited to dinner")
}
console.log("I am happy to annource that we have a big table for more invites");
guestList.unshift("Muhammad");
guestList.push("Arsalan");
guestList.splice(Math.ceil([guestList.length/2]),0,"Ramzan");
//guestList[guestList.length - 1] = guestList.append("Arsalan");
for (var i = 0; i < guestList.length; i ++){
    console.log("Dear Mr. \"" + guestList[i] + "\" you are cordially invited to dinner")
}
