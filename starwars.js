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

let swapiResult = await fetch(API_ENDPOINT)
    .then(swapiR => swapiR.json())

let listaFilmes = await friendlyFetch(swapiResult.films)

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

let atual = 1

listaFilmes.results.forEach(element => {
    let li = document.createElement('li')
    let numeralStr = `${numeroParaRomano(atual)}`
    numeralStr = numeralStr.padEnd(3)
    li.innerHTML = `Episode ${numeralStr} - ${element.title}`
    ulFilmes.appendChild(li)
    atual++
});