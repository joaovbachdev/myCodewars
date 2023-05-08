function isPangram(string){
  newString = string.toLowerCase().replace(/[^a-zA-Z]/gm,"")
  letters = []

  for(let i=0;i<newString.length;i++){
    exists = false
    for(let j=0;j<letters.length;j++){
      if(newString[i] == letters[j]){
        exists = true
      }
    }
    if(exists == false){
      letters.push(newString[i])
    }
  }
  return (letters.length == 26)
}