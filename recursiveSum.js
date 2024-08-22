// Implement a JavaScript function to find the sum of all elements in an array recursively.
function sum(numbers){
    if(numbers.length === 0) {
        return 0
    }
    return numbers[0] + sum(numbers.slice(1))
}