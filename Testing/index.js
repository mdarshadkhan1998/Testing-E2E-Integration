function sum(a,b){
    if(typeof a === "string" && typeof a === "string"){
        return; 
    }
    return a+b;
}

function multiply(a,b){
    if(typeof a === "string" && typeof a === "string"){
        return; 
    }
    return a*b;
}

module.exports = { sum, multiply };
