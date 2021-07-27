import React from 'react';
import {shallow} from 'enzyme';
import Counterapp from '../CounterApp';


describe('Pruebas <CounterApp />', () =>{
    let wrapper = shallow(<Counterapp />);;
    beforeEach( ()=>{
        wrapper = shallow(<Counterapp />);

    });
    test('Hacer el snapshot con los valores por defecto', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar el valor por defecto =100', () =>{
        const value = 100;
         const wrapper = shallow(
        <Counterapp value = {100}/>);
        const valorDefecto = wrapper.find('h2').text();
        expect(valorDefecto).toBe('100');
    });
    test('Probar botn +1 incrementa el valor', () =>{
        const botonIncremento = wrapper.find('button').at(0).simulate('click');
        const valorDefecto = wrapper.find('h2').text();
        expect(valorDefecto).toBe('11');

    });
    test('Probar botn -1 decrementa el valor', () =>{
        const botonIncremento = wrapper.find('button').at(2).simulate('click');
        const valorDefecto = wrapper.find('h2').text();
        expect(valorDefecto).toBe('9');

    });
});