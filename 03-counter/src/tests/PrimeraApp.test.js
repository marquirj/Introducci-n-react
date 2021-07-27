import React from 'react';
import {shallow} from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    /*test('Devuelve "Hola, soy Juan"', () => {
        const saludo = 'Hola soy Goku';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    });*/
    test('Debe mostrar <PrimeraApp /> correctamente', () =>{
        const saludo = 'Hola Juan';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar el subtitulo enviado por props', () =>{
        const saludo = 'Hola Juan';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo}
        />);
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    });

});