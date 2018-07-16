/*
below are functions to get data from user print it and clear data.

https://www.w3schools.com/js/js_datatypes.asp
fnm & lnm are STRING datatype as they accept string and they represent First name and Last name of student (Q2.1,Q2.2)

age is a NUMBER variable Q2.3 and Q2.4
https://www.w3schools.com/js/js_numbers.asp
*/


//this value property will set data empty in textbox 
function clearData() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age").value = "";

    document.getElementById("space1").innerHTML = "";
    document.getElementById("space2").innerHTML = "";
    document.getElementById("space3").innerHTML = "";
}


// 
function printData() {
    var fnm = document.getElementById("firstname").value;
    var lnm = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
//create a student object
    var student = {
        first:fnm,
        last:lnm,
        ag: age
    }
    //printing name from textbox
    document.getElementById("space1").innerHTML = fnm+" "+lnm


    //display details of object
    document.getElementById("space2").innerHTML = student.ag + "<br> this printed by using object's age property";
    
} 
//this calculates age on your birthday's year
function dob(birthyear) {
    var currentyear = new Date().getFullYear();
    return currentyear - birthyear;
}

//bonus one :)
function bonus() {
    var y =prompt("Enter your birth year only");
    document.getElementById("space3").innerHTML = "you are " + dob(y) + " years old."

}



