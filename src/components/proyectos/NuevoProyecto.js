import React,{useState,useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
const NuevoProyecto = () => {

    // Obtener el state del formulario
    // nuevo hook
    // se evita con esto mandar props 
    const proyectosContext = useContext(proyectoContext)

    const {formulario, mostrarFormulario} = proyectosContext;

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

    // Mostrar el formulario
    const onClickFormulario = ()=>{
        mostrarFormulario()
    }
    return ( 
        <>
        <button 
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickFormulario}
        >Nuevo Proyecto</button>
        { formulario ? 
                (
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
                ) : null
        }
        </>
     );
}
 
export default NuevoProyecto;