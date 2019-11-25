import {Pokedex} from './Pokedex'

describe('Pokedex', () => {
    let pokedex: Pokedex;

    beforeEach(() => {
        pokedex = new Pokedex('Default name');
    });

    it('Name and generated id', () => {
        const customPokedex = new Pokedex('Pokedex de Gérard');
        expect(customPokedex.name).toBe('Pokedex de Gérard');
        expect(customPokedex.id).toBeDefined();
    });

});