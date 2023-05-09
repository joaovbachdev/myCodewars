function highAndLow(numbers){
    num = [Math.max(...numbers.split(" ").map(a => {return Math.floor(a)})),Math.min(...numbers.split(" ").map(a => {return Math.floor(a)}))]
    return num.join(' ')
  }

  ///input = "1 2 3 4 5"