// 4: Sistema de figuras geométricas
// Crea un sistema de clases para figuras geométricas:
// 1.Clase Figura con propiedad color y método area() que devuelve 0.

class Figura {
    constructor(color) {
                this.color = color;
    }

    area(){
        return 0;
    }
}

// 2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().

class Rectangulo extends Figura {
    constructor(color, base, altura){
        super(color);   
        this.base = base;
        this.altura = altura;
    }

    area(){
        return this.base * this.altura;
    }
}
// 3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().

class Circulo extends Figura {
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }

    area(){
        return Math.PI * this.radio * this.radio;
    }
}

// Crea instancias y muestra sus áreas

const r1 = new Rectangulo("Amarillo", 20, 10);
const c1 = new Circulo("Rosa", 5);

console.log(`Rectángulo color ${r1.color} tiene área ${r1.area()}`);
console.log(`Círculo color ${c1.color} tiene área ${c1.area()}`);
