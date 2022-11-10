let input = ""
do{
    input = prompt("Enter a BCIT course code (4-digit number):");

}
while(input.length != 4 && isNaN(Number(input)))
console.log(input)
