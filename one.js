function divideChocolates(totalChocolates, totalChildren) {
    
   let toffee= Math.floor(totalChocolates/totalChildren);
    let remain= Math.floor(totalChocolates%totalChildren)
  
   return [toffee,remain]
}
console.log(divideChocolates(12,5));

