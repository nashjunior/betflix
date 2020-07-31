import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefafult/index';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/index';
import useForm from './../../../hooks/useFom';
import categoriasRepository from '../../../repositories/categorias'

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategoria] = useState([]);

  const {
    values, handleEvent, clearForm
  } = useForm(valoresIniciais)

  useEffect(() => {
    categoriasRepository.getAll().then(resposta => setCategoria(resposta))
  }, []);

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
        clearForm()
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
        categorias.length === 0 && <div>Loading...</div>
      }

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
