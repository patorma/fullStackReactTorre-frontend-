import React,{ useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO} from '../../types'; 

//equivale a la administracion del proyecto
// los hook empiezan con mayusculas
const ProyectoState = props => {
    const initialState = {
         proyectos : [
            {id: 1,nombre: 'Tienda Virtual'},
            {id: 2,nombre: 'Intranet'},
            {id:3,nombre: 'Diseño de Sitio Web'},
            {id:4, nombre: 'MERN'}
        ],
        // se asocia a la funcionalidad de nuevo proyecto
        formulario: false
    }

    // Dispatch para ejecutar las acciones 
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // serie de funciones para el CRUD de proyectos

    //se define una funcion para mostrar el formulario
    const mostrarFormulario= ()=>{
        dispatch({
           //evaluan el switch de proyectoReducer
           type: FORMULARIO_PROYECTO
        })
    }

    return (
        // desde aqui nacen los datos
        <proyectoContext.Provider
            value={{
                proyectos:state.proyectos,
                // primera clave state segunda funcion
                formulario: state.formulario,
                mostrarFormulario
            }}
        
        >
            {/*para que lo que le vayamos a pasar los diferentes componentes que sean hijos de provider sean como el consumer se pasen los datos a lo largo de los diferentes componentes */}
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;