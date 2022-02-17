

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
  // response es los elementos añadidos
  console.log("agregando estudiantes")

  // busquedas 
  // return StudentModel.find( { likesPokemon: true } ) // .todos los estudiantes ??
  return StudentModel.find( { pizzaToppings: { $in: "Piña" } }, "name age", { limit: 1, sort:"name" } )
  // los argumentos en orden: query, que propiedades quiero, todas las demas opciones.
  // StudentModel.findOne => retorna un OBJ

})

.then((response) => {

  console.log(response)

  // actualizar
  return StudentModel.findOneAndUpdate( { name: "Blasco" }, { age: 23 }, { new: true } )
  // primer argumento es el query y el segundo es que se quiere actualizar
})
.then((response) => {
  // dolor de cabeza asi que anotar esto
  // { new: true } hace que nos de la informacion actualizada
  console.log("Blasco actualizado", response)
  return StudentModel.findOneAndDelete( { name: "Eduard" } )
})
.then((response) => {
  console.log("elemento borrado", response)
})

// borrar






.catch((err) => {
  console.log(err)
})