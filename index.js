
let button= document.getElementById('buttonel')
let marks=  document.getElementsByName('marks');

button.addEventListener("click", function calcy (){

  let gpa=0
  let i=0
  let totalgrades=0
  let total=0
  for(i=0;i<=8;i++){
      total+=parseFloat(marks[i].value)   
  }
  console.log(total)
for(i=0;i<=4;i++){

  if(parseFloat(marks[i].value)>=90){
    totalgrades+=10
  }
   
   else if(parseFloat(marks[i].value)>=80){
    totalgrades+=9 }
    else if(parseFloat(marks[i].value)>=70){
    totalgrades+=8  }
    else if(parseFloat(marks[i].value)>=60){
    totalgrades+=7 }
    else if(parseFloat(marks[i].value)>=50)
    {
    totalgrades+=6 }
     else {
    totalgrades+=5}
}
totalgrades*=3

 console.log(totalgrades)
 for(i=5;i<=7;i++){

  if(parseFloat(marks[i].value)>=90){
    totalgrades+=10
  }
   
   else if(parseFloat(marks[i].value)>=80){
    totalgrades+=9 }
    else if(parseFloat(marks[i].value)>=70){
    totalgrades+=8  }
    else if(parseFloat(marks[i].value)>=60){
    totalgrades+=7 }
    else if(parseFloat(marks[i].value)>=50)
    {
    totalgrades+=6 }
     else {
    totalgrades+=5}
}


 console.log(totalgrades)
 

  if(parseFloat(marks[8].value)>=90){
    totalgrades+=10*2
  }
   
   else if(parseFloat(marks[8].value)>=80){
    totalgrades+=9*2 }
    else if(parseFloat(marks[8].value)>=70){
    totalgrades+=8*2  }
    else if(parseFloat(marks[8].value)>=60){
    totalgrades+=7*2
    }
    else if(parseFloat(marks[8].value)>=50)
    {
    totalgrades+=6*2 }
     else {
    totalgrades+=5*2}



 console.log(totalgrades)
  gpa= totalgrades/20
 let perc=(total/900)*100
 perc=perc.toFixed(2)
  console.log(gpa)
  console.log(perc)
  if(gpa >= 8){
    document.getElementById('showData').innerHTML = ` Out of 10 your total gpa is  ${gpa} and percentage is ${perc}%.<br>. You are a superhero . `
  }
  else if(gpa >= 6){
    document.getElementById('showData').innerHTML = ` Out of 10 your total gpa is  ${gpa} and percentage is ${perc}%. <br>. You are going to get a veru good placement. `
  }
 else {
    document.getElementById('showData').innerHTML = ` Out of 10 your total is  ${gpa} and percentage is ${perc}%. <br>. Tumse na hopaega. `
  }

})
