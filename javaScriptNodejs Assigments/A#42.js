function show_magician(arr){
    for ( var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
function make_great(arrMagician){
    for (var i = 0; i<arrMagician.length; i++ ){
      arrMagician[i]= "Great " + arrMagician[i]
    }
}
var arrMagician = ["magic1", "magic2", "magic3"]
make_great.apply(this, arrMagician)  // pass by values
show_magician(arrMagician)
make_great(arrMagician)  //pass by reference
make_great.apply(this, arrMagician)  // pass by values
show_magician(arrMagician)
