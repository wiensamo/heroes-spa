import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../src/router/PrivateRoute"

describe('test in <PrivateRoute /> component', () => { 

    test('must route private when user used the login buttom', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user:{
                id:'abc',
                name: 'Tyson'
            }}

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( screen.getByText('ruta privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();
     })
 })