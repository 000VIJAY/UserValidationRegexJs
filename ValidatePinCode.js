let validRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')
let validEmail = RegExp('^[A-Za-z0-9._]+@[A-Za-z0-9]+.[a-z]{2,5}$')
let pincode = "804 306";
let email = "Vijayk@gmail.co";
function validFunc()
{
    if(validRegex.test(pincode))
    {console.log("Valid pin code")}
    else{throw 'Invalid pincode ';}
}
validFunc();
function validEmailFunc()
{
    if(validEmail.test(email))
    {console.log("Valid email Id")}
    else{throw 'Invalid email id ';}
}
validEmailFunc();