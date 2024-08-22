function calculateAverage(numbers) {
    let sumOfNumbers = numbers.reduce((acc, val) => acc + val,0)
    const average = sumOfNumbers / numbers.length
    return average
  }
  
