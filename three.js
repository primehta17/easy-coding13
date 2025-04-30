function checkArmstrongNumber(num) {
    let sum=0;
    for(let i=0;i<num.length;i++){
        let add=num[i]**3;
       sum+=add;
    }
    return sum==num?"Armstrong":"Not Armstrong";
}
console.log(checkArmstrongNumber("407"))