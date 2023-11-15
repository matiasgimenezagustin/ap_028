import React from 'react'

const ListaDeArchivos = ({titulo, archivos}) => {
    console.log(archivos)
  return (
    <div>
        <h1>{titulo}</h1>
        <div>
            {
                archivos.map(
                    ({nombre, extension, creadoEn, peso, id}) => (
                        <div key={id}>
                            <h2>{nombre + '.' + extension}</h2>
                            <span>Peso: {peso}s</span>
                            <span>Creado en: {creadoEn}</span>
                            <button>Eliminar</button>
                            <hr/>
                        </div>
                    )
                )
            }
        </div>
    </div>
  )
}


export default ListaDeArchivos


/* 

            <div>
                <h2>Nombre.extension</h2>
                <span>Peso: 4kbs</span>
                <span>Creado en: 2023/06/09</span>
                <hr/>
            </div>
*/