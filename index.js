import readlineSync from "readline-sync";

class Estudiante {
  static contadorId = 1;

  constructor(nombre, edad, nivel) {
    this.id = Estudiante.contadorId++;
    this.nombre = nombre;
    this.edad = edad;
    this.nivel = nivel;
  }
}

class GestorEstudiantes {
  constructor() {
    this.estudiantes = {};
  }

  agregarEstudiante(nombre, edad, nivel) {
    const estudiante = new Estudiante(nombre, edad, nivel);
    this.estudiantes[estudiante.id] = estudiante;
    console.log("Estudiante agregado:", estudiante);
  }

  listarEstudiantes() {
    console.log("Lista de estudiantes:");
    for (let key in this.estudiantes) {
      console.log(this.estudiantes[key]);
    }
  }

  actualizarEstudiante(id, nombre, edad, nivel) {
    if (this.estudiantes[id]) {
      this.estudiantes[id].nombre = nombre;
      this.estudiantes[id].edad = edad;
      this.estudiantes[id].nivel = nivel;
      console.log("Estudiante actualizado:", this.estudiantes[id]);
    } else {
      console.log("Estudiante no encontrado.");
    }
  }

  eliminarEstudiante(id) {
    if (this.estudiantes[id]) {
      delete this.estudiantes[id];
      console.log("Estudiante eliminado.");
    } else {
      console.log("Estudiante no encontrado.");
    }
  }
}

const gestor = new GestorEstudiantes();

function mostrarMenu() {
  console.log("\n--- Menú ---");
  console.log("1. Agregar estudiante");
  console.log("2. Listar estudiantes");
  console.log("3. Actualizar estudiante");
  console.log("4. Eliminar estudiante");
  console.log("5. Salir");
}

while (true) {
  mostrarMenu();
  const opcion = readlineSync.question("Seleccione una opcion: ");

  if (opcion === "1") {
    const nombre = readlineSync.question("Nombre: ");
    const edad = parseInt(readlineSync.question("Edad: "));
    const nivel = readlineSync.question("Nivel: ");
    gestor.agregarEstudiante(nombre, edad, nivel);
  } else if (opcion === "2") {
    gestor.listarEstudiantes();
  } else if (opcion === "3") {
    const id = parseInt(readlineSync.question("ID del estudiante a actualizar: "));
    const nombre = readlineSync.question("Nuevo nombre: ");
    const edad = parseInt(readlineSync.question("Nueva edad: "));
    const nivel = readlineSync.question("Nuevo nivel: ");
    gestor.actualizarEstudiante(id, nombre, edad, nivel);
  } else if (opcion === "4") {
    const id = parseInt(readlineSync.question("ID del estudiante a eliminar: "));
    gestor.eliminarEstudiante(id);
  } else if (opcion === "5") {
    console.log("Saliendo del sistema...");
    break;
  } else {
    console.log("Opción inválida. Intente nuevamente.");
  }
}
