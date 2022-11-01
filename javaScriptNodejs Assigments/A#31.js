var userName = 'admin';
var arrUserNames = ["admin", "imran", "amir", "ali", "usman"]

if ( arrUserNames.length === 0){
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < arrUserNames.length; i++){
        if ( userName === arrUserNames[i]) {
            console.log("Hello admin, would you like to see a status report?")
            break
        }
        else if (userName === arrUserNames[i]){
            console.log("Hello " + arrUserNames[i] + ", thank you for logging in again.")
            break
        }    
        else {
            console.log("User doesn't exist!")
            break
        }
    }
    do {
        arrUserNames.pop()
    } while (arrUserNames.length !== 0)
    if (arrUserNames.length === 0){
        console.log("At the End we have remove all users from the list!")
    }
}
