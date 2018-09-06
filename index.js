// 1. Ejercicio de alumno
// - datos generales
// - calificaciones de diferentes materias
// - cada materia tiene dos calificaciones
// - la final de cada materia es la maxima
// - existe la manera de obtener el promedio del alumno
// grades = {
//     math: [50, 70, 85],
//     web: [32, 54, 60, 75]
// }

class Student {
  constructor(name = '', email = '', grades = {}) {
    this.name = name;
    this.email = email;
    this.grades = grades;
  }

  /**
   * Get the max grade for a module
   * @param  {String} module The name of the module
   * @return {number}        The max grade
   */
  getModuleGrade(module) {
    try {
      return Math.max(...this.grades[module]);
    } catch (e) {
      console.log('Ups, algo salió mal, no eres tu, soy yo.');
      return 0;
    }
  }

  /**
   * Get the average grade for the student
   * @return {number} The final grade
   */
  getFinalGrade() {
    let acc = 0;
    let cont = 0;

    for(const module in this.grades) {
      acc += this.getModuleGrade(module);
      cont += 1;
    }

    return acc / cont;
  }

  /**
   * Add a grade for a module.
   * In case the module is not present, create it.
   * @param {String} module The module name
   * @param {number} grade  The grade
   */
  addModuleGrade(module, grade) {
    try {
      this.grades[module].push(grade);
    } catch (e) {
      this.addNewModule(module, [grade]);
    }
  }

  /**
   * [addNewModule description]
   * @param {[type]} module      [description]
   * @param {Array}  [grades=[]] [description]
   */
  addNewModule(module, grades = []) {
    return 0;
  }

}

const michelle = new Student();
michelle.grades = {
  math: [50, 70, 85],
  web: [32, 54, 60, 75],
};

michelle.addModuleGrade('math', 85)
console.log(michelle.getModuleGrade('algo'));
