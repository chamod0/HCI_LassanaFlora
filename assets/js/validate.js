function validate(){
    function myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
    var formIsValid =  myFunction();
    
    var first=document.forms["reg"]["first"];


    if(first.value == null || first.value == ""){
        first.style.borderColor = "red"; //NOT WORKING
        formIsValid = false;    
    }
   

    return formIsValid;

}