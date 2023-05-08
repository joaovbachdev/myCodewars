function isValidWalk(walk) {
  
    pos = [0,0]
    directionsLetters = ['n','s','w','e']
    directionsIncrement = [[0,1],[0,-1],[1,0],[-1,0]]
    
    if(walk.length != 10){
      return false
    }else{
          for(let i=0;i<walk.length;i++){
            pos[0] += directionsIncrement[directionsLetters.indexOf(walk[i])][0]
            pos[1] += directionsIncrement[directionsLetters.indexOf(walk[i])][1]
            
          }
          
      if(pos[0] === 0 && pos[1] === 0){
        return true
      }else{
        return false
      }
    }
    //insert brilliant code here
  }