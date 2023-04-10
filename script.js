const teamsDetails = [
    {
        id: 0,
        playerName: 'MS DHONI',
        from: 'CSK',
        price: '12cr',
        isPlaying: true,
        description: 'WK Keeper - Batter',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png',
        playerTeam: "Chennai Super King",
    },
    {
        id: 1,
        playerName: 'RAVINDRA JADEJA',
        from: 'CSK',
        price: '16CR',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png',
        playerTeam: "Chennai Super King",
    },
    {
        id: 2,
        playerName: 'DEEPAK CHAHAR',
        from: 'CSK',
        price: '14CR',
        isPlaying: false,
        description: 'Bowler',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/91.png',
        playerTeam: "Chennai Super King",
    },
    {
        id: 3,
        playerName: 'MOEEN ALI',
        from: 'CSK',
        price: '8CR',
        isPlaying: false,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/206.png',
        playerTeam: "Chennai Super King",
    },
    {
        id: 4,
        playerName: 'RUTURAJ GAYAKWAD',
        from: 'CSK',
        price: '6CR',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png',
        playerTeam: "Chennai Super King",
    },
    {
        id: 5,
        playerName: 'DWAYNE BRAVO',
        from: 'CSK',
        price: '4.40CR',
        isPlaying: false,
        description: 'All-Rounder',
        playerImg: '',
        playerTeam: "Chennai Super King",
    },
    {
        id: 6,
        playerName: 'ROHIT SHARMA',
        from: 'MI',
        price: '16CR',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png',
        playerTeam: "Mumbai Indians",
    },
    {
        id: 7,
        playerName: 'ISHAN KISHAN',
        from: 'MI',
        price: '15.25CR',
        isPlaying: true,
        description: 'Wicket-Keeper Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png',
        playerTeam: "Mumbai Indians",
    },
    {
        id: 8,
        playerName: 'SURYAKUMAR YADAV',
        from: 'MI',
        price: '8CR',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png',
        playerTeam: "Mumbai Indians",
    },
    {
        id: 9,
        playerName: 'TIM DAVID',
        from: 'MI',
        price: '8.25CR',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/636.png',
        playerTeam: "Mumbai Indians",
    },
    {
        id: 10,
        playerName: 'JOFRA ARCHER',
        from: 'MI',
        price: '8CR',
        isPlaying: false,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/181.png',
        playerTeam: "Mumbai Indians",
    },
    {
        id: 11,
        playerName: 'KIERON POLLARD',
        from: 'MI',
        price: '6CR',
        isPlaying: false,
        description: 'All-Rounder',
        playerImg: '',
        playerTeam: "Mumbai Indians",
    },
    {
        id: 12,
        playerName: 'FAF DU PLESSIS',
        from: 'RCB',
        price: '7CR',
        isPlaying: true,
        description: 'Batsman',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png',
        playerTeam: "Royal Challengers Banglore",
    },
    {
        id: 13,
        playerName: 'VIRAT KOHLI',
        from: 'RCB',
        price: '15 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png',
        playerTeam: "Royal Challengers Banglore",
    },
    {
        id: 14,
        playerName: 'DINESH KARTHIK',
        from: 'RCB',
        price: '5.50 Cr',
        isPlaying: true,
        description: 'Wicket-Keeper Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/13.png',
        playerTeam: "Royal Challengers Banglore",
    },
    {
        id: 15,
        playerName: 'MOHAMMED SIRAJ',
        from: 'RCB',
        price: '7 Cr',
        isPlaying: true,
        description: 'Bowler',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/63.png',
        playerTeam: "Royal Challengers Banglore",
    },
    {
        id: 16,
        playerName: 'GLENN MAXWELL',
        from: 'RCB',
        price: '11 Cr',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png',
        playerTeam: "Royal Challengers Banglore",
    },
    {
        id: 17,
        playerName: 'SIDDARTH KAUL',
        from: 'RCB',
        price: '75 Lakh',
        isPlaying: false,
        description: 'Bowler',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/64.png',
        playerTeam: "Royal Challengers Banglore",
    },
    {
        id: 18,
        playerName: 'KL RAHUL',
        from: 'LSG',
        price: '17 Cr',
        isPlaying: true,
        description: 'Wicket-Keeper Batsman',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png',
        playerTeam: "Lucknow Super Giants",
    },
    {
        id: 19,
        playerName: 'AVESH KHAN',
        from: 'LSG',
        price: '10 Cr',
        isPlaying: true,
        description: 'Bowler',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/109.png',
        playerTeam: "Lucknow Super Giants",
    },
    {
        id: 20,
        playerName: 'MARCUS STOINIS',
        from: 'LSG',
        price: '9.20 Cr',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/23.png',
        playerTeam: "Lucknow Super Giants",
    },
    {
        id: 21,
        playerName: 'QUINTON DE KOCK',
        from: 'LSG',
        price: '10 Cr',
        isPlaying: true,
        description: 'WK-keeper All-Rounder',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/170.png',
        playerTeam: "Lucknow Super Giants",
    },
    {
        id: 22,
        playerName: 'NICHOLAS POORAN',
        from: 'LSG',
        price: '16 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/136.png',
        playerTeam: "Lucknow Super Giants",
    },
    {
        id: 23,
        playerName: 'KRUNAL PANDYA',
        from: 'LSG',
        price: '8.25 Cr',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/17.png',
        playerTeam: "Lucknow Super Giants",
    },
    {
        id: 24,
        playerName: 'HARDIK PANDYA',
        from: 'GT',
        price: '15 Cr',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/54.png',
        playerTeam: "Gujarat Titans",
    },
    {
        id: 25,
        playerName: 'RASHID KHAN',
        from: 'GT',
        price: '15 Cr',
        isPlaying: true,
        description: 'Bowler',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/218.png',
        playerTeam: "Gujarat Titans",
    },
    {
        id: 26,
        playerName: 'MATTHEW WADE',
        from: 'GT',
        price: '10 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/549.png',
        playerTeam: "Gujarat Titans",
    },
    {
        id: 27,
        playerName: 'RAHUL TEWATIA',
        from: 'GT',
        price: '9 Cr',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/120.png',
        playerTeam: "Gujarat Titans",
    },
    {
        id: 28,
        playerName: 'SHUBHAMN GILL',
        from: 'GT',
        price: '8 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png',
        playerTeam: "Gujarat Titans",
    },
    {
        id: 29,
        playerName: 'JONNY BAIRSTOW',
        from: 'PXIK',
        price: '12 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/216.png',
        playerTeam: "Punjab Kings",
    },
    {
        id: 30,
        playerName: 'LIAM LIVINGSTONE',
        from: 'PXIK',
        price: '11.50 Cr',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/183.png',
        playerTeam: "Punjab Kings",
    },
    {
        id: 31,
        playerName: 'KAGISO RABADA',
        from: 'PXIK',
        price: '9.25 Cr',
        isPlaying: true,
        description: 'Bowler',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/116.png',
        playerTeam: "Punjab Kings",
    },
    {
        id: 32,
        playerName: 'SHAHRUKH KHAN',
        from: 'PXIK',
        price: '9 Cr',
        isPlaying: true,
        description: 'All-Rounder',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/590.png',
        playerTeam: "Punjab Kings",
    },
    {
        id: 33,
        playerName: 'SHIKHAR DHAWAN',
        from: 'PXIK',
        price: '8.25 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png',
        playerTeam: "Punjab Kings",
    },
    {
        id: 34,
        playerName: 'MAYANK AGARWAL',
        from: 'SRH',
        price: '14.00 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/55.png',
        playerTeam: "Sunrisers Hyderabad",
    },
    {
        id: 35,
        playerName: 'HEINRICH KLAASEN',
        from: 'SRH',
        price: '10.75 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/202.png',
        playerTeam: "Sunrisers Hyderabad",
    },
    {
        id: 36,
        playerName: 'WASHINGTON SUNDAR',
        from: 'SRH',
        price: '8.75 Cr',
        isPlaying: true,
        description: 'All-Rounder ',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/20.png',
        playerTeam: "Sunrisers Hyderabad",
    },
    {
        id: 37,
        playerName: 'BHUVNESHWAR KUMAR',
        from: 'SRH',
        price: '4.20 Cr',
        isPlaying: true,
        description: 'Bowler',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/15.png',
        playerTeam: "Sunrisers Hyderabad",
    },
    {
        id: 38,
        playerName: '	RAHUL TRIPATHI',
        from: 'SRH',
        price: '8.50 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/188.png',
        playerTeam: "Sunrisers Hyderabad",
    },
    {
        id: 39,
        playerName: 'SANJU SAMSON',
        from: 'RR',
        price: '14.00 Cr',
        isPlaying: true,
        description: 'Wicket-Keeper',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png',
        playerTeam: "Rajasthan Royals",
    },
    {
        id: 40,
        playerName: 'PRASIDH KRISHNA',
        from: 'RR',
        price: '10.00 Cr',
        isPlaying: true,
        description: 'Bowler',
        playerImg: 'https://cricgram.b-cdn.net/wp-content/uploads/2022/04/Prasidh-Krishna-compressed.jpg',
        playerTeam: "Rajasthan Royals",
    },
    {
        id: 41,
        playerName: '	JOS BUTTLER',
        from: 'RR',
        price: '10.00 Cr',
        isPlaying: true,
        description: 'Wicket-Keeper',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png',
        playerTeam: "Rajasthan Royals",
    },
    {
        id: 42,
        playerName: 'DEVDUTT PADIKKAL',
        from: 'RR',
        price: '7.75 Cr',
        isPlaying: true,
        description: 'Batsman',
        playerImg: '	https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/200.png',
        playerTeam: "Rajasthan Royals",
    },
    {
        id: 43,
        playerName: 'YUZVENDRA CHAHAL',
        from: 'RR',
        price: '6.50 Cr',
        isPlaying: true,
        description: 'Bowler ',
        playerImg: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/10.png',
        playerTeam: "Rajasthan Royals",
    },
    {
        id: 44,
        playerName: "Shreyas Iyer",
        from: "KKR",
        price: "10.50 Cr",
        isPlaying: true,
        description: "Batsman",
        playerImg: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/12.png",
        playerTeam: "Kolkata Knight Riders",
    },
    {
        id: 45,
        playerName: "Abhijeet Tomar",
        from: "KKR",
        price: "18.50 Cr",
        isPlaying: false,
        description: "Batsman",
        playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
        playerTeam: "Kolkata Knight Riders",
    },
    {
        id: 46,
        playerName: "Pat Cummins",
        from: "KKR",
        price: "1.50 Cr",
        isPlaying: true,
        description: "Bowler",
        playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
        playerTeam: "Kolkata Knight Riders",
    },
    {
        id: 47,
        playerName: "Ashok Sharma",
        from: "KKR",
        price: "18 Cr",
        isPlaying: true,
        description: "Batsman",
        playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
        playerTeam: "Kolkata Knight Riders",
    },
    {
        id: 48,
        playerName: "Rinku Singh",
        from: "KKR",
        price: "10.50 Cr",
        isPlaying: true,
        description: "All-rounder",
        playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
        playerTeam: "Kolkata Knight Riders",
    },
    {
        id: 49,
        playerName: "AXAR PATEL",
        from: "DC",
        price: "5 Cr",
        isPlaying: true,
        description: "All-Rounder",
        playerImg: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/110.png",
        playerTeam: "Delhi Capitals",
    },
    {
        id: 50,
        playerName: "MITCHELL MARSH",
        from: "DC",
        price: "6.5 Cr",
        isPlaying: true,
        description: "All-Rounder",
        playerImg: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/40.png",
        playerTeam: "Delhi Capitals",
    },
    {
        id: 51,
        playerName: "KULDEEP YADAV",
        from: "DC",
        price: "2 Cr",
        isPlaying: true,
        description: "Bowler",
        playerImg: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/14.png",
        playerTeam: "Delhi Capitals",
    },
    {
        id: 52,
        playerName: "LUNGI NGIDI",
        from: "DC",
        price: "5 Cr",
        isPlaying: false,
        description: "Bowler",
        playerImg: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/99.png",
        playerTeam: "Delhi Capitals",
    },
    {
        id: 53,
        playerName: "MANISH PANDEY",
        from: "DC",
        price: " Cr",
        isPlaying: true,
        description: "Batter",
        playerImg: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/16.png",
        playerTeam: "Delhi Capitals",
    },

]

const teamData = [
    {
        id: 1,
        fullName: 'Gujarat Titans',
        shortName: 'GT',
        wonCount: 1,
        teamIcon: "https://imgk.timesnownews.com/story/Gujarat_Titans_logo.png?tr=w-1200,h-900"

    },
    {
        id: 2,
        fullName: 'Chennai Super King',
        shortName: 'CSK',
        wonCount: 4,
        teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png"

    },
    {
        id: 3,
        fullName: 'Royal Challengers Banglore',
        shortName: 'RCB',
        wonCount: 0,
        teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"

    },
    {
        id: 4,
        fullName: 'Sunrisers Hyderabad',
        shortName: 'SRH',
        wonCount: 1,
        teamIcon: "https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png"

    },
    {
        id: 5,
        fullName: 'Mumbai Indians',
        shortName: 'MI',
        wonCount: 5,
        teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"

    },
    {
        id: 6,
        fullName: 'Delhi Capitals',
        shortName: 'DC',
        wonCount: 0,
        teamIcon: "https://www.delhicapitals.in/static-assets/images/cssimages/logo.png"

    },
    {
        id: 7,
        fullName: 'Punjab KIngs',
        shortName: 'PXIK',
        wonCount: 0,
        teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/1200px-Punjab_Kings_Logo.svg.png"

    },
    {
        id: 8,
        fullName: 'Rahasthan Royals',
        shortName: 'RR',
        wonCount: 0,
        teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png"

    },
    {
        id: 9,
        fullName: 'Kolkata Knight Riders',
        shortName: 'KKR',
        wonCount: 2,
        teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"

    },
    {
        id: 10,
        fullName: 'Lucknow Super Giants',
        shortName: 'LSG',
        wonCount: 0,
        teamIcon: "https://upload.wikimedia.org/wikipedia/en/e/e2/Lucknow_Super_Giants_logo.png"

    }
]






// let addTeamClick = () => {
//     window.open('./addTeams.html', '_self');
// }
// let addPlayerClick = () => {
//     window.open('./addPlayer.html', '_self');
// }

let detailsOfTeam = [];
let detailsOfPlayer = [];
let teamCard = document.getElementById('cards');

if (localStorage.getItem('teamDetail') === null)
    localStorage.setItem('teamDetail', JSON.stringify(teamData));

if (localStorage.getItem('playerDeatils') === null)
    localStorage.setItem('playerDetails', JSON.stringify(teamsDetails));

detailsOfTeam = JSON.parse(localStorage.getItem('teamDetail'));
console.log(detailsOfTeam);

detailsOfPlayer = JSON.parse(localStorage.getItem('playerDetails'));
console.log(detailsOfPlayer);


var teamMainBox = document.getElementById("cards");
console.log(teamMainBox)
for (var i = 0; i < detailsOfTeam.length; i++) {
    teamMainBox.innerHTML += `
    <div    onclick="makethisinclick('${i}')" class="minibox">

    <img src="${detailsOfTeam[i].teamIcon}" class="miniImage" alt=""/> 
    <div class="dataodcard">

  <p class="text1"> ${detailsOfTeam[i].fullName}   </p>
  <p class="text2"> Won Count : ${detailsOfTeam[i].wonCount} </p>
 
</div>

</div>

`;
}
function makethisinclick(res) {
    var clickedCard = detailsOfTeam[res].shortName;

    window.open(`./teams.html?name=${clickedCard}`, "_self");
}





let search = [];
for (var i = 0; i < detailsOfTeam.length; i++) {
    search.push(detailsOfTeam[i].shortName);
}

let searchBar = document.querySelector(".form");
let inputBox = searchBar.querySelector('input');
let suggestionBox = searchBar.querySelector('.autocom-box');
let icon = searchBar.querySelector('.icon')


inputBox.onkeyup = (e) => {
    if (e.keyCode == 13) {
        icon.click();
    }
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = search.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return (data = `<li>${data}</li>`);
        });
        searchBar.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggestionBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "currentLi(this)");
        }
    } else {
        searchBar.classList.remove("active");
    }
};
function currentLi(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        window.open(`./teams.html?name=${element.textContent}`, "_self");
    };
    searchBar.classList.remove("active");
}
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join("");
    }
    suggestionBox.innerHTML = listData;
}












