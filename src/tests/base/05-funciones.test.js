import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js',()=>{

    test('getUser Debe de retornar un objeto', () => {
        
        const userTest ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual(userTest);

    });

    test('getUsuarioActivo Debe retornar un objeto', () => {
        const userTest ={
            uid: 'ABC567',
            username: 'Esteban'
        }

        const user = getUsuarioActivo('Esteban');

        expect(user).toEqual(userTest); 
    })
    
    

});