let validRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')
let pincode = "804 306";
function validFunc()
{
    if(validRegex.test(pincode))
    {console.log("Valid pin code")}
    else{throw 'Invalid pincode ';}
}
validFunc();