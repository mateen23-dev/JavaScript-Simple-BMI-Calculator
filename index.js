// creating a function to calculate a BMI of a person
function bmiCalculator (weight,height){
    var bmi=weight/(height*height);
    return Math.round(bmi);
}
var bmiResult=bmiCalculator(65,1.8);
