// write a program that calculates discount for a product  based on its price. if the price is above $100 ,apply a 10% dis otherwise 5%
let price:number=15;
if (price>100){
    let percentage10=(price*10)/100;
    console.log(percentage10);
}

if (price<=100){
    let percentage5=(price*5)/100;
    console.log(percentage5);
}