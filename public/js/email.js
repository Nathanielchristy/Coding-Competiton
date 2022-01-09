function checkemail(){
    var val=document.getElementById("email").value;
    if(!val || !val.length) {
      return;
    }
    
    var regex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(!regex.test(val)) {
      document.getElementById("email").classList.remove("valid");
      document.getElementById("email").classList.add("invalid");
      return false
    } else {
      document.getElementById("email").classList.remove("invalid");
      document.getElementById("email").classList.add("valid");
      return true
    }
}
