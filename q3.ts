//write a program that converts given number of days in to weeks and days such as 17 days =2 weeks and 3 days.
console.log("Q.03");
let num_of_days:number=17;
let weeks:number=Math.floor(num_of_days/7);
let remaing_days:number=num_of_days%7;
console.log(`Number of weeks:${weeks} & remaing days is:${remaing_days}`);
//console.log(`Remain days in weeks ${remaing_days}`);