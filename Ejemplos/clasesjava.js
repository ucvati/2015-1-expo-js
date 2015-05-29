class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad   = edad;
  }

  presentarse() {
    return 'Hola me llamo ' + this.nombre + ' y tengo ' + this.edad + ' años';
  }
   get verNombre() {
    return this.nombre;
  }
  
  set nuevoNombre(nuevo) {
    this.nombre = nuevo;
  }
}
var Sergio = new Persona('Sergio', 22);
 Sergio.presentarse();


class Médico extends Persona {
  constructor(nombre, edad, cargo) {
    super(nombre, edad);
    this.cargo = cargo;
  }

  presentarse() {
    return super.presentarse() + ' y soy médico ' + this.cargo;
  }
}

var Daniela = new Desarrollador('Daniela', 26, 'Residente');
Daniela.presentarse(); 

  
}

Sergio.verNombre; // devuelve Sergio
Sergio.nuevoNombre('Daniel'); // cambia el valor de nombre a Daniel
Sergio.verNombre;

