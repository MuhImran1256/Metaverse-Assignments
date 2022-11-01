function make_car(manufacturer, modelName, ...args){
    console.log(args)
    const car1 = {
        manufacturer1: manufacturer,
        modelName1: modelName
    }
    for (const x of args) {
        console.log(x)
            car1[x] += args[x]
    }    
    console.log(car1)
}
var dd =3;
make_car("a", "b", [{c:this}])
make_car("a", "b")