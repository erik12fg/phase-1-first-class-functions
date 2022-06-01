function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
    return function named() {
        console.log('This is a function.')
    }
}

function returnsAnAnonymousFunction() {
   return () => console.log('This is also a function.')

}