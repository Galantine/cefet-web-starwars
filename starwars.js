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
