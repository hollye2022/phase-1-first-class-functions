function receivesAFunction (callBackFunction) {
     callBackFunction();
}
function returnsANamedFunction () {
    const sayHi =  (name) => {
        console.log(`Hi, ${name}!`) ;
    }
    return sayHi
}

function returnsAnAnonymousFunction () {
    return  function() {
        console.log(`Hi!`)

    }
}