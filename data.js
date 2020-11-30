export const selectType = (listaPokemons, filtroType) =>
    listaPokemons.filter(search => search.type.includes(filtroType));

export const calcType = (data, filtroType) => {
    const type = data.filter(search => search.type.includes(filtroType));
    return Math.round(((type.length * 100) / data.length) * 100) / 100;
};

export const selectEgg = (listaPokemons, filtroEgg) =>
    listaPokemons.filter(search => search.egg.includes(filtroEgg));

export const buscarNome = (data, name) =>
    data.filter(search => search.name.toUpperCase().includes(name.toUpperCase()));

export const buscarNum = (data, num) =>
    data.filter(search => search.num.includes(num));

    
export const ordenarPokemons = (listaPokemons, filtroOrdenar) => {
    const ordenarAZ = (a, b) => (a["name"]).localeCompare(b["name"]);
    const ordenarZA = (a, b) => (a["name"]).localeCompare(b["name"]);
    const ordenarCrescente = (a, b) => Number((a["num"]).localeCompare(b["num"]));
    const ordenarDecrescente = (a, b) => Number((a["num"]).localeCompare(b["num"]));
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