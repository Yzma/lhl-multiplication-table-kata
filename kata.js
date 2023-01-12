
//https://web.compass.lighthouselabs.ca/workbooks/web-ft-prep/activities/647?workbook=68
// Multiplication Table

const multiplicationTable = function(maxValue) {
  let result = ""
  for (let i = 1; i <= maxValue; i++) {
    let temp = ""
    for (let j = 1; j <= maxValue; j++) {
      temp += (i * j) + " "
    }
    result += temp + '\n'
  }
  return result
}

console.log(multiplicationTable(1))
console.log(multiplicationTable(5))
console.log(multiplicationTable(10))