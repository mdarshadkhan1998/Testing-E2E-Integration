
/**
 * 
 * @param {string} pass 
 * @returns 
 */

const validate = (pass) => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    const upperCase = lowerCase.map((e)=>e.toUpperCase());
    const digits = "1234567890".split("");

    // let flag = true;
    if(pass.length<8)
    {
        return {
            status:false,
            message: "at least 8 chars required"
        }
    }
    if(!pass.split("").find((c)=>lowerCase.includes(c))) {
        return {
            status:false,
            message: "at least 1 lowercase char is required"
        }
    }
    if(!pass.split("").find((c)=>upperCase.includes(c))) {
        return {
            status:false,
            message: "at least 1 uppercase char is required"
        }
    }
    if(!pass.split("").find((c)=>digits.includes(c))) {
        return {
            status:false,
            message: "at least 1 digit is required"
        }
    }

    return {
            status:true,
            message: "Correct Password"
        }
}

module.exports = validate