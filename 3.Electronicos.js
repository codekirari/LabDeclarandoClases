// Modela un sistema de productos electrónicos con:
// 1.Clase Producto con nombre, precio, marca y método descripcion().

class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }


     descripcion() {
        return `El producto ${this.nombre} de la marca ${this.marca} tiene un precio de ${this.precio} USD.`;
    }
}

// 2.Clase Telefono que herede de Producto y añada almacenamiento, ram.
class Telefono extends Producto {
    constructor(nombre, precio, marca, almacenamiento, ram) {
        super(nombre,precio,marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
}

// 3.Clase Laptop que herede de Producto y añada procesador, pulgadas.
// Crea instancias y muestra sus descripciones.

class Laptop extends Producto {
    constructor(nombre, precio, marca, procesador, pulgadas) {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }

    descripcion() {
        return `${super.descripcion()} Tiene un procesador ${this.procesador} y pantalla de ${this.pulgadas} pulgadas.`;
    }
}


const miTelefono = new Telefono("iPhone 15", 1200, "Apple", 128, 6);
const miLaptop = new Laptop("MacBook Air", 1500, "Apple", "M2", 13.3);

console.log(miTelefono.descripcion());
console.log(miLaptop.descripcion());
