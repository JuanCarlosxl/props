import React from 'react';
import { Saludo } from './components/Saludo';
import { Comentario } from './components/Comentario';


function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde 0 </h1>
      <Saludo persona='Jc' edad={'30'}/>
      <Saludo persona='may' edad={'31'}/>
      <Saludo persona='rata' edad={'35'}/>
      <hr/>
      <h3>Cajita de comentarios</h3>
      <Comentario
      urlImagen='https://picsum.photos/64'
      persona='Ignacio'
      texto='Lorem lorem lorem'
      />
      <Comentario
      urlImagen='https://picsum.photos/64'
      persona='Ignacios'
      texto='Lorem lorem lorem 2'
      />
      <Comentario
      urlImagen='https://picsum.photos/64'
      persona='Ignacioss'
      texto='Lorem lorem lorem 2'
      />


    </div>
  );
}

export default App;
