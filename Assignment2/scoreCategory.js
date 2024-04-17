function scoreCategory(score) {
    if(score >= 90){
        return "Excellent";
    }else if(score >= 80 && score <= 89){
        return "Very Good"
    } else if(score >= 70 && score <= 79){
        return "Pass"
    }else {
        return "Fail"
    }
}

console.log(scoreCategory(89));