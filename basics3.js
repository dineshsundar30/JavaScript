var marks = Array(6)
var marks = new Array(20,40,35,12,37,100)

var marks =[20,40,35,12,37,100]
subMarks =marks.slice(2,5)
console.log(subMarks)

console.log(marks[2]) //35
marks[3] = 14
console.log(marks) //[20,40,35,14,37,100]
console.log(marks.length) //6

marks.push(65)            // to add the velue into the array
console.log(marks) //[20,40,35,14,37,100,65]

marks.pop()
console.log(marks) //[20,40,35,14,37,100]

marks.unshift(12)
console.log(marks) //[12,20,40,35,14,37,100]

console.log(marks.indexOf(100))

// to check the element is present in the array
console.log(marks.includes(120))

-------------------------------------------------------------------------------------------------------------------------------------------------
                                               // reduce

var sum =0
for(let i =0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum = sum + marks[i] //32+40
}
console.log(sum)

//reduce
let total =marks.reduce((sum,mark)=>sum+mark,0)     //marks.reduce((variable element,itterater)=>expression,variable element value)
console.log(total)
-------------------------------------------------------------------------------------------------------------------------------------------------
                                            //filter 
var scores = [12,13,14,16]
//create new array with even numbers of scores and multiply each value
// with 3 and sum themarray [12,14,16]
var evenScores =[]
for(let i =0;i<scores.length;i++)
{
   
    if(scores[i] %2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

//filter                                                            // where you need to use decler the other variable like var sum =0 use reduce and where not needed use filter
let newFilterEvenScores =scores.filter(score=>score%2==0)
console.log(newFilterEvenScores) 
-------------------------------------------------------------------------------------------------------------------------------------------------
                                                            //map
let mappedArray=newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
let totalVal=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)
var scores1 = [12,13,14,16]

let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)

-------------------------------------------------------------------------------------------------------------------------------------------------
                                          //  sorting
let fruits =["banana","mango","pomegrante","apple"]

console.log(fruits.sort())
console.log(fruits.reverse())


var scores1 = [12,003,19,16,14] //9
// console.log(scores1.sort())
// scores1.sort(function(a,b){
//     return a-b
// })

console.log(scores1.sort((a,b)=> b-a))





























