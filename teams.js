let urlData = location.href;
console.log('urlData',urlData)
let newUrl = new URL(urlData);
console.log('newUrl',newUrl)
let teamFull = newUrl.searchParams.get("name");


console.log('teamFull',teamFull)


// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamDetail"));
playersDetails = JSON.parse(localStorage.getItem("playerDetails"));
var teamMainBox=document.getElementById("cards")
var tableTeam=document.getElementById("table-team")

var count=0;



    

for(var i=0;i<playersDetails.length;i++){
if(teamFull==playersDetails[i].from){
  var isPlay=""
  if(playersDetails[i].isPlaying==true){
    isPlay="Playing"
  }
  else{
    isPlay="On Bench"
  }
var currentPlayer=playersDetails[i].playerName
count++
teamMainBox.innerHTML+=`
<div    onclick="makethisinclick('${currentPlayer}')"    class="minibox mn2">

<img src="${playersDetails[i].playerImg}" class="miniImage playerImg" alt=""/> 
<div class="dataodcard">

  <p class="text1"> ${playersDetails[i].playerName}   </p>
  <p class="text2"> Worth : ${playersDetails[i].price} </p>
  <p class="text2"> Playing : ${isPlay} </p>
  <p class="text2">
   ${playersDetails[i].description} </p>
 
</div>

</div>

`}
function makethisinclick(res){
  window.open(`./playerDetails.html?name=${res}`,"_self")
}

}
// search for top batsman
var topBatsman="";
for(var j=0;j<playersDetails.length;j++){
  if(playersDetails[j].description=="Batsman"&&playersDetails[j].from==teamFull){
   topBatsman=playersDetails[j].playerName

   break
  }
  else{
   topBatsman="No Player"
  }
}
// search for top bowler
var topBowler="";
for(var j=0;j<playersDetails.length;j++){
  if(playersDetails[j].description=="Bowler"&&playersDetails[j].from==teamFull){
   topBowler=playersDetails[j].playerName

   break
  }
  else{
   topBowler="No Player"
  }
}


// team table
console.log(count)
teamsDetails.map((item)=>{
  if(teamFull==item.shortName){

 
 return tableTeam.innerHTML+=`
 <table>
 <tr>
     <td>Team name</td>
     <td>${item.fullName}</td>
 </tr>

 <tr>
     <td>Team icon</td>
     <td> <img src="${item.teamIcon}" class="team-page-icon" alt=""></td>
 </tr>

 <tr>
     <td>Player count</td>
     <td>  ${count}</td>
 </tr>

 <tr>
     <td>Top Batsman</td>
     <td>${topBatsman}</td>
 </tr>
 <tr>
     <td>Top Bowler</td>
     <td>${topBowler}</td>
 </tr>

 <tr>
     <td>Won Count</td>
     <td>${item.wonCount}</td>
 </tr>
</table>

`
}

})
console.log(teamsDetails)


