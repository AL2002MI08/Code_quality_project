function* generateFibonacciSequence() {
    let [current, next] = [1n, 1n];
  
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }  