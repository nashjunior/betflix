import {URL_BACKEND} from './../config/index';

const urlCategorias = `${URL_BACKEND}/categorias`

function getALlWithVideos (){
  return fetch(`${urlCategorias}?_embed=videos`)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          return resposta;
        }
        throw new Error('Não foi possível pegar os dados');
      });
}

function getAll(){
  return fetch(urlCategorias)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          return resposta;
        }
        throw new Error('Não foi possível pegar os dados');
      });
}

export default {
  getALlWithVideos, getAll
}
