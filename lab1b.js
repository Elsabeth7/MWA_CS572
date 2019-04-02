
function isWeekend(){
    const todayDate = new Date();
    todayDate.setDate(7);
    const day = todayDate.getDay(); //0-6(0 is Sunday)
   
      return weeks [day] || weeks ['default'];       

 }

weeks= {
    0: 'weekend', 
    6: 'weekend', 
    default: 'weekday' 
}
 
console.log(isWeekend());

