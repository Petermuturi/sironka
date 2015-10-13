function validation_for_signup()
{

                var check_email = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z\.]{2,6}$/;
                var check_username = /^[a-zA-Z0-9_]{3,16}$/;
                var check_name = /^[a-zA-Z]{3,16}$/;
                var check_phone = /^[0-9]{3,16}$/;
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
                                if((document.signup.phone.value==="")||(document.signup.phone.value <10))
                                {
                                                alert("Please enter your phone number.");
                                                document.signup.passconf.focus();
                                                return false;
                                }
                                 else if(check_phone.test(document.signup.phone.value) == false)
                                {
                                                alert('Invalid  phone number');
                                                document.signup.phone.focus();
                                                return false;
                                }
                                if(document.signup.password.value==='')
                                {
                                                alert("Please enter Password.");
                                                document.signup.password.focus();
                                                return false;
                                }
                                else if(document.signup.password.value.length<6)
                                {
                                                alert("Password is too short.\nShould be atleast 6 characters");
                                                document.signup.password.focus();
                                                return false;
                                }
                                
}

Parse.initialize("enNfvaZh8DCXVXxhnJKTSI3pj8P4rILSGHnlmX2w", "3iCBpsYvGi3SYKI8XyBOUMkzOw7SmYwPN8S4GhwX");
  
    angular.module('AuthApp', [])
.run(['$rootScope', function($scope) {
  $scope.scenario = 'Sign up';
  $scope.currentUser = Parse.User.current();
  
  $scope.signUp = function(form) {
     var user = new Parse.User();
user.set("username", form.username);
user.set("email", form.email);
user.set("phone", form.phone);
user.set("password", form.password);
    
    user.signUp(null, {
      success: function(user) {
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to sign up:  " + error.code + " " + error.message);
      }
    });    
  };
  
  $scope.logIn = function(form) {
    Parse.User.logIn(form.username, form.password, {
      success: function(user) {
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to log in: " + error.code + " " + error.message);
      }
    });
  };
  
  $scope.logOut = function(form) {
    Parse.User.logOut();
    $scope.currentUser = null;

  };
}]);


// other fields can be set just like with Parse.Object
  
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

function shipping() {
    var check_email = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z\.]{2,6}$/;
                var check_first = /^[a-zA-Z]{3,16}$/;
                 var check_last = /^[a-zA-Z]{3,16}$/;
                var check_phone = /^[0-9]{3,16}$/;
                               if(document.shipping.email.value==="")
                                {
                                                alert("please enter email");
                                                document.shipping.email.focus();
                                                return false;
                                }
                                else if(check_email.test(document.shipping.email.value) == false)
                                {
                                                alert('Invalid  email');
                                                document.shipping.email.focus();
                                                return false;
                                }
                                if(document.shipping.first.value==="")
                                {
                                                alert("please enter first name");
                                                document.shipping.first.focus();
                                                return false;
                                }
                                else if(check_first.test(document.shipping.first.value) == false)
                                {
                                                alert('Invalid  first');
                                                document.shipping.first.focus();
                                                return false;
                                }
                                 if(document.shipping.last.value==="")
                                {
                                                alert("please enter last name");
                                                document.shipping.last.focus();
                                                return false;
                                }
                                else if(check_last.test(document.shipping.last.value) == false)
                                {
                                                alert('Invalid  last');
                                                document.shipping.last.focus();
                                                return false;
                                }
                               if(document.shipping.address.value==="")
                                {
                                                alert("please enter address");
                                                document.shipping.address.focus();
                                                return false;
                                }
                                 if(document.shipping.city.value==="")
                                {
                                                alert("please enter city");
                                                document.shipping.city.focus();
                                                return false;
                                }
                                 if(document.shipping.code.value==="")
                                {
                                                alert("please enter postal code");
                                                document.shipping.code.focus();
                                                return false;
                                }
                                if((document.shipping.phone.value==="")||(document.shipping.phone.value <10))
                                {
                                                alert("Please enter your phone number.");
                                                document.shipping.passconf.focus();
                                                return false;
                                }
                                 else if(check_phone.test(document.shipping.phone.value) == false)
                                {
                                                alert('Invalid  phone number');
                                                document.shipping.phone.focus();
                                                return false;
                                }
                         
  }
