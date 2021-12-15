import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes',()=>{
    test('Debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);
        

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefined si Heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        

        expect(heroe).toBe(undefined);
    });
    test('Debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroes.filter(h => h.owner === owner);
        
        

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefined si Heroe no existe', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        expect(heroe.length).toBe(2);
    });


    
})