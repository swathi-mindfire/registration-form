      function genCaptcha(){
            var expr= document.getElementById('exprsn');

            var num1= Math.round((100-10)*Math.random() +10 );

            var num2= Math.round((100-10)*Math.random() + 10);

            var operations = ['*','/','+','-']

            var x= (Math.round(10*Math.random()))%4;

            var op =operations[x];
            
            var compute = num1 + op  + num2

            expr.value=   compute
        }

        function validateCaptcha(){
            var expr= document.getElementById('exprsn').value;
            var result= document.getElementById('result').value;



            temp =Math.round(eval(expr))

            if (result == ""){

                document.getElementById("errormsg").innerHTML = "Please Enter captcha result";

                return false;
               // document.getElementById("errormsg").style.visibility = "visible";

            }

            else{
                    
                    if (temp != result){
                        
                        document.getElementById("errormsg").innerHTML = "wrong captcha result";

                        return false;
                        

                    }
                }

        }

        function captchaCheck(e){
            if(e.keyCode == 13){
                validateCaptcha()
                }
        }


        function inputCheck(){
    
            var firstName = document.getElementById('fname').value;
            var lastName = document.getElementById('lname').value;
            var mail1 =document.getElementById('mail1').value;
            var mobile = document.getElementById('mobile').value;
            var pwd1 = document.getElementById('pwd1').value;
            var pwd2 = document.getElementById('pwd2').value;
            var gendr = document.getElementsByName('gender');
            var city = document.getElementById('city').value;
           
            var caddress = document.getElementById('caddress').value;
            var paddress = document.getElementById('paddress').value;
            var ccountry = document.getElementById('ccountry').value;
            var cstate = document.getElementById('cstate').value;
            var pcountry = document.getElementById('pcountry').value;
            var pstate = document.getElementById('pstate').value;
            
        
            var gendrflag= 0;
            var namereg = /^[a-zA-Z]+$/;
            var mailreg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,7})(.[a-z]{2,7})?$/;
            var mobilereg = /^[1-9]{1}[0-9]{9}$/;
            pwdreg = /^[a-zA-Z0-9!$%#@^&*]*$/;
           
            cityreg = /^[a-zA-Z]+$/;
            
            addrreg = /^[a-zA-Z0-9,-]+$/;
           
            if(firstName.trim() == ""){
                /* alert("Please Enter First Name");*/
                document.getElementsByClassName('fnamereq')[0].innerHTML="Please Enter First Name";
                 document.getElementById('fname').focus();
                return false;
                }
             
                if (!firstName.match(namereg)){
                 /*alert("Enter valid First Name");*/
                 document.getElementsByClassName('fnamereq')[0].innerHTML="Enter Valid First Name";
                 document.getElementById('fname').focus();
                 return false;
                }
             
                //lastname checking
             
                if(lastName.trim() == ""){
                 /*alert("Please Enter Last Name");*/
                 document.getElementsByClassName('lnamereq')[0].innerHTML="Please Enter Last Name";
            
                 document.getElementById('lname').focus();
                return false;
                }
             
                if (!lastName.match(namereg)){
                 /*alert("Enter valid Last Name");*/
                 document.getElementsByClassName('lnamereq')[0].innerHTML="Enter Valid Last Name";
                 document.getElementById('lname').focus();
                 return false;
                }
             
                if(mail1.trim() == ""){
                 /*alert("Please Enter  your mail");*/
                 document.getElementsByClassName('mailreq')[0].innerHTML="Please Enter Your Mail";
                 document.getElementById('mail1').focus();
                 
                return false;
                }
             
                if (!mail1.match(mailreg)){
                 /*alert("Enter valid mail id");*/
                 document.getElementsByClassName('mailreq')[0].innerHTML="Enter Valid Mail";
                 document.getElementById('mail1').focus();
                 return false;
                }
             
                if(mobile.trim() == ""){
                 /*alert("Please Enter mobile number");*/
                 document.getElementsByClassName('mobilereq')[0].innerHTML="Enter Your Mobile Number";
                 document.getElementById('mobile').focus();
                
                return false;
                }
             
                if (!mobile.match(mobilereg)){
                 /*alert("Enter valid mobile number");*/
                 document.getElementsByClassName('mobilereq')[0].innerHTML="Enter Valid Mobile Number";
                 document.getElementById('mobile').focus();
                 return false;
                }
             
                if(pwd1.trim() == ""){
                 /*alert("Please Enter password");*/
                 document.getElementsByClassName('pwd1req')[0].innerHTML="Please Enter Password";
                 document.getElementById('pwd1').focus();
                
                return false;
                }
                if(pwd1.length<8){
                    /*alert("Password length should be minimum 8 characters")*/
                    document.getElementsByClassName('pwd1req')[0].innerHTML="Password length should be minimum 8 characters";
                    document.getElementById('pwd1').focus();
                    return false;
                }
             
                if (!pwd1.match(pwdreg)){
                 /*alert("Enter valid password");*/
                 document.getElementsByClassName('pwd1req')[0].innerHTML="Enter valid password";
                 
                 document.getElementById('pwd1').focus();
                 return false;
                }
             
                if(pwd2.trim() == ""){
                 /*alert("Please confirm your password");*/
                 document.getElementsByClassName('pwd2req')[0].innerHTML="Please confirm your password";
                 document.getElementById('pwd2').focus();
                
                return false;
                }
                if (!(pwd1 === pwd2)) {
                 /*alert("Passwords not matched");*/
                 document.getElementsByClassName('pwd2req')[0].innerHTML="Passwords not matched";
                 
                 document.getElementById('pwd2').focus();
                 return false;
                }
            
                if(caddress.trim() == ""){
                 /*alert("Please Enter your current address");*/
                 document.getElementsByClassName('addr1req')[0].innerHTML="Enter your current address";
                 document.getElementById('caddress').focus();
                
                return false;
                }
             
                if (!caddress.match(addrreg)){
                /* alert("Enter valid address ");*/
                document.getElementsByClassName('addr1req')[0].innerHTML="Enter valid address";
                 document.getElementById('caddress').focus();
                 return false;
                }
                if(ccountry == "0"){
                 /*alert("please select your country");*/
                 document.getElementsByClassName('country1req')[0].innerHTML="select your current country";
                 return false;
             }
            
             if(cstate == "0"){
              /*alert("please select your state");*/
              document.getElementsByClassName('state1req')[0].innerHTML="select your  current state";
              return false;
              }
              if(paddress.trim() == ""){
                 /*alert("Please Enter your permanent address");*/
                 document.getElementsByClassName('addr2req')[0].innerHTML="Enter your permanent address";
                 document.getElementById('paddress').focus();
                
                return false;
                }
             
                if (!paddress.match(addrreg)){
                 /*alert("Enter valid present address ");*/
                 document.getElementsByClassName('addr2req')[0].innerHTML="Enter valid present address";
                 document.getElementById('paddress').focus();
                 return false;
                }
             
             if(pcountry == "0"){
                 /*alert("please select your country");*/
                 document.getElementsByClassName('country2req')[0].innerHTML="select your current country";
                 return false;
             }
            
             if(pstate == "0"){
              /*alert("please select your state");*/
              document.getElementsByClassName('state2req')[0].innerHTML="select your  current state";
              return false;
             }
            
             if(city.trim() == ""){
                 /* alert("Please Enter city name");*/
                 document.getElementsByClassName('cityreq')[0].innerHTML="Please Enter city name";
                  document.getElementById('city').focus();
                 
                 return false;
                 }
              
                 if (!city.match(cityreg)){
                  /*alert("Enter valid city name");*/
                  document.getElementsByClassName('cityreq')[0].innerHTML="Enter valid city name";
                  document.getElementById('city').focus();
                  return false;
                 }
            
            
             
                for(i=0;i<gendr.length;i++){
                    if(gendr[i].checked == true){
                        gendrflag=1;
                        break;
                    }
                }
                 if(gendrflag == 0){
                     /*alert("please choose gender")*/
                     document.getElementsByClassName('genreq')[0].innerHTML="please choose gender";
                     return false;
             
                 }        
             
        
                validateCaptcha();
        
        
        }

      
    
   