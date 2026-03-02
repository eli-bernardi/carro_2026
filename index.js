let des = document.getElementById('des').getContext('2d');

// Carro principal (jogador)
const carro = new Carro(400, 500, 40, 60, '#ff6b6b');

// Definindo posições X fixas para não colidirem
// 6 colunas possíveis: 60, 130, 200, 270, 340, 410

// Carros com posições X fixas e Y variados
const carro2 = new Carro2(60, -50, 45, 55, '#ffa502', 4.2);      // Laranja - coluna 1
const carro3 = new Carro2(130, -120, 42, 58, '#3742fa', 5.1);    // Azul - coluna 2
const carro4 = new Carro2(200, -200, 48, 52, '#ffcc00', 3.8);    // Amarelo - coluna 3
const carro5 = new Carro2(270, -80, 44, 56, '#747d8c', 6.0);     // Cinza - coluna 4
const carro6 = new Carro2(340, -150, 46, 54, '#9b59b6', 4.5);    // Roxo - coluna 5
const carro7 = new Carro2(410, -250, 43, 57, '#ff9ff3', 5.5);    // Rosa - coluna 6

// Segunda fileira (mais carros nas mesmas colunas, mas com Y diferentes)
const carro8 = new Carro2(60, -350, 47, 53, '#1dd1a1', 4.8);     // Verde - coluna 1
const carro9 = new Carro2(130, -420, 49, 51, '#ffffff', 5.2);    // Branco - coluna 2
const carro10 = new Carro2(200, -500, 45, 55, '#2f3542', 6.3);   // Preto - coluna 3
const carro11 = new Carro2(270, -580, 44, 56, '#e67e22', 4.0);   // Laranja escuro - coluna 4
const carro12 = new Carro2(340, -650, 46, 54, '#8e44ad', 5.7);   // Roxo escuro - coluna 5
const carro13 = new Carro2(410, -720, 43, 57, '#16a085', 4.3);   // Verde petróleo - coluna 6

document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'ArrowRight') {
        carro.dir += 5;
    } else if (e.key === 'a'|| e.key === 'ArrowLeft') {
        carro.dir -= 5;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'd' || e.key === 'ArrowRight' || e.key === 'a' || e.key === 'ArrowLeft') {
        carro.dir = 0;
    }
});

function desenha() {
    carro.des_ret();
    carro2.des_ret();
    carro3.des_ret();
    carro4.des_ret();
    carro5.des_ret();
    carro6.des_ret();
    carro7.des_ret();
    carro8.des_ret();
    carro9.des_ret();
    carro10.des_ret();
    carro11.des_ret();
    carro12.des_ret();
    carro13.des_ret();
}

function atualiza() {
    carro.mov_car();
    carro2.mov_car();
    carro3.mov_car();
    carro4.mov_car();
    carro5.mov_car();
    carro6.mov_car();
    carro7.mov_car();
    carro8.mov_car();
    carro9.mov_car();
    carro10.mov_car();
    carro11.mov_car();
    carro12.mov_car();
    carro13.mov_car();
}

function main() {
    des.clearRect(0, 0, 500, 700);
    desenha();
    atualiza();
    requestAnimationFrame(main);
}

main();