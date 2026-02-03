//Utilizar uma lista de herois e uma função que retorna o nivel de cada herói
console.log("***Lista de Heróis e seus Níveis:***");

//Espaço para melhor visualização no console
console.log(" ");

//Lista de heróis com seus respectivos pontos de experiência (XP).
const herois = [
    { nome: "Homem de Ferro", xp: 900 },
    { nome: "homem-aranha", xp: 1500 },
    { nome: "Batman", xp: 3000 },
    { nome: "Mulher-Maravilha", xp: 6000 },
    { nome: "He-man", xp: 7500 },
    { nome: "She-ha", xp: 8500 },
    { nome: "Thor", xp: 9500 },
    { nome: "DIO", xp: 10001 }
];

//função para determinar o nivel do herói com base na XP.
function determinarCategoria(xp) {
    switch (true) {
        case (xp < 1000):
            return "Ferro";
        case (xp >= 1001 && xp <= 2000):
            return "Bronze";
        case (xp >= 2001 && xp <= 5000):
            return "Prata";
        case (xp >= 5001 && xp <= 7000):
            return "Ouro";
        case (xp >= 7001 && xp <= 8000):
            return "Platina";
        case (xp >= 8001 && xp <= 9000):
            return "Ascendente";
        case (xp >= 9001 && xp <= 10000):
            return "Imortal";
        default:
            return "Radiante";
    }
}

//Iterar sobre a lista de heróis e exibir o nível de cada um.
herois.forEach(hero => {
    const nivel = determinarCategoria(hero.xp);
    console.log(`O Herói de nome ${hero.nome} está no nível de ${nivel}`);
});

//Espaço para melhor visualização no console
console.log(" ");

// Exemplo de uso para um herói específico
console.log("***Exemplo de uso para um herói específico:***");

const hero = { nome: "DIO", xp: 10001 };
const nivel = determinarCategoria(hero.xp);
console.log(`O Herói de nome ${hero.nome} está no nível de ${nivel}`);