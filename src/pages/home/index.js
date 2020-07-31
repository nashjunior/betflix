import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias'
import PageDefault from '../../components/PageDefafult';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([])
  useEffect(() => {
    categoriasRepository.getALlWithVideos().then(result => setDadosIniciais(result)).catch(error => console.error(error));

  },[])

  return (
    <PageDefault>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      <Menu />

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      <Footer />
    </PageDefault>
  );
}

export default Home;
