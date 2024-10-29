const button = document.querySelector("#button");
const output = document.querySelector("#output-head");
const userIn = document.querySelector("#date-input")
button.addEventListener("click",()=>{
    let curYear = new Date().getFullYear();
    let curMonth = new Date().getMonth();
    let year = new Date(userIn.value).getFullYear();
    let month = new Date(userIn.value).getMonth();
    let date = new Date(userIn.value).getDate();
    let Age = curYear - year;
    let ageMonth = Math.floor((curMonth - month + 1));
    if (ageMonth < 0) {
        Age--; 
        ageMonth = (ageMonth + 12) % 12;
    }
    if(isNaN(year) || isNaN(month) || isNaN(date)){
        output.innerText = "Please Enter Valid Input";
    }else{
        output.innerText = `You're Age ${Age} Years & ${ageMonth} Months Old`;
    }
})