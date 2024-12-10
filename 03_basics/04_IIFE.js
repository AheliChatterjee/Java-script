// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// to secure the function from the pollution of global scope we use iife
//iife ->>which execute immidietly

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')