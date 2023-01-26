function GEEKSFORGEEKS(){
    var name = document.forms.RegForm.Name.value;
    var email = document.forms.RegForm.email.value;
    var phone = document.forms.RegForm.Telephone.value;
    var what = document.forms.RegForm.Subject.value;
    var password = document.forms.RegForm.Password.value;

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;  //Javascript reGex for Phone Number Validation.
    var regName =  /\d+$/g; 

    if (name == "" || regName.test(name)){
        window.alert("Please enter your name properly.")
        name.focus();
        return false;
    }

    if (address == ""){
        window.alert("Please enter your address.")
        address.focus();
        return false;
    }

    if (email == "" || regEmail.test(email)){
        window.alert("Please enter a valid e-mail address.")
        email.focus();
        return false;
    }

    if (password == ""){
        window.alert("Please enter your password.")
        password.focus();
        return false;
    }

    if (phone == "" || regPhone.test(phone)){
        window.alert("Please enter a valid phone number.")
        phone.focus();
        return false;
    }

    if (what.selectedIndex < 1){
        alert("Please enter your course.");
        what.focus();
        return false;
    }

    if (password.length < 6){
        alert("Password must be at least 6 characters long.");
        password.focus();
        return false;
    }
    return true;
}
