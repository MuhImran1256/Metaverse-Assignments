var current_Users = ["admin", "Imran", "amir", "ali", "usman"]
var new_Users = ["imran", "bilal", "asim", "Ali", "haq"]
for (var i = 0; i < new_Users.length; i++){
    var found = 0
    for (var j = 0; j < current_Users.length; j++){
        if (new_Users[i].toLowerCase() === current_Users[j].toLowerCase()){
            console.log(new_Users[i].toLowerCase() + " ! you need to enter username");
            found = 1
            break
        }
        }
        if ( found === 0){
            console.log(new_Users[i].toLowerCase() + " User is available !")
        }

    }