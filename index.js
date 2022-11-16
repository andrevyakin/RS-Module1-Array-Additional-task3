const matrix3x5 = [];
for (let i = 0; i < 3; i++) {
    //Добавляю столбцы
    matrix3x5.push([]);
    for (let j = 1; j <= 5; j++)
        //Добавляю строки
        matrix3x5[i].push(j);
}
console.log(matrix3x5.join('\n') + '\n\n');
console.log(matrix3x5);