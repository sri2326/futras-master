function validateform(){  
    var name=document.myform.userName.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("MailId can't be blank");  
      return false;  
    }
    
    }  
    function checkName() {
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(document.myform.userName.value.match(mailformat))
{
    document.getElementById("demo").innerHTML = "";
//alert("Valid email address!");
//document.myform.userName.focus();
return true;
}
else
{
    document.getElementById("demo").innerHTML = "You have entered an invalid email address!";
//alert("You have entered an invalid email address!");
//document.myform.userName.focus();
return false;
 }
}
    function checkPassword() {
        var password = document.myform.password.value;
        var repass=document.myform.confirm_password.value;
        if (password == null || password == "") {
            document.getElementById("new").innerHTML = "password should not be null";
           // alert("password should not be null");
            return false;
        } else if (password.length < 8) {
            document.getElementById("new").innerHTML = "password not valid";
          //  alert("password not valid");
            return true;
        }
        else if(password != repass){
            document.getElementById("new1").innerHTML="password doesn't match";
        }
        else{
            return true;
        }
       // else if (password.length >= 8) {
           // alert("password length  should not more than 8 characters");
          //  return false;
        //}
    }
