function checkLeapYear(){
    var leapYear = document.getElementById(`year`).value;
    if((leapYear % 4 == 0) && (leapYear % 100 != 0) || (leapYear % 400 == 0)){
        alert (leapYear +" "+`is a leap year`);    
    }
    else{
        alert(leapYear +" "+`is not a leap year`)
    }
}
