function validation_for_signup()
{

                var check_email = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z\.]{2,6}$/;
                var check_username = /^[a-zA-Z0-9_]{3,16}$/;
                var check_name = /^[a-zA-Z]{3,16}$/;
                var check_phone = /^[0-9]{3,16}$/;
                                if(document.signup.username.value==="")
                                {
                                                alert("please enter username");
                                                document.signup.username.focus();
                                                return false;
                                }
                                else if(check_username.test(document.signup.username.value) == false)
                                {
                                                alert('Invalid  username');
                                                document.signup.username.focus();
                                                return false;
                                }
                                if(document.signup.email.value==="")
                                {
                                                alert("please enter email");
                                                document.signup.email.focus();
                                                return false;
                                }
                                else if(check_email.test(document.signup.email.value) == false)
                                {
                                                alert('Invalid  email');
                                                document.signup.email.focus();
                                                return false;
                                }
                                if(document.signup.password.value==='')
                                {
                                                alert("Please enter Password.");
                                                document.signup.password.focus();
                                                return false;
                                }
                                else if(document.signup.password.value.length<8)
                                {
                                                alert("Password is too short.\nShould be atleast 8 characters");
                                                document.signup.password.focus();
                                                return false;
                                }
                                if(document.signup.passconf.value==='')
                                {
                                                alert("Please confirm Password.");
                                                document.signup.passconf.focus();
                                                return false;
                                }
                                else if(document.signup.password.value!==document.signup.passconf.value)
                                {
                                                alert("Password does not match.");
                                                document.signup.password.focus();
                                                return false;
                                }
}
