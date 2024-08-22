function calculateAverage(numbers) {
    let sumOfNumbers = numbers.reduce((acc, val) => acc + val,0)
    return sumOfNumbers / numbers.length
}