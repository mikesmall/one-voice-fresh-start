// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

document.addEventListener('DOMContentLoaded', function(event) {
  //-------------------------------------------------------------------------------------
  // Declare variables for click events:
  var modalSignIn = document.querySelector('#sign_in');
  var modalSignUp = document.querySelector('#sign_up');
  var signIn = document.querySelector('.signin');
  var signUp = document.querySelector('.signup');
  var close = document.querySelector('.close');

  //-------------------------------------------------------------------------------------

  // When user presses SIGN IN button, fade in the modal window

  function showModalSignIn(click) {
    modalSignIn.style.display = 'block';
  };
  signIn.addEventListener('click', showModalSignIn);


  // When user presses SIGN UP button, fade in the modal window

  function showModalSignUp(click) {
    modalSignUp.style.display = 'block';
  };
  signUp.addEventListener('click', showModalSignUp);

  //-------------------------------------------------------------------------------------

  // When user presses CLOSE button, fade out the SIGN IN modal window

  function hideModalSignIn(click) {
    modalSignIn.style.display = 'none';
  };
  close.addEventListener('click', hideModalSignIn);


  // When user presses CLOSE button, fade out the SIGN UP modal window

  function hideModalSignUp(click) {
    modalSignUp.style.display = 'none';
  };
  close.addEventListener('click', hideModalSignUp);

  //-------------------------------------------------------------------------------------

// End of 'DOMContentLoaded':
});
