//Q1

// var math= new Date();

// document.write(math)
 //

 //Q2
//  var date= new Date();

//  var month = date.getMonth()
// console.log(month)
//  var arr= ["January","February","March","April","May","June","July",
//  "August","September","October","November","December"];
// alert("Current Month : "+arr[month])

//Q3

//  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//  var d = new Date();
// var display= dayNames[d.getDay()];
// var res = display.slice(0, 3);
// document.write("Today is "+res)

//Q4
//  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//  var d = new Date();
//  var day = d.getDay()
// var display= dayNames[day];
// if(day ==0||day==6){
//     document.write(display+" Its Fun Day")
// }
// else {
//     document.write(display+" Its Working day ;/")   
// }


//Q5
// var date = new Date()
// var day=date.getDate()
// if(day<16){
//     document.write("first 15  days of month")

// }
// else{
//     document.write("Last fifteen days of the month")
// }


//Q6

// var date;
// date=new Date();

// var time=date.getTime()
// var firstDate=new Date("januray 1 ,1970 : ").toString()
// var time = date.getTime()
// firstDate= firstDate.slice(0,16)+time
// console.log(firstDate)
// var newTime= time/(1000*60)
// document.write("Date today : "+date)
// document.write("</br> Elapsed Milliseconds since  : "+firstDate)
// document.write("</br> Elapsed minutes since jan 1 , 1970 : "+newTime)

    //Q7
    // 0 TO 12 AM
    // 13 TO 23 PM
    // var date= new Date();

    // var hours=date.getHours()
    // console.log(hours)
    // if(hours>=12){
    //     document.write("<h3>Its AM</h3>")
    // }
    // else{
    //     document.write("<h3>Its PM</h3>")
    // }


