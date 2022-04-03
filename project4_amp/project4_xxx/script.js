


function setArrays() {
    var firstName = "a,b,c";
    var lastName = "a,b,c";
    var email = "a@gmail.com,b@gmail.com,c@gmail.com";

    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("email", email);
}

function setInputs() {
    firstName = sessionStorage.getItem("firstName").toString();
    lastName = sessionStorage.getItem("lastName").toString();
    email = sessionStorage.getItem("email").toString();
    
    var firstNameArray = firstName.split(",");
    var lastNameArray = lastName.split(",");
    var emailArray = email.split(",");
    
    var length = firstNameArray.length;
    
    sessionStorage.setItem("count", 0);
    
    var count = sessionStorage.getItem("count");
    
    
    
    while (count < length) {
    
        if (count = 0) {
            var array = [];
            sessionStorage.setItem("Array", array);
        }
    
        document.getElementById("firstName").value = firstNameArray[count];
        document.getElementById("lastName").value = lastNameArray[count];
        document.getElementById("email").value = emailArray[count];
    
        count++;
        sessionStorage.setItem("count", count);
    
        // document.getElementById("submitButton").click();
    }

}


function grabData() {
        // Results page js
        var tdArray = document.getElementsByTagName("td");
        var tdItem = tdArray[1].textContent;
    
        var sessionArray = sessionStorage.getItem("Array");
        sessionArray += "," + tdItem;
        sessionStorage.setItem("Array", sessionArray);
        var array = sessionStorage.getItem("Array");
        window.history.back();
}


// WORKINGISH CODE ABOVE

document.getElementById("submitButton").click();

// sessionStorage.setItem("firstName", firstName);
// sessionStorage.setItem("lastName", lastName);
// sessionStorage.setItem("email", email);

// firstName = sessionStorage.getItem("firstName").toString();
// lastName = sessionStorage.getItem("lastName").toString();
// email = sessionStorage.getItem("email").toString();

// var firstNameArray = firstName.split(",");
// var lastNameArray = lastName.split(",");
// var emailArray = email.split(",");

document.getElementById("firstName").value = firstNameArray[1];
window.history.back();







