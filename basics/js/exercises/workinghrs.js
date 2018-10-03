var workinghrs = [
[12,30,17,50],
[20,30,21,40],
[22,00,24,00],
[00,10,1,20]
]

var workingTime = {
    hrsTime: [],
    minTime: []
}

function toDo(){
    for(i=0;i<workinghrs.length;i++){
        var num1 = workinghrs[i][0]
        var num2 = workinghrs[i][1]
        var num3 = workinghrs[i][2]
        var num4 = workinghrs[i][3]
        function calc(){
            var doHrs = num3-num1
            var doMin = num4-num2
            workingTime.hrsTime.push(doHrs)
            workingTime.minTime.push(doMin)
        }
        calc()
    }
}

toDo()
function final (){
    var sumHrs = workingTime.hrsTime.reduce(function (a,b){return a+b})
    var sumMin = workingTime.minTime.reduce(function (a,b){return a+b})
    if (sumMin < 0){
        sumMin = sumMin + 60
        sumHrs = sumHrs - 1
    }
    console.log("You has worked today total "+sumHrs+" hrs and "+ sumMin +" mins" )
    // alert("You has worked today total "+sumHrs+" hrs and "+ sumMin +" mins" )
};
final()

// Different type of write hrs
//-----------------------------------------
// var workinghrs = [
//     {start:[10,40], end:[12,30] },
//     {start:[13,00], end:[13,30] },
//     {start:[14,00], end:[15,00] },
//     {start:[15,30], end:[16,00] }
// ]

// var workingTime = {
//     hrsTime: [],
//     minTime: []
// }

// function acounter (){
//     for(i=0;i<workinghrs.length;i++){
//         var workingTime[i] = i;
//         function calc(){
//             var hrsStart = workinghrs[workingTime[i]]["start"][0]
//             var minStart = workinghrs[workingTime[i]]["start"][1]
//             var hrsEnd = workinghrs[workingTime[i]]["end"][0]
//             var minEnd = workinghrs[workingTime[i]]["end"][1]
//             var hrsCalc = (hrsEnd-hrsStart)
//             var minCalc = (minEnd-minStart)
//             workingTime.hrsTime.push(hrsCalc)
//             workingTime.minTime.push(minCalc)
//         }
//         calc()
//     }
// }
// acounter()

// function total(){
// var hrsTotal = workingTime.hrsTime.reduce(function(total, num) { return total + num; }, 0)
// var minTotal = workingTime.minTime.reduce(function(total, num) { return total + num; }, 0)
// if (minTotal<0){
//     hrsTotal = hrsTotal -1
//     minTotal = minTotal +60
// }
// console.log("You has worked today total "+hrsTotal+" hrs and "+ minTotal +" mins")
// }
// total()