const alunos = [
    {id:1, aluno:"Isaque Cascaes", BIM1:8, BIM1:8, BIM1:8, BIM1:8, MEDIA:8},
    {id:1, aluno:"Gutemberg Dantas", BIM1:5, BIM1:5, BIM1:8, BIM1:5, MEDIA:5},
    {id:1, aluno:"Beatriz Ferreira", BIM1:7, BIM1:8, BIM1:9, BIM1:10, MEDIA:9}
];

for (i = 0; alunos[i]; i++) {
    if (alunos[i].MEDIA >=7) {
        console.log("Parabéns" + ' ' + alunos[i].aluno + ', ' + "Você passou de ano!");
    }
    else {
        console.log("O Aluno"+ " " + alunos[i].aluno + ' ' + "foi reprovado, por favor, se dirigir a secretaria!");
    }
}
