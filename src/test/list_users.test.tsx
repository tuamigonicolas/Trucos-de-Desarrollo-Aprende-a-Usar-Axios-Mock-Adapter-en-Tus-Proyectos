import '@testing-library/jest-dom';

import { render, waitFor } from '@testing-library/react';

import ComponentList from '@/components/list';

/*

---- SOLUCION DEL PROBLEMA ----

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('https://jsonplaceholder.typicode.com/users').reply<Props_users[]>(200, [
    {
        id: 1,
        name: "Nombre de prueba"
    }
]);
*/

describe('Renderizacion <ComponentList />', () => {
    test('Devolucion de datos correctos', async () => {
        const { getByTitle } = render(<ComponentList />);

        const load = getByTitle('Cargando usuarios...')

        expect(load).toBeInTheDocument();

        await waitFor(() => {
            const usuario = getByTitle('Usuario');

            expect(usuario).toBeInTheDocument();
        })
    })
})