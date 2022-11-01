var userName = 'admin';
var arrUserNames = ["admin", "imran", "amir", "ali", "usman"]

for (var i = 0; i < arrUserNames.length; i++){
    if (arrUserNames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?")
        break
    }
    else {
        console.log("Hello " + arrUserNames[i] + ", thank you for logging in again.")
        break
    }    
}