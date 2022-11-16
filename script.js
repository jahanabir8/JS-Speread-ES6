const number = [1, 2, 3, 4]
function calculate(a, b, c, d){
    console.log('Sum: ' + (a+b+c+d))
}

calculate(number)
calculate(1, 2, 3, 4)
calculate(...number) //This is ES6 apply
calculate.apply(null, number)


var arrName5 = ['Rahim', 'Karim', 'Rafiq', 'Jabbar']
console.log(arrName5)
arrName5.push('Salam')
arrName5.unshift('Shafiq')
console.log(arrName5)


// uses of unshift and push in ES6
const arrName6 = ['Abir', arrName5 ,'Language']
console.log(arrName6)


// concat two array in ES-5
var arrOne5 = [0, 1, 2, 3, 4]
var arrTwo5 = [5, 6, 7, 8, 9]

arrOne5 = arrOne5.concat(arrTwo5)
console.log(arrOne5)

// concat two array in ES-6
var arrOne6 = [0, 1, 2, 3, 4]
var arrTwo6 = [5, 6, 7, 8, 9]

arrOne6= [...arrOne6, ...arrTwo6]
console.log(arrOne6)