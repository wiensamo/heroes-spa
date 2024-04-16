import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Test in <PublicRoute />', () => { 
    
    test('should be show the children if is not authenticator', () => { 
        const contextValue ={
            logged: false
        }
        render( 
        <AuthContext.Provider value={contextValue}>
            <PublicRoute>
                <h1>ruta puiblica</h1>
            </PublicRoute>
        </AuthContext.Provider> );
        expect( screen.getByText('ruta puiblica')).toBeTruthy();
     });

    test('must navigate if it is authentic', () => { 
        const contextValue ={
            logged: true,
            user: {name:'Tyson', id:'111'}
        }
        render( 
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='login' element={ 
                        <PublicRoute>
                            <h1>ruta puiblica</h1>
                        </PublicRoute>
                    } />
                    <Route path='marvel' element={ <h1>Pagina Marvel</h1>} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider> );
       expect( screen.getByText('Pagina Marvel')).toBeTruthy()
    });
})
