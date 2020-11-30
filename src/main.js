import { selectType, calcType, buscarNome, buscarNum, ordenarPokemons, selectEgg } from './data.js';
import data from './data/pokemon/pokemon.js';
import { limparNome, limparNum, limparTipo, limparOvo, limparOrdem } from './limparPesquisas.js';


const listaPokemons = data.pokemon;

function pokemons(lista) {
    let pokepoke = "";
    for (let item of lista) {
        pokepoke += `<div class="card display-flex text-align-center">
            <div class="flip text-align-center">
                <div class="front-card">
                    <h2 class="pokemon-name font-size-1-5-em">${item.name.toUpperCase().replace("(FEMALE)", "").replace("(MALE)", "")}</h2>
                    <h2 class="pokemon-num font-size-1-5-em">#${item.num}</h2>
                    <div class="imagem-pokemon">
                        <img src="${item.img}" alt="${item.name}" class="pokemon-img">
                    </div>
                    <h3 class="titulo-especificacoes">Região:</h3>
                    <p class="pokemon-region">${item.generation.name}</p>
                    <h3 class="titulo-especificacoes">Tipo:</h3>
                    <p class="pokemon-type">${item.type.join(", ").replace("steel", "aço").replace("water", "aquático").replace("dragon", "dragão").replace("electric", "elétrico").replace("fairy", "fada").replace("ghost", "fantasma").replace("fire", "fogo").replace("ice", "gelo").replace("grass", "grama").replace("bug", "inseto").replace("fighting", "lutador").replace("dark", "noturno").replace("rock", "pedra").replace("psychic", "psíquico").replace("ground", "terrestre").replace("poison", "venenoso").replace("flying", "voador")}</p>
                </div>

                <div class="back-card">
                    <h3 class="titulo-especificacoes">Raridade:</h3>
                    <p class="pokemon-rarity">${item["pokemon-rarity"]}</p>
                    <h3 class="titulo-especificacoes">Tipo de Ovo:</h3>
                    <p class="pokemon-egg">${item.egg.replace("not in eggs","não nasce em ovo")}</p>
                    <h3 class="titulo-especificacoes">Fraquezas:</h3>
                    <p class="pokemon-weaknesses">${item.weaknesses.join(", ").replace("steel", "aço").replace("water", "aquático").replace("dragon", "dragão").replace("electric", "elétrico").replace("fairy", "fada").replace("ghost", "fantasma").replace("fire", "fogo").replace("ice", "gelo").replace("grass", "grama").replace("bug", "inseto").replace("fighting", "lutador").replace("dark", "noturno").replace("rock", "pedra").replace("psychic", "psíquico").replace("ground", "terrestre").replace("poison", "venenoso").replace("flying", "voador")}</p>
                    <h3 class="titulo-especificacoes">Chance de aparecer:</h3>
                    <p class="pokemon-weaknesses">${item["spawn-chance"]}%</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("pokemons").innerHTML = pokepoke;
}
pokemons(listaPokemons);

const inputName = document.getElementById("nomePokemon");
inputName.addEventListener("keyup", pegarNome);

function pegarNome(){
    const nomePokemons = document.getElementById("nomePokemon").value;
    const pesquisaNome = buscarNome(data.pokemon, nomePokemons);
    pokemons(pesquisaNome);
    limparNome();
}

const inputNum = document.getElementById("numPokemon");
inputNum.addEventListener("keyup", pegarNum);

function pegarNum() {
    const numPokemons = document.getElementById("numPokemon").value;
    const pesquisaNum = buscarNum(data.pokemon, numPokemons);
    pokemons(pesquisaNum);
    limparNum();
}

const selectTipo = document.getElementById("filterType");
selectTipo.addEventListener("change", pegarTipo);

function pegarTipo() {
    const filtroType = document.getElementById("filterType").value;
    const filtrado = selectType(listaPokemons, filtroType);
    pokemons(filtrado);
    typePercent();
    limparTipo();
}

function typePercent() {
    document.getElementById("porcentagem").innerHTML = "",
    document.getElementById("porcentagem").style.display= "block";
    const filtroType = document.getElementById("filterType").value;
    let result = calcType(data.pokemon, filtroType);
    document.getElementById("porcentagem").innerText += `${result}% de Pokémon são deste tipo.`
}

const selectOvo = document.getElementById("filterEgg");
selectOvo.addEventListener("change", pegarOvo);
function pegarOvo() {
    const filtroEgg = document.getElementById("filterEgg").value;
    const filtradoEgg = selectEgg(listaPokemons, filtroEgg);
    pokemons(filtradoEgg);
    limparOvo();
}

const selectOrdenar = document.getElementById("ordenar");
selectOrdenar.addEventListener("change", pegarOrdem);
function pegarOrdem() {
    const filtroOrdenar = document.getElementById("ordenar").value;
    const ordered = ordenarPokemons(listaPokemons, filtroOrdenar);
    pokemons(ordered);
    limparOrdem();
}

const buttonRecarregar = document.getElementById("listaCompleta");
buttonRecarregar.addEventListener("click", recarregar);
function recarregar() {
    document.getElementById("porcentagem").style.display= "none";
    pokemons(listaPokemons);
}