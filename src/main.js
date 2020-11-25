import { selectType, calcType, buscarNome, buscarNum, ordenarPokemons, selectEgg } from './data.js';
import data from './data/pokemon/pokemon.js';

const listaPokemons = data.pokemon;

function pokemons(lista) {
    let pokepoke = "";
    for (let item of lista) {
        pokepoke += `<div class="card">
            <div class="flip">
                <div class="front-card">
                    <h2 class="pokemon-name">${item.name.toUpperCase()}</h2>
                    <h2 class="pokemon-num">${item.num}</h2>
                    <div class="imagem-pokemon">
                        <img src="${item.img}" alt="${item.name}" class="pokemon-img">
                    </div>
                    <h3 class="titulo-especificacoes">Região:</h3>
                    <p class="pokemon-region">${item.generation.name}</p>
                    <h3 class="titulo-especificacoes">Tipo:</h3>
                    <p class="pokemon-type">${item.type.join(", ")}</p>
                </div>

                <div class="back-card">
                    <h3 class="titulo-especificacoes">Raridade:</h3>
                    <p class="pokemon-rarity">${item["pokemon-rarity"]}</p>
                    <h3 class="titulo-especificacoes">Tipo de Ovo:</h3>
                    <p class="pokemon-egg">${item.egg.replace("not in eggs","não é nasce em ovo")}</p>
                    <h3 class="titulo-especificacoes">Fraquezas:</h3>
                    <p class="pokemon-weaknesses">${item.weaknesses.join(", ")}</p>
                    <h3 class="titulo-especificacoes">Chance de aparecer:</h3>
                    <p class="pokemon-weaknesses">${item["spawn-chance"]}%</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("pokemons").innerHTML = pokepoke;
};
pokemons(listaPokemons);

document.getElementById("nomePokemon").oninput = () => {
    const nomePokemons = document.getElementById("nomePokemon").value;
    const pesquisaNome = buscarNome(data.pokemon, nomePokemons);
    pokemons(pesquisaNome);
    limparNome();
};

document.getElementById("numPokemon").oninput = () => {
    const numPokemons = document.getElementById("numPokemon").value;
    const pesquisaNum = buscarNum(data.pokemon, numPokemons);
    pokemons(pesquisaNum);
    limparNum();
};

document.getElementById("filterType").onchange = () => {
    const filtroType = document.getElementById("filterType").value;
    const filtrado = selectType(listaPokemons, filtroType);
    pokemons(filtrado);
    typePercent();
};

const typePercent = () => {
    document.getElementById("porcentagem").innerHTML = "",
    document.getElementById("porcentagem").style.display= "block";
    const filtroType = document.getElementById("filterType").value;
    let result = calcType(data.pokemon, filtroType);
    document.getElementById("porcentagem").innerText += `${result}% dos Pokémons são originários desta região.`
};

document.getElementById("filterEgg").onchange = () => {
    const filtroEgg = document.getElementById("filterEgg").value;
    const filtradoEgg = selectEgg(listaPokemons, filtroEgg);
    pokemons(filtradoEgg);
};

document.getElementById("listaCompleta").onclick = () => {
    document.getElementById("porcentagem").style.display= "none";
    pokemons(listaPokemons);
};

document.getElementById("ordenar").onchange = () => {
    const filtroOrdenar = document.getElementById("ordenar").value;
    const ordered = ordenarPokemons(listaPokemons, filtroOrdenar);
    pokemons(ordered);
};