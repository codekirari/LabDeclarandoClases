// Ejercicio 1: Sistema básico de vehículos
// Crea un sistema de clases para representar diferentes tipos de vehículos. Debes crear:
// 1.Una clase Vehiculo con propiedades: marca, modelo, año y un 

class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

// método obtenerDetalles() que devuelva un string con toda la información.
    obtenerDetalles(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.modelo}`;
    }
}

// 2.Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas.

class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año); // Llamamos al constructor del padre para inicializar marca/modelo/año
    this.numeroPuertas = numeroPuertas;
  }


obtenerDetalles() {
    return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
  }
}

// 3.Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada.

class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada}cc`;
  }
}


// Crea instancias de ambas clases hijas y muestra sus detalle

const miCoche = new Coche("Toyota", "Corolla", 2023, 4);
const miMoto = new Moto("Yamaha", "R1", 2022, 600);

console.log(miCoche.obtenerDetalles());
console.log(miMoto.obtenerDetalles());