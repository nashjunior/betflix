import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefafult/index';
import FormField from './../../../components/FormField/index';
import Button from './../../../components/Button/index';
import useForm from './../../../hooks/useFom';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

const CadastroVideo = () => {
  const valoresIniciais = {
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  };

  const history = useHistory();

  const {
    values, handleEvent, clearForm
  } = useForm(valoresIniciais)
  const [categorias, setCategoria] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(()=> {
    categoriasRepository.getAll().then(response => setCategoria(response))
  },[])

  const categoriaId = categorias.find(categoria => categoria.titulo === values.categoria)

  return (
  <PageDefault>
    <h1>
      Pagina de cadastro de video
    </h1>

    <form onSubmit={function handleSubmit(evento) {
        evento.preventDefault();
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId,
        }).then(() =>{
          clearForm()
         history.push('/')
        })

      }}
      >
       <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleEvent}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleEvent}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleEvent}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
  </PageDefault>)
}

export default CadastroVideo;
