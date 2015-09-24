function validation_for_signup()
{

                var check_email = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z\.]{2,6}$/;
                var check_username = /^[a-zA-Z0-9_]{3,16}$/;
                var check_name = /^[a-zA-Z]{3,16}$/;
                var check_phone = /^[0-9]{3,16}$/;
                                if(document.signup.username.value=="")
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
                                if(document.signup.email.value=="")
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
                                if(document.signup.password.value=='')
                                {
                                                alert("Please enter Password.");
                                                document.signup.password.focus();
                                                return false;
                                }
                                else if(document.signup.password.value.length<6)
                                {
                                                alert("Password is too short.");
                                                document.signup.password.focus();
                                                return false;
                                }
                                if(document.signup.passconf.value=='')
                                {
                                                alert("Please confirm Password.");
                                                document.signup.passconf.focus();
                                                return false;
                                }
                                else if(document.signup.password.value!=document.signup.passconf.value)
                                {
                                                alert("Password does not match.");
                                                document.signup.password.focus();
                                                return false;
                                }
                               
                                if(document.signup.firstname.value=="")
                                {
                                                alert("please enter firstname");
                                                document.signup.firstname.focus();
                                                return false;
                                }
                                else if(check_name.test(document.signup.firstname.value) == false)
                                {
                                                alert('Invalid  firstname');
                                                document.signup.firstname.focus();
                                                return false;
                                }
                                if(document.signup.lastname.value=="")
                                {
                                                alert("please enter lastname");
                                                document.signup.lastname.focus();
                                                return false;
                                }
                                else if(check_name.test(document.signup.lastname.value) == false)
                                {
                                                alert('Invalid  lastname');
                                                document.signup.lastname.focus();
                                                return false;
                                }
                                if(document.signup.phone.value=="")
                                {
                                                alert("please enter phone");
                                                document.signup.phone.focus();
                                                return false;
                                }
                                else if(check_phone.test(document.signup.phone.value) == false)
                                {
                                                alert('Invalid  phone');
                                                document.signup.phone.focus();
                                                return false;
                                }
}
