class Obj {
    constructor(x, y, w, h, a) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;
    }

    des_ret() {
        des.fillStyle = this.a;
        des.fillRect(this.x, this.y, this.w, this.h);
    }
}

class Carro extends Obj {
    dir = 0;

    mov_car() {
        this.x += this.dir;
        if (this.x > 448) {
            this.x = 448;
        } else if (this.x <= 2) {
            this.x = 2;
        }
    }
}

class Carro2 extends Obj {
    constructor(x, y, w, h, a, velocidade) {
        super(x, y, w, h, a);
        this.velocidade = velocidade || 3 + Math.random() * 4; // Velocidade entre 3 e 7
    }

    pos_x() {
        // Posições fixas para não colidirem horizontalmente
        const posicoesFixas = [60, 130, 200, 270, 340, 410];
        return posicoesFixas[Math.floor(Math.random() * posicoesFixas.length)];
    }

    mov_car() {
        this.y += this.velocidade;
        
        if (this.y > 752) {
            this.y = -100 - Math.random() * 200; // Reinicia em alturas diferentes
            this.x = this.pos_x(); // Pega uma posição X fixa aleatória
            this.velocidade = 3 + Math.random() * 5; // Nova velocidade aleatória
        }
    }
}