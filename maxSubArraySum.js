var maxSequence = function(arr){
    conjuntos = []
    somas = []
    if(arr.length==0){
      return 0
    }else{
    for(let i=0;i<=arr.length;i++){
      for(let j=0;j<arr.length;j++){
        if(j+i>arr.length){
          break
        }else{
          sum = 0
          conj = []
          for(let k=j;k<j+i;k++){
            conj.push(arr[k])
            sum+=arr[k]
          }
          conjuntos.push(conj)
          somas.push(sum)
        }
      }
    }
    return Math.max(...somas)
    }
    }