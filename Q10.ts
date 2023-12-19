// write a program that takes the number of units consumed by a user if it is greater than 100 then 10% tax if greaterr than 200 then 15 % tax so on up to if greater thean 500 then add 25% tax where the tax amount will be calculated by the amount of bill.for user input save a value in variable and use it or create a function for every program and pass desired value when u call that function best approch.
function calculatethebillwithtax(unitconsumed:number):{amounhtwithouttax:number,taxxamount:number,billwttax:number} {
    //calculate the bill witout tax
    let perunitrate=5;
    const amounhtwithouttax=unitconsumed*perunitrate;
    let taxxamount=0;
    //use if & else if for calculate the tax  conditions
    if(unitconsumed>100 && unitconsumed<=200){
        taxxamount=amounhtwithouttax*10/100;
    } else if(unitconsumed>200 && unitconsumed<=500){
        taxxamount=amounhtwithouttax*15/100;
    } else if(unitconsumed>500){
        taxxamount=amounhtwithouttax*25/100;
    }
    // calculate the bill amount woth tax
    const billwttax=amounhtwithouttax+taxxamount;
    return {amounhtwithouttax,taxxamount,billwttax};
      

}
const unitconsumed= 203;
const {amounhtwithouttax,taxxamount,billwttax}=calculatethebillwithtax(unitconsumed);
console.log(`Unitss consumed ${unitconsumed}`);
console.log(`bill amount wiout tax ${amounhtwithouttax}`);
console.log(`Tax bill ${taxxamount}`);
console.log(`Bill with tax ${billwttax}`);

/*function calculateBillWithTax(unitsConsumed: number): { billWithoutTax: number, taxAmount: number, totalBill: number } {
    // Calculate the total bill without tax
    const billWithoutTax = unitsConsumed * 5.0;

    let baseRate = 5.0; // Assume a base rate of 5.0
    let taxAmount = 0;

    // Check conditions and apply tax accordingly
    if (unitsConsumed > 100 && unitsConsumed <= 200) {
        //baseRate += 0.10; // 10% tax for units > 100
        taxAmount = billWithoutTax * 0.10;
    } else if (unitsConsumed > 200 && unitsConsumed <= 500) {
        //baseRate += 0.15; // 15% tax for units > 200
        taxAmount = billWithoutTax * 0.15;
    } else if (unitsConsumed > 500) {
        //baseRate += 0.25; // 25% tax for units > 500
        taxAmount = billWithoutTax * 0.25;
    }

    // Calculate the total bill including tax
    const totalBill = billWithoutTax + taxAmount;

    return { billWithoutTax, taxAmount, totalBill };
}

// Example usage:
const unitsConsumed = 250; // You can change this value
const { billWithoutTax, taxAmount, totalBill } = calculateBillWithTax(unitsConsumed);

console.log(`Units Consumed: ${unitsConsumed}`);
console.log(`Bill without Tax: ${billWithoutTax.toFixed(2)}`);
console.log(`Tax Amount: ${taxAmount.toFixed(2)}`);
console.log(`Total Bill with Tax: ${totalBill.toFixed(2)}`);
*/

const consumeunits=300;
calculatethebillwithtax(333,500);
console.log(`consumed uints ${consumeunits}`);
console.log(`total bill with out tax ${amounhtwithouttax}`);
console.log(`Tax amount ${taxxamount}`);
console.log(`bill with tax ${taxxamount}`);