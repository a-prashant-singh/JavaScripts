class Moment extends Date {  
    constructor() {  
      super();  
    }}  
  var m=new Moment();  
  console.log("Current date:")  
  console.log(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear());  