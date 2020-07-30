import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefafult/index';
import FormField from '../../../components/FormField';
import Button from './../../../components/Button/index';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function handleValues(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleEvent(event) {
    const { name, value } = event.target;
    handleValues(
      name,
      value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:3030/categorias'; 
    fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategoria(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
  },[])

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(evento) {
        evento.preventDefault();
        setCategoria([
          ...categorias,
          values,
        ]);
        console.log(categorias);
        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleEvent}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleEvent}
        />

        <div>
          <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleEvent} />
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      {
        categorias.length===0 && <div>Loading...</div>
      }

       <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
