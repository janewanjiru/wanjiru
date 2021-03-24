function getGrade(marks) {
     if(marks>=80){
         return"A";
     }
     else if(marks>=70){
         return"B"
     }
     else if(marks>=60){
         return"c"
     }
     else if(marks>=50){
         return"D"
     }
     else if(marks>=40){
     return"E"
     }
else{
    return "f"
}
}
console.log(getGrade())