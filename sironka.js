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
