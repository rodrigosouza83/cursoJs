function minimizeTotalSum(numbers, maxOperations) {
    const reduceLargestNumber = (currentList) => {
      const largest = Math.max(...currentList);
      const index = currentList.indexOf(largest);
      currentList[index] = Math.ceil(largest / 2);
      return currentList;
    };
  
    let optimizedList = [...numbers];
  
    for (let i = 0; i < maxOperations; i++) {
      optimizedList = reduceLargestNumber(optimizedList);
    }
  
    return optimizedList.reduce((sum, n) => sum + n, 0);
  }