document.getElementById("login-button").addEventListener('click', function(){
    const emailField= document.getElementById("user-email");
   const userEmail= emailField.value;
//    console.log(userEmail);
    
    const passwordlField= document.getElementById("user-password");
    userPassword= passwordlField.value;
    // console.log(userPassword);

if(userEmail == 'admin@rm7.com' && userPassword == 'admin-rm7'){
    window.location.href="home.html"
}
     
}) 
alert("userName is admin@rm7.com And the Password is admin-rm7")
