// write js code here corresponding to matches.html
var matches=JSON.parse(localStorage.getItem("schedule"));
display(matches);
console.log(matches)
var favarr=JSON.parse(localStorage.getItem("favourites"))||[];
var filt=document.querySelector("#filterVenue");
     filt.addEventListener("click",filterfun);
function filterfun(){
    var selected=filt.value;
    if(filt.value=="none") {
        display(matches)
    }
    else   {
    var filter1=matches.filter(function(elem){
        return elem.venue==selected;
    })
    display(filter1)
    }
}
function display(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
            td1.innerText=elem.matchnumber
        var td2=document.createElement("td");
              td2.innerText=elem.teamA
        var td3=document.createElement("td");
            td3.innerText=elem.teamB
        var td4=document.createElement("td");
            td4.innerText=elem.date
        var td5=document.createElement("td");
            td5.innerText=elem.venue
        var td6=document.createElement("td");
            td6.innerText="favourites";
            td6.style.color="green";
            td6.style.cursor="pointer"
            td6.addEventListener("click",function(){
                favouritefun(elem);
            })
            tr.append(td1,td2,td3,td4,td5,td6);
            document.querySelector("tbody").append(tr);
    })
     function favouritefun(elem){
          favarr.push(elem);
          localStorage.setItem("favourites",JSON.stringify(favarr));
     }
}