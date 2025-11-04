// Ejercicio 2: Sistema de empleados

// Crea un sistema de clases para representar empleados de una empresa:
// 1.Clase Empleado con propiedades: nombre, edad, salarioBase y 
// método calcularSalario() que devuelve el salario base.

class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }

 calcularSalario() {
    return this.salarioBase;
  }


obtenerDetalles() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Salario Base: ${this.salarioBase}`;
  }
}

// 2.Clase Gerente que herede de Empleado y añada bonificacion. 


class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }
// Sobrescribe calcularSalario() para que sume la bonificación.
  calcularSalario() {
        return this.salarioBase + this.bonificacion;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Bonificación: ${this.bonificacion}`;
    }
}


// 3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.

class Desarrollador extends Empleado {
    constructor(nombre, edad, salarioBase, lenguaje) {
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Lenguaje: ${this.lenguaje}`;
    }
}

// Crea instancias de cada tipo y muestra sus salarios

const empl1 = new Empleado("Felix", 25, 2000000);
const gere1 = new Gerente("Zuko", 50, 400000, 1000000);
const dev1 = new Desarrollador("Luna", 30, 3000000, "JavaScript");

console.log(empl1.obtenerDetalles());
console.log("Salario:", empl1.calcularSalario());

console.log(gere1.obtenerDetalles());
console.log("Salario:", gere1.calcularSalario());

console.log(dev1.obtenerDetalles());
console.log("Salario:", dev1.calcularSalario());
