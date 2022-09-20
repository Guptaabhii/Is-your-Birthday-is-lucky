const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outPut = document.querySelector("#out-put");

checkButton.addEventListener("click", function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNumber.value);
});

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}
function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
    outPut.innerText = ("Yay! your Birthdate is Lucky🤩");
    }
    else{
        outPut.innerText = "Oops! your Birthdate is Not-Lucky☹️";
    }
}