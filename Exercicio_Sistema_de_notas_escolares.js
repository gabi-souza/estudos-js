/* crie um algoritimo que transforme as notas do sistema numerico para sistema de notas em caracteres tipo ABC.*/

function getGrade (grade) {
    let grade_A = grade >= 90 && grade <= 100
    let grade_B = grade >= 80 && grade <= 89
    let grade_C = grade >= 70 && grade <= 79
    let grade_D = grade >= 60 && grade <= 69
    let grade_F = grade < 60 && grade >= 0

    let finalGrade;

    if(grade_A) {
        finalGrade = "A"
    } else if (grade_B) {
        finalGrade = "B"
    } else if (grade_C) {
        finalGrade = "C"
    } else if (grade_D) {
        finalGrade = "D" 
    } else if (grade_F) {
        finalGrade = "F"
    } else {
        finalGrade = "Nota Inválida"
    }

    return finalGrade
}
console.log(getGrade(101))
