// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfunction);
var arr=JSON.parse(localStorage.getItem("schedule"))||[];
function myfunction(){
    event.preventDefault();
    var objt={
        matchnumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    console.log(objt);
    arr.push(objt);
    localStorage.setItem("schedule",JSON.stringify(arr));
}