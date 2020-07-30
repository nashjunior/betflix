import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefafult/index';

const CadastroVideo = () => (
  <PageDefault>
    <h1>
      Pagina de cadastro de video
    </h1>

    <Link to="/cadastro/categoria">Cadastrar categoria</Link>
  </PageDefault>
);

export default CadastroVideo;
