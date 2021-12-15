import React from 'react';
import '@testing-library/jest-dom'
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme'

describe('Pruebas en <PrimeraApp/>', () => {
    // test('Debe de mostrar el mensaje `Hola soy, Esteban`', () => {
        

    //     const saludo = 'Hola, soy Esteban';
    //     const {getByText} = render(<PrimeraApp saludo= {saludo}/>);


    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo ='Hola, soy Esteban'
        const wrapper = shallow(<PrimeraApp saludo ={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Esteban';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo ={saludo}
                subtitulo ={subtitulo}/>
        );

        const textoParrafo = wrapper.find('p').text();
        expect(subtitulo).toBe(textoParrafo);
        
    })
    
    
    
})
