// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//----> object

let myCreatedDate = new Date(2023, 0, 23)//---> in this format month is counted from 0(january)
myCreatedDate = new Date(2023, 0, 23, 5, 3)
myCreatedDate = new Date("2023-01-14")//--------> in this format(string) month is counted from 01 (january)
myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()   //------>this always gives the time in mili second

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

