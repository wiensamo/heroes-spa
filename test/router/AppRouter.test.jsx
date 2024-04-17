import { screen, render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe('test in <AppRouter />', () => { 
    
    test('must be show the login if it is not autentic', () => { 
        const contextValue = {
            logged: false,
        }
        render(
            <BrowserRouter >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </BrowserRouter>
        );
        expect( screen.getAllByText('Login').length ).toBe(1);
     });


     test('Must be show the marvel component if it is autenthic ', () => { 
        const contextValue = {
            logged: true,
            user:{
                id:'abc',
                name: 'Tyson'
            }}

        render(
            <MemoryRouter initialEntries={['/login']} >
                <AuthContext.Provider value={ contextValue } >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);
      });

 })