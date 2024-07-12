
const validate = (email,password,name,isSignIn) => {
    if(!validateEmail(email)) return "Email is not valid"
    if(!validatePassword(password)) return "Password is not valid"
    if(!isSignIn && !validateName(name)) return "Name is not valid"
    return null;
};

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  } 
   return false
}

function validatePassword(inputtxt) 
{ 
  if (/^[A-Za-z]\w{7,14}$/.test(inputtxt))
  {
    return true
  }
    
    return false
}

function validateName(name) 
{ 
  if(name === "") return false;
  name = name.trim();
 
  if(name !== "" || name !== null){
    return true
  }
    
    return false
}

export default validate;