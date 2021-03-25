      function genCaptcha(){
          
            var expr= document.getElementById('exprsn');
            

            var num1= Math.round((100-10)*Math.random() +10 );

            var num2= Math.round((100-10)*Math.random() + 10);

            var operations = ['*','/','+','-']

            var x= (Math.round(10*Math.random()))%4;

            var op =operations[x];
            
            var compute = num1 + op  + num2

            expr.value=   compute;
            //console.log( expr.value)
            

        }

       

       /* var fnameflag,lnameflag,mailflag,pwd1flag,pwd2flag,mobileflag,countryflag,stateflag,cityflag,captchaflag,genderflag,addressflag;
        fnameflag = lnameflag = mailflag = pwd1flag = pwd2flag = mobileflag = countryflag = stateflag = cityflag = captchaflag = genderflag=  addressflag = true;
        console.log(fnameflag&&lnameflag)*/
        formInput= document.querySelectorAll('input');
        formInput.forEach(element => {
            element.addEventListener("blur",function(){
                input =document.getElementById(this.id).value;
                //console.log(input)
                var ele = this.id+ "req";
                if(this.id == "fname"){
                    if(input==""){                                      
                        document.getElementById(ele).innerHTML="Please Enter Your First Name";
                    }
                    else{
                        document.getElementById(ele).innerHTML="";
                    }
                }
                if(this.id == "lname"){
                    if(input==""){                                      
                        document.getElementById(ele).innerHTML="Please Enter Your Last Name";
                    }
                    else{
                        document.getElementById(ele).innerHTML="";
                    }
                }
                if(this.id == "pwd1"){
                    if(input==""){                                      
                        document.getElementById(ele).innerHTML="Please Enter Your password";
                    }
                    else{
                        document.getElementById(ele).innerHTML="";
                    }
                }
                if(this.id == "pwd2"){
                    if(input==""){                                      
                        document.getElementById(ele).innerHTML="Please Confirm Your Password";
                    }
                    else{
                        document.getElementById(ele).innerHTML="";
                    }
                }
                if(this.id == "mail1"){
                    if(input==""){                                      
                        document.getElementById(ele).innerHTML="Please Confirm Your Password";
                    }
                    else{
                        document.getElementById(ele).innerHTML="";
                    }
                }
                if(this.id == "mobile"){
                    if(input==""){                                      
                        document.getElementById(ele).innerHTML="Please Enter Your Mobile Number";
                    }
                    else{
                        document.getElementById(ele).innerHTML="";
                    }
                }
                if(this.id == "caddress"){
                    if(input==""){                                      
                        document.getElementById(ele).innerHTML="Please Enter Your Current Address";
                    }
                    else{
                        document.getElementById(ele).innerHTML="";
                    }
                }
                if(this.id == "result"){
                    if(input==""){                                      
                        document.getElementById(ele).innerHTML="Please Enter Captcha Result";
                    }
                    else{
                        document.getElementById(ele).innerHTML="";
                    }
                }
        
                
               
                })
            
        });

          var country= document.getElementById('ccountry')
         
          country.addEventListener("blur",function(){
           
            countryreq = document.getElementById('ccountryreq');
            
            

            if(country.value=="0"){
                countryreq.innerHTML= "Please select your country";
                
            }
            else{
                
                countryreq.innerHTML= "";

            }
        })
        var state= document.getElementById('cstate')
         
          state.addEventListener("blur",function(){
           
            statereq = document.getElementById('state1req');
            
            

            if(state.value=="0"){
                statereq.innerHTML= "Please select your state";
                
            }
            else{
                
                statereq.innerHTML= "";

            }
        })




        function validateCaptcha(){
            var expr= document.getElementById('exprsn').value;
            var result= document.getElementById('result').value;



            temp =Math.round(eval(expr))

            if (result == ""){

                document.getElementById("resultreq").innerHTML = "Please Enter captcha result";

                captchaflag=  false;
               // document.getElementById("errormsg").style.visibility = "visible";

            }

            else{
                    
                    if (temp != result){
                        
                        document.getElementById("resultreq").innerHTML = "wrong captcha result";

                        captchaflag=  false;
                        

                    }
                }

        }

        function captchaCheck(e){
            if(e.keyCode == 13){
                validateCaptcha()
                }
        }

        function inputCheck(){
            var fnameflag,lnameflag,mailflag,pwd1flag,pwd2flag,mobileflag,countryflag,stateflag,cityflag,captchaflag,genderflag,addressflag;
            fnameflag = lnameflag = mailflag = pwd1flag = pwd2flag = mobileflag = countryflag = stateflag = cityflag = captchaflag = genderflag=  addressflag = true;
            console.log(fnameflag + lnameflag +mailflag +pwd1flag + pwd2flag + mobileflag + countryflag + stateflag +cityflag +captchaflag +genderflag +addressflag)    
    
            var firstName = document.getElementById('fname').value;
            var lastName = document.getElementById('lname').value;
            var mail1 =document.getElementById('mail1').value;
            var mobile = document.getElementById('mobile').value;
            var pwd1 = document.getElementById('pwd1').value;
            var pwd2 = document.getElementById('pwd2').value;
            var gendr = document.getElementsByName('gender');
            var city = document.getElementById('city').value;
           
            var caddress = document.getElementById('caddress').value;
           
            var ccountry = document.getElementById('ccountry').value;
            var cstate = document.getElementById('cstate').value;

            var gendrflag = 0;
           
            
        
            
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

                 //console.log(fnameflag);
                 fnameflag= false;
                }
             
                if (!firstName.match(namereg)){
                 /*alert("Enter valid First Name");*/
                 document.getElementsByClassName('fnamereq')[0].innerHTML="Enter Valid First Name";
                 document.getElementById('fname').focus();
                 //console.log(lnameflag);

                 fnameflag= false;
                 //console.log(lnameflag);
                }
             
                //lastname checking
             
                if(lastName.trim() == ""){
                 /*alert("Please Enter Last Name");*/
                 document.getElementsByClassName('lnamereq')[0].innerHTML="Please Enter Last Name";
            
                 document.getElementById('lname').focus();
                 lnameflag= false;
                }
             
                if (!lastName.match(namereg)){
                 /*alert("Enter valid Last Name");*/
                 document.getElementsByClassName('lnamereq')[0].innerHTML="Enter Valid Last Name";
                 document.getElementById('lname').focus();
                 lnameflag= false;
                }
             
                if(mail1.trim() == ""){
                 /*alert("Please Enter  your mail");*/
                 document.getElementsByClassName('mailreq')[0].innerHTML="Please Enter Your Mail";
                 document.getElementById('mail1').focus();
                 
                 lnameflag= false;
                }
             
                if (!mail1.match(mailreg)){
                 /*alert("Enter valid mail id");*/
                 document.getElementsByClassName('mailreq')[0].innerHTML="Enter Valid Mail";
                 document.getElementById('mail1').focus();
                 mailflag= false;
                }
             
                if(mobile.trim() == ""){
                 /*alert("Please Enter mobile number");*/
                 document.getElementsByClassName('mobilereq')[0].innerHTML="Enter Your Mobile Number";
                 document.getElementById('mobile').focus();
                
                 mailflag= false;
                }
             
                if (!mobile.match(mobilereg)){
                 /*alert("Enter valid mobile number");*/
                 document.getElementsByClassName('mobilereq')[0].innerHTML="Enter Valid Mobile Number";
                 document.getElementById('mobile').focus();
                 mobileflag= false;
                }
             
                if(pwd1.trim() == ""){
                 /*alert("Please Enter password");*/
                 document.getElementsByClassName('pwd1req')[0].innerHTML="Please Enter Password";
                 document.getElementById('pwd1').focus();
                
                 pwd1flag= false;
                }
                if(pwd1.length<8){
                    /*alert("Password length should be minimum 8 characters")*/
                    document.getElementsByClassName('pwd1req')[0].innerHTML="Password length should be minimum 8 characters";
                    document.getElementById('pwd1').focus();
                    pwd1flag= false;
                }
             
                if (!pwd1.match(pwdreg)){
                 /*alert("Enter valid password");*/
                 document.getElementsByClassName('pwd1req')[0].innerHTML="Enter valid password";
                 
                 document.getElementById('pwd1').focus();
                 pwd1flag= false;;
                }
             
                if(pwd2.trim() == ""){
                 /*alert("Please confirm your password");*/
                 document.getElementsByClassName('pwd2req')[0].innerHTML="Please confirm your password";
                 document.getElementById('pwd2').focus();
                
                 pwd2flag= false;;
                }
                if (!(pwd1 === pwd2)) {
                 /*alert("Passwords not matched");*/
                 document.getElementsByClassName('pwd2req')[0].innerHTML="Passwords not matched";
                 
                 document.getElementById('pwd2').focus();
                 pwd2flag= false;
                }
            
                if(caddress.trim() == ""){
                 /*alert("Please Enter your current address");*/
                 document.getElementsByClassName('addr1req')[0].innerHTML="Enter your current address";
                 document.getElementById('caddress').focus();
                
                 addressflag= false;
                }
             
                if (!caddress.match(addrreg)){
                /* alert("Enter valid address ");*/
                document.getElementsByClassName('addr1req')[0].innerHTML="Enter valid address";
                 document.getElementById('caddress').focus();
                 addressflag= false;
                }
                if(ccountry == "0"){
                 /*alert("please select your country");*/
                 document.getElementsByClassName('country1req')[0].innerHTML="select your current country";
                 countryflag= false;
             }
            
             if(cstate == "0"){
              /*alert("please select your state");*/
              document.getElementsByClassName('state1req')[0].innerHTML="select your  current state";
              stateflag= false;
              }

              /*
              if(paddress.trim() == ""){
                 alert("Please Enter your permanent address");
                 document.getElementsByClassName('addr2req')[0].innerHTML="Enter your permanent address";
                 document.getElementById('paddress').focus();
                
                return false;
                }
             
                if (!paddress.match(addrreg)){
                 alert("Enter valid present address ");
                 document.getElementsByClassName('addr2req')[0].innerHTML="Enter valid present address";
                 document.getElementById('paddress').focus();
                 return false;
                }
             
             if(pcountry == "0"){
                 alert("please select your country");
                 document.getElementsByClassName('country2req')[0].innerHTML="select your current country";
                 return false;
             }
            
             if(pstate == "0"){
              alert("please select your state");
              document.getElementsByClassName('state2req')[0].innerHTML="select your  current state";
              return false;
             }
            */
            
             if(city.trim() == ""){
                 /* alert("Please Enter city name");*/
                 document.getElementsByClassName('cityreq')[0].innerHTML="Please Enter city name";
                  document.getElementById('city').focus();
                 
                 cityflag=  false;
                 }
              
                 if (!city.match(cityreg)){
                  /*alert("Enter valid city name");*/
                  document.getElementsByClassName('cityreq')[0].innerHTML="Enter valid city name";
                  document.getElementById('city').focus();
                  cityflag=  false;
                 }
            
            
             
                for(i=0;i<gendr.length;i++){
                    if(gendr[i].checked == true){
                        gendrflag=1;
                        break;
                    }
                }
                 if(gendrflag == 0){
                     /*alert("please choose gender")*/
                     document.getElementsByClassName('genreq')[0].innerHTML="please select gender";
                     genderflag= false;
             
                 }        
             
        
                validateCaptcha();

                        
                console.log(fnameflag + lnameflag +mailflag +pwd1flag + pwd2flag + mobileflag + countryflag + stateflag +cityflag +captchaflag +genderflag +addressflag)    
    

            if(!(fnameflag&&lnameflag&&mailflag&&pwd1flag&&pwd2flag&&mobileflag&&countryflag&&stateflag&&cityflag&&captchaflag&&genderflag&&addressflag)){
                return false;
            }
            else{
                return true;
            }
        
        
        }

      
    
   