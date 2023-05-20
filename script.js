//1. Print odds 1-20
for (var i=0; i<=20; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

//2. Decreasing Multiples of 3

for (var i=100; i>=0; i--) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

//3. Print the sequence

let arr = [4,2.5,1,-0.5,-2,-3.5]
for (var i=0; i<arr.length; i++) {
    console.log(arr[i])
}

//4. Sigma
let sum = 0
for (var i=1; i <= 100; i++) {
    sum += i
}
console.log(sum)

//5. Factorial
let product = 1
for (var i=1; i<=12; i++) {
    product *= i
}
console.log(sum)