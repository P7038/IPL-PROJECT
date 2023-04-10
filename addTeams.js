


let localTeam = JSON.parse(localStorage.getItem("teamDetail"));
let localPlayers = JSON.parse(localStorage.getItem("playerDetails"));

$("#addteamform").submit(function (e) {


    e.preventDefault();


    let inp_val = $("#teamName").val();
    let shortName = '';
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }

    let addData = {
        "id": localTeam.length,
        "fullName":$("#teamName").val() ,
        "shortName": shortName,
        
        "wonCount": $("#wonCount").val(),
        "teamIcon": $("#teamLogoUrl").val(),


    }

   localTeam.push(addData);
   localStorage.setItem("teamDetail", JSON.stringify(localTeam)); 

   location.href = `./teams.html?name=${addData.shortName}`;
})

     