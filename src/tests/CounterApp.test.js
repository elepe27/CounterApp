
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import React from 'react';
import CounterApp from '../CounterApp';


describe('Pruebas en CounterApp', () => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach(()=>{
        wrapper = shallow(<CounterApp/>);
    })

    test('Debe de mostrar <CounterApp/> correctamente', () => {
        const value = 150;
        const wrapper = shallow(<CounterApp value={value}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
       
        const valor = 100;

        const textoParrafo = Number(wrapper.find('h2').text());
        expect(textoParrafo).toBe(valor);
        
    });

    test('debe de incrementar con el boton de +1 ', () => {
        wrapper.find('button').at(0).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();

        expect(textoParrafo).toBe('101');
    });

    test('debe de disminuir con el boton de -1 ', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();

        expect(textoParrafo).toBe('99');
    });

    test('Debe de colocar el valor por defecto con btn reset', () => {
        
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();

        expect(textoParrafo).toBe('105')


    });
    
    
    
    
})
