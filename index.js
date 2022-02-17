

const mongoose = require("mongoose");

const StudentModel = require("./models/student.model")

const arrayOfStudents = require("./students.json")
// los archivos .json automaticamente son exportados

// mongoose.connect("direccion-dase-de-datos/nombre-dase-de-datos")
mongoose.connect("mongodb://localhost:27017/students-db")
.then((response) => {
  console.log("conection a la base de datos correcta, YAY!")

  // return StudentModel.create({
  //   name: "bob",
  // })
  return mongoose.connection.dropDatabase() // borrar la base de datos. USAMOS PARA PROBAR METODOS.
})
.then((response) => {
  // console.log("bob ha sido agregado")
  console.log("Base de datos limpia!")

  // añadir muchos
  return StudentModel.insertMany(arrayOfStudents)
})
.then((response) => {
  console.log("agregando estudiantes")

  // busquedas 

})

// actualizar
// borrar






.catch((err) => {
  console.log(err)
})