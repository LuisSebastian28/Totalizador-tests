function mostrarDescu(a) {
    var resp = 0;        
    if(a>=1000 && a<3000)
        resp = 3.00;    
    else if(a>=3000 && a<7000)
        resp = 5.00;            
    else if(a>=7000 && a<10000)
        resp = 7.00;     
    else if(a>=10000 && a<30000)
        resp = 10.00;            
    else if(a>=30000)
        resp = 15.00;
    return resp;
  }
  
  export default mostrarDescu;
  