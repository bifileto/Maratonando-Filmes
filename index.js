function filterInvalidValues (value){
    return value >=1.01 && value <= 3.00;
  }
  
  function orderMovieDuration(a,b){
    return b-a;
  }
  
  function twoDecimals (duration){
    return Number(duration.toFixed(2));
  }
  
  let days = 0;
  const index = 0;
  
  function findMinimumDays (arr) {
    if (arr.length > 1000){
      arr.pop();
      console.log("não é possível inserir mais de mil duraçōes");
    }
  
    const floatArray = arr.map(Number);
    const twoDecimalsArray = floatArray.map(twoDecimals);
    const filteredArray = twoDecimalsArray.filter(filterInvalidValues);
    const orderedArray = filteredArray.sort(orderMovieDuration);
  
    while (orderedArray.length != index){
      if(orderedArray[index] + orderedArray[orderedArray.length - 1] <= 3.00){
         days += 1;
         orderedArray.splice(index, 1);
         orderedArray.pop();
      }
      else if (orderedArray[index] + orderedArray[orderedArray.length - 1] > 3.00){
        days += 1;
        orderedArray.splice(index, 1);
      }
    }
    return days;
  }
  
  console.log(findMinimumDays([2.3564, 6, "1.01", "1.02", "3", 1.02345, "1.067584", 0.5]));