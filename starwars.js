// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import {friendlyFetch} from '/friendly-fetch.js'
import {restartAnimation} from '/restart-animation.js'
import {play} from '/music-sem-private.js'

const API_ENDPOINT = 'https://swapi.dev/api'

const audioUrl = '/audio/tema-sw.mp3'
const coverImageUrl = '/imgs/logo.svg'
const title = 'Intro'
const artist = 'John Williams'

play({audioUrl,coverImageUrl,title,artist}, document.body)

let ulFilmes = document.querySelector('#filmes ul')
let introducao = document.querySelector(".introducao-animada")
let atual = 1

function numeroParaRomano(emoji) {
    const dados = {
       '1': 'I',
       '2': 'II',
       '3': 'III',
       '4': 'IV',
       '5': 'V',
       '6': 'VI'
    }
    return dados[emoji]
 }

function trocaIntro(element, numeralStr) {
    introducao.innerHTML = `EPISODE ${numeralStr} \n ${element.title.toUpperCase()} \n ${element.opening_crawl}`
    restartAnimation(introducao)
}

async function montaListaFilmes(){
    let swapiResult = await friendlyFetch(API_ENDPOINT)

    let listaFilmes = await friendlyFetch(swapiResult.films)

    listaFilmes.results.sort((first,second) => (first.episode_id > second.episode_id) ? 1 : -1)

    listaFilmes.results.forEach(element => {
        let li = document.createElement('li')
        let numeralStr = `${numeroParaRomano(atual)}`
        numeralStr = numeralStr.padEnd(3)
        li.innerHTML = `Episode ${numeralStr} - ${element.title}`
        li.addEventListener('click', e => {
            trocaIntro(element, numeralStr)
        })
        ulFilmes.appendChild(li)
        atual++
    })
}

montaListaFilmes()