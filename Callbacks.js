function main(param1,param2,callBack){ 
    console.log(param1, param2) 
    callBack()  // function main mengeksekusi parameter callBack yang mengandung value dari function myCallback 
  }
  
  function myCallback(){ 
    console.log ('hello callback')
  }
  
  // function myCallback di passing kedalam function main sebagai argument saat proses invocation
  main(1,2,myCallback)
  
  /* ===================
  Output :
   1 2
   hello callback
  */
 