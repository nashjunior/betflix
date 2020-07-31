import {URL_BACKEND} from './../config/index';

const urlVideos = `${URL_BACKEND}/videos`

function getALlWithVideos (){
  return fetch(`${urlVideos}?_embed=categorias`)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          return resposta;
        }
        throw new Error('Não foi possível pegar os dados');
      });
}

function getAll(){
  return fetch(urlVideos)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          return resposta;
        }
        throw new Error('Não foi possível pegar os dados');
      });
}

function create(obj){
  return fetch(urlVideos, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(async (resposta) => {
    if (resposta.ok) {
      const values = await resposta.json()
      return values;
    }
  })
}

export default {
  getALlWithVideos, getAll, create
}
