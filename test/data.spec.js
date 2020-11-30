import { selectType, selectEgg, calcType, buscarNome, buscarNum, ordenarPokemons } from '../src/data.js';
const pokemonTeste = [
    {
    "num": "001",
    "name": "bulbasaur",
    "type": [ 
      "grass",
      "poison"
    ],
    "egg": "2 km"
    },
    {
      "num": "172",
      "name": "pichu",
      "type": [
        "electric"
      ],
      "egg": "7 km",
    },
    {
      "num": "078",
      "name": "rapidash",
      "type": [
        "fire"
      ],
      "egg": "not in eggs",
    }
];

const bulbasaur = [{
  "num": "001",
  "name": "bulbasaur",
  "type": [ 
    "grass",
    "poison"
  ],
  "egg": "2 km"
}];

const pichu = [{
  "num": "172",
  "name": "pichu",
  "type": [
    "electric"
  ],
  "egg": "7 km"
}];

const rapidash = [{
  "num": "078",
  "name": "rapidash",
  "type": [
    "fire"
  ],
  "egg": "not in eggs",
}];

const ordemDeAZ = [
  {
  "num": "001",
  "name": "bulbasaur",
  "type": [ 
    "grass",
    "poison"
  ],
  "egg": "2 km"
  },
  {
    "num": "172",
    "name": "pichu",
    "type": [
      "electric"
    ],
    "egg": "7 km",
  },
  {
    "num": "078",
    "name": "rapidash",
    "type": [
      "fire"
    ],
    "egg": "not in eggs",
  }
];

const ordemDeZA = [
  {
    "num": "078",
    "name": "rapidash",
    "type": [
      "fire"
    ],
    "egg": "not in eggs",
  },
  {
    "num": "172",
    "name": "pichu",
    "type": [
      "electric"
    ],
    "egg": "7 km",
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "type": [ 
      "grass",
      "poison"
    ],
    "egg": "2 km"
  },
];

const ordemCrescente = [
  {
    "num": "001",
    "name": "bulbasaur",
    "type": [ 
      "grass",
      "poison"
    ],
    "egg": "2 km"
  },
  {
    "num": "078",
    "name": "rapidash",
    "type": [
      "fire"
    ],
    "egg": "not in eggs",
  },
  {
    "num": "172",
    "name": "pichu",
    "type": [
      "electric"
    ],
    "egg": "7 km",
  },
];

const ordenarDecescente = [
  {
    "num": "172",
    "name": "pichu",
    "type": [
      "electric"
    ],
    "egg": "7 km",
  },
  {
    "num": "078",
    "name": "rapidash",
    "type": [
      "fire"
    ],
    "egg": "not in eggs",
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "type": [ 
      "grass",
      "poison"
    ],
    "egg": "2 km"
  }
];

describe('testar tipo pokemon', () => {
  it('é uma função', () => {
    expect(typeof selectType).toBe('function');
  });

  it('retorna array filtrada tipo', () => {
    let tipo = "grass";
    expect(selectType(pokemonTeste, tipo)).toStrictEqual(bulbasaur);
  });
});

describe('testar km ovo', () => {
  it('é uma função', () => {
    expect(typeof selectEgg).toBe('function');
  });

  it('retorna array filtrada ovo', () => {
    const ovo = "7 km";
    expect(selectEgg(pokemonTeste, ovo)).toStrictEqual(pichu);
  });
});

describe('testar cálculo agregado', () => {
  it('é uma função', () => {
    expect(typeof calcType).toBe('function');
  });

  it('retorna porcentagem de pokemons', () => {
    let tipo = "electric";
    expect(calcType(pokemonTeste, tipo)).toBe(33.33);
  });
});

describe('testar buscar nome', () => {
  it('é uma função', () => {
    expect(typeof buscarNome).toBe('function');
  });

  it('retorna nome', () => {
    const nome = "pic";
    expect(buscarNome(pokemonTeste, nome)).toStrictEqual(pichu);
  });
});

describe('testar buscar número', () => {
  it('é uma função', () => {
    expect(typeof buscarNum).toBe('function');
  });

  it('retorna nome', () => {
    const num = "78";
    expect(buscarNum(pokemonTeste, num)).toStrictEqual(rapidash);
  });
});

describe('testar ordenar', () => {
  it('é uma função', () => {
    expect(typeof buscarNum).toBe('function');
  });

  it('retorna A-Z', () => {
    const ordemAZ = "ordenar-az";
    expect(ordenarPokemons(pokemonTeste, ordemAZ)).toStrictEqual(ordemDeAZ);
  });

  it('retorna Z-A', () => {
    const ordemZA = "ordenar-za";
    expect(ordenarPokemons(pokemonTeste, ordemZA)).toStrictEqual(ordemDeZA);
  });

  it('retorna 1-251', () => {
    const ordem1a251 = "ordenarCrescente";
    expect(ordenarPokemons(pokemonTeste, ordem1a251)).toStrictEqual(ordemCrescente);
  });

  it('retorna 251-1', () => {
    const ordem251a1 = "ordenarDecescente";
    expect(ordenarPokemons(pokemonTeste, ordem251a1)).toStrictEqual(ordenarDecescente);
  });
});
