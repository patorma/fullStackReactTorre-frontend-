import React,{useState} from 'react'

const NuevoProyecto = () => {

    // State del proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer nombre del proyecto
    const {nombre} = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e =>{
        // prevenir la que realize la accion por defecto
        e.preventDefault();

        // validar el proyectgo

        // agregar al state

        //Reiniciar el formulario
    }
    return ( 
        <>
        <button 
            type="button"
            className="btn btn-block btn-primario"
        >Nuevo Proyecto</button>
        <form
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProyecto}
        >
         <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input 
            type="submit"
            className="btn btn-block btn-primario"
            value="Agregar Proyecto"
          />
        </form>
        </>
     );
}
 
export default NuevoProyecto;