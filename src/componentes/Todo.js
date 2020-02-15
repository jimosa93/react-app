import React, { useState } from 'react';

const datos = [
  {
    titulo: "Aprender react",
    descripcion: "Estudiar sobre react"
  },
  {
    titulo: "Hacer deporte",
    descripcion: "Ir al gimnasio"
  }
]

function Todo() {
  const [todos, setTodos] = useState(datos)

  const [tarea, setTarea] = useState({
    titulo: '',
    descripcion: ''
  })

  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value
    } )
  }

  const guardarTodo = e => { 
    setTodos([
      ...todos,
      tarea
    ]);
    e.preventDefault();
    e.target.reset(); 
  }

  const eliminarTarea = index => {
    const nuevosTodos = todos.filter( 
      (e, i) => {
      return i !== index
    })
    setTodos(nuevosTodos);
  }

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={guardarTodo}>
            <div className="form-group">
              <label>Titulo</label>
              <input 
              onChange={handleChange} className="form-control" type="text" name="titulo" /> 
            </div>
            <div className="form-group">
              <label>Descripcion</label>
              <input 
              onChange={handleChange}
              className="form-control" type="text" name="descripcion" /> 
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-md btn-primary bnt-block" value="Guardar tarea" />
            </div>
          </form>
        </div>
        <div className="todos col-md-8">
          {
            todos.map((dato, index) => (
              <div key={index} className="todo_item card mt-4">
                <div className="text-center"><h4>{dato.titulo}</h4></div>
              <div className="p-2">{dato.descripcion}</div>
              <div className="card-footer">
                <button className="btn btn-danger" 
                onClick={
                  () => eliminarTarea(index)}
                >Eliminar</button>
              </div>
            </div>
            ))
          }
          
        </div>
      </div>
      
    </div>
  )
}

export default Todo; 