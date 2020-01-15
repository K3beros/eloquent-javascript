const arr = [...Array(100).keys()]// Need to improve on a better way to get range
const newArr = [];
for(let i = 0; i <= arr.length; i++) {
    if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
        arr[i] = 'FizzBuzz';
        newArr.push(arr[i])
    } else if (arr[i] % 5 == 0) {
        arr[i] = 'Buzz'
        newArr.push(arr[i])
    }  else if (arr[i] % 3 == 0) {
        arr[i] = 'Fizz'
        newArr.push(arr[i])
    } else {
        newArr.push(arr[i])
    }
}
console.log(newArr)


