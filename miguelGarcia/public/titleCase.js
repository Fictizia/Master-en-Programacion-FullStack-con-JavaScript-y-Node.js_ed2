function titleCase(title, minorWords) {

    function myFunction(value,index,arr){
    palabra = value.charAt(0).toUpperCase();
    
      if ((!minorWords || minorWords.indexOf(value) === -1) || index === 0) {
          for (i = 1 ; i < value.length ; i++){
            palabra = palabra + value.charAt(i).toLowerCase();
          }
      if (minorWords && minorWords.indexOf(value) > -1 ) { return value.toLowerCase();} 
  
      }
    return palabra;
    }
  arr  = title.split(" ");
  return arr.map(myFunction).join(" ");
  }
  