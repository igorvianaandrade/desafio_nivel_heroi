// Declaração da matriz e variáveis
const heroi = [
    ['Dio', 10001], //linha 0
    ['Lanterna Verde', 8000], //linha 1
    ['Flash', 7000], //linha 2
    ['Homem-aranha', 9000], //linha 3
    ['Homem de ferro', 900], //linha 4
    ['Mulher maravilha', 5000], //linha 5 
    ['Capitão america', 2000], //linha 6
    ['Summer-man', 10000] //linha 7
];

const verdadeiro = true;
let nivel = '';

// Iteração sobre a lista de heróis
for (let i = 0; i < heroi.length; i++) {

    // Estrutura switch para determinar o nível do herói
    switch (verdadeiro) {
        case (heroi[i][1] < 1000):
            nivel = 'Ferro';
            console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel}`);
            break;
        case (heroi[i][1] >= 1001 && heroi[i][1] <= 2000):
            nivel = 'Bronze';
            console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel}`);
            break;
        case (heroi[i][1] >= 2001 && heroi[i][1] <= 5000):
            nivel = 'Prata';
            console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel}`);
            break;
        case (heroi[i][1] >= 5001 && heroi[i][1] <= 7000):
            nivel = 'Ouro';
            console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel}`);
            break;
        case (heroi[i][1] >= 7001 && heroi[i][1] <= 8000):
            nivel = 'Platina';
            console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel}`);
            break;
        case (heroi[i][1] >= 8001 && heroi[i][1] <= 9000):
            nivel = 'Ascendente';
            console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel}`);
            break;
        case (heroi[i][1] >= 9001 && heroi[i][1] <= 10000):
            nivel = 'Imortal';
            console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivel}`);
            break;
        default:
            console.log(`O Herói de nome ${heroi[i][0]} está no nível de Radiante`);
    }
}