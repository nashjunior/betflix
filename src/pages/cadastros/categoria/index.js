import React, {useState} from 'react';
import PageDefault from './../../../components/PageDefafult/index';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }

  const [categorias, setCategoria] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  function handleValues(key, value) {
    setValues({...values, [key]:value})
  }

  function  handleEvent(event){
    const {name, value} = event.target;
    handleValues(
      name,
      value
    );
  }

  return (
    <PageDefault>
       <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(evento) {
        console.log(values)
        evento.preventDefault()
        setCategoria([
          ...categorias,
          values
        ]);
        console.log(categorias)
        setValues(valoresIniciais)
      }}>
        <FormField label="Nome da categoria" type="text" name="nome" values={values.nome} onChange={handleEvent}/>

        

        <div>
        <label>
            Descricao:
            <input
              type="text" 
               value={values.descricao}
               name="descricao"
               onChange={handleEvent}
            />
          </label>
        </div>

        <div>
         <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleEvent}/>
        </div>


      <button>
        Cadastrar
      </button>
    </form>

   {/*  <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul> */}
<Link to="/">
  Ir para home
</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;