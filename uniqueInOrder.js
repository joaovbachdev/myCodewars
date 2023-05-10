var uniqueInOrder=function(iterable){
    var last = null
    var toArray = []
    if(typeof iterable == "string"){
      toArray = iterable.split('')
    }else{
      toArray = iterable
    }
  t = toArray.map((a) => {
    
    if(a != last){
      last = a
      return a
    }else{
      return '0'
    }
    
    
  }).filter(a=>a!='0')
  return t
  }