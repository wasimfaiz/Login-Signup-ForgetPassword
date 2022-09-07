$(function () {
    $("#register-link").click(function () {
        $("#login-box").hide();
        $("#register-box").show();
    });
    $("#login-link").click(function () {
        $("#login-box").show();
        $("#register-box").hide();
    });
    $("#forgot-link").click(function () {
        $("#login-box").hide();
        $("#forgot-box").show();
    });
    $("#back-link").click(function () {
        $("#login-box").show();
        $("#forgot-box").hide();
    });
});


// show password sign in

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


// confierm password

function onChange() {
    const password = document.querySelector('input[name=mpassword]');
    const confirm = document.querySelector('input[name=cpassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }