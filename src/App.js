import React, {useEffect, useState} from 'react';
import './style.css'

//https://sujeitoprogramador.com/rn-api/?api=posts


function App() {

  const [nutri, setNutri] = useState([]);

  //carrega tudo oque tem dentro da função quando o usuário abre o app
  useEffect(()=> {

    function LoadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((resultado)=> resultado.json())
      .then((json)=>{
        console.log(json);
        setNutri(json)
      })

    }

    LoadApi();

  }, []);

  return (
    <div className='container'>
      <header>
        <strong>
          React Nutri
        </strong>
      </header>

      {/* map percore todos os itens no array */}
      {nutri.map((item)=>{
        return(
          <article key={item.id} className='post'>

            <h2> Categoria: {item.categoria} </h2>

            <strong className='titulo'>{item.titulo}</strong>

            <img src={item.capa} alt='item.titulo' className='capa'/>
            
            

            <p className='subtitulo'>{item.subtitulo}</p>

            <a className='botao'>Acessar</a>
          </article>
        )
      })}
      
    </div>
  );
}

export default App;
