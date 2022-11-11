let input = ""
do{
    input = prompt("Enter a BCIT course code (4-digit number):");

}
while(input.length != 4 && isNaN(Number(input)))
console.log(input)

const courselist = [

    {code: "ACIT 1620" , name: "Web Fundamental Techbology"},
    {code: "Math 1320" , name: "Technical Math for IT"},
    {code : "ACOT 1630", name: "DataBase Systems"},



]

for (let i of courselist){
    let courseNum = courselist[i].code.slice(5)
    let courseChar = courselist[i].code.slice(0,4)
    if(courseNum === input){
        console.log(`yes i am taking this course: ${courseChar} - ${courseNum}`)
    }
}

let array = ['first', 'second', 'third']

for(index in array){
  console.log(index)
}


for(item of array){
  console.log(item)
}
    
