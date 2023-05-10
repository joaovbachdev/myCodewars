function createPhoneNumber(numbers){
    pos = [0,4,5,9]
    carac = ['(',")"," ","-"]
    for(let i=0;i<pos.length;i++){
      numbers.splice(pos[i],0,carac[i])
    }
    return numbers.join("")
  }