export const selectType = (listaPokemons, filtroType) =>
    (listaPokemons.filter(search => search.type.includes(filtroType)));

export const selectEgg = (listaPokemons, filtroEgg) =>
    (listaPokemons.filter(search => search.egg.includes(filtroEgg)));

export const calcType = (data, filtroType) => {
    const type = data.filter(search => search.type.includes(filtroType));
    return Math.round(((type.length * 100) / data.length) * 100) / 100;
};

export const buscarNome = (data, name) =>
    (data.filter(search => search.name.toUpperCase().includes(name.toUpperCase())));

export const buscarNum = (data, num) =>
    (data.filter(search => search.num.includes(num)));

const ordenarAZ = (a, b) => (a["name"]).localeCompare(b["name"]);
const ordenarZA = (a, b) => (a["name"]).localeCompare(b["name"]);
const ordenarCrescente = (a, b) => Number((a["num"]).localeCompare(b["num"]));
const ordenarDecrescente = (a, b) => Number((a["num"]).localeCompare(b["num"]));

export const ordenarPokemons = (listaPokemons, filtroOrdenar) => {
    switch (filtroOrdenar) {
        case "ordenar-az":
            return listaPokemons.sort((a, b) => ordenarAZ(a, b))
        case "ordenar-za":
            return listaPokemons.sort((a, b) => ordenarZA(a, b)).reverse()
        case "ordenarCrescente":
            return listaPokemons.sort((a, b) => ordenarCrescente(a, b))
        case "ordenarDecescente":
            return listaPokemons.sort((a, b) => ordenarDecrescente(a, b)).reverse();
    }
};