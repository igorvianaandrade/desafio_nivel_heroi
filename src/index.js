// Declaração das variáveis
const heroi = [{ nome: 'Flash', xp: 10001 }, { nome: 'Lanterna Verde', xp: 8000 }];
const verdadeiro = true;
let nivel = '';

// Iteração sobre a lista de heróis
for (let i = 0; i < heroi.length; i++) {

    // Atribuição do herói atual
    heroiAtual = heroi[i];

    // Estrutura switch para determinar o nível do herói
    switch (verdadeiro) {
        case (heroiAtual.xp < 1000):
            nivel = 'Ferro';
            console.log(`O Herói de nome ${heroiAtual.nome} está no nível de ${nivel}`);
            break;
        case (heroiAtual.xp >= 1001 && heroiAtual.xp <= 2000):
            nivel = 'Bronze';
            console.log(`O Herói de nome ${heroiAtual.nome} está no nível de ${nivel}`);
            break;
        case (heroiAtual.xp >= 2001 && heroiAtual.xp <= 5000):
            nivel = 'Prata';
            console.log(`O Herói de nome ${heroiAtual.nome} está no nível de ${nivel}`);
            break;
        case (heroiAtual.xp >= 5001 && heroiAtual.xp <= 7000):
            nivel = 'Ouro';
            console.log(`O Herói de nome ${heroiAtual.nome} está no nível de ${nivel}`);
            break;
        case (heroiAtual.xp >= 7001 && heroiAtual.xp <= 8000):
            nivel = 'Platina';
            console.log(`O Herói de nome ${heroiAtual.nome} está no nível de ${nivel}`);
            break;
        case (heroiAtual.xp >= 8001 && heroiAtual.xp <= 9000):
            nivel = 'Ascendente';
            console.log(`O Herói de nome ${heroiAtual.nome} está no nível de ${nivel}`);
            break;
        case (heroiAtual.xp >= 9001 && heroiAtual.xp <= 10000):
            nivel = 'Imortal';
            console.log(`O Herói de nome ${heroiAtual.nome} está no nível de ${nivel}`);
            break;
        default:
            console.log(`O Herói de nome ${heroiAtual.nome} está no nível de Radiante`);
    }
}