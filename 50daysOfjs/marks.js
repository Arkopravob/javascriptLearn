function finalGrade(num1, num2, num3) {
    let total = (num1 + num2 + num3);
    let average = total / 3;
    if (average < 0 || average > 100) {
        return 'You have entered an invalid grade.';
    }
    else if (average >= 0 && average <= 59) {
        return 'F';
    }
    else if (average >= 60 && average <= 69) {
        return 'D';
    }
    else if (average >= 70 && average <= 79) {
        return 'C';
    }
    else if (average >= 80 && average <= 89) {
        return 'B';
    }
    else if (average >= 90 && average <= 100) {
        return 'A';
    }

}
console.log(finalGrade(100, 220, 500));