function roundRobin(jobs, slice, index) {
    let totalCycles = 0;
    let currentIndex = 0;
  
    while (jobs[index] > 0) {
      const allocatedTime = Math.min(slice, jobs[currentIndex % jobs.length]);
  
      jobs[currentIndex % jobs.length] -= allocatedTime;
      totalCycles += allocatedTime;
      currentIndex++;
    }
  
    return totalCycles;
  }