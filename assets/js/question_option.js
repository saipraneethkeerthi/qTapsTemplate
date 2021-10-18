let options = [{
    "id": 101,
    "value": "Modi",
    "count": 0,
}, {
    "id": 102,
    "value": "Lallu",
    "count": 0,
}, {
    "id": 103,
    "value": "Rahul",
    "count": 0,
}, {
    "id": 104,
    "value": "Srk",
    "count": 0,
}, {
    "id": 106,
    "value": "Praneeth",
    "count": 0,
}, {
    "id": 107,
    "value": "Ramu",
    "count": 0,
}];

// let viewsel = document.getElementById("views");

let cpy = function(){
    var url = "https:<userId>/<questionId>"
    console.log(url)
    // Url.select();
    document.execCommand("copy");
}

window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {

        title: {
            text: "Question taps per month"
        },
        data: [{
            type: "line",

            dataPoints: [{
                    x: new Date(2012, 00, 1),
                    y: 450
                },
                {
                    x: new Date(2012, 01, 1),
                    y: 414
                },
                {
                    x: new Date(2012, 02, 1),
                    y: 520
                },
                {
                    x: new Date(2012, 03, 1),
                    y: 460
                },
                {
                    x: new Date(2012, 04, 1),
                    y: 450
                },
                {
                    x: new Date(2012, 05, 1),
                    y: 500
                },
                {
                    x: new Date(2012, 06, 1),
                    y: 480
                },
                {
                    x: new Date(2012, 07, 1),
                    y: 480
                },
                {
                    x: new Date(2012, 08, 1),
                    y: 410
                },
                {
                    x: new Date(2012, 09, 1),
                    y: 500
                },
                {
                    x: new Date(2012, 10, 1),
                    y: 480
                },
                {
                    x: new Date(2012, 11, 1),
                    y: 510
                }
            ]
        }]
    });

    chart.render();
}

function hover() {
    let graphel = document.getElementById("chartContainer");
    graphel.classList.remove("d-none")
}

function hoverend() {
    let graphel = document.getElementById("chartContainer");
    graphel.classList.add("d-none")
}

let votes = document.getElementById("vote");

let vote = parseInt(votes.innerHTML);
let totalVotes = vote
let votePercent = (1 / totalVotes) * 100
let voteCount = 0
var voteCountPercent
console.log(vote)
//  let val = document.getElementsByTagName("button")[0].innerHTML;
// console.log(val);

function myFun(but) {
    for (let ele of options) {
        if (but.innerHTML === ele.value) {
            // console.log(true);
            ele.count += 1;
            vote -= 1;
            voteCount += 1
            voteCountPercent = 100 / voteCount
            votes.innerHTML = vote;
            // console.log(vote)

        }

    }
    if (vote === 0) {
        but.parentElement.setAttribute("class", "disable")
    }
    let val = options.filter(a => a.count > 1)
    // console.log(val,val.length)
    if (!val.length) {
        options.map(a => {
            if (a.count === 1) {
                a.percentage = voteCountPercent
            }
        })
    } else {
        options.map(a => {
            if (a.count > 0) {
                a.percentage = votePercent * a.count
            }
        })
    }
    console.log(options);
}