let validRegex = RegExp('^[1-9]{1}[0-9]{5}$')
let pincode = 801306;
function validFunc()
{
    if(validRegex.test(pincode))
    {console.log("Valid pin code")}
    else{throw 'Invalid pincode ';}
}
validFunc();