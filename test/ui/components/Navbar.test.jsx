import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}));

describe('test in <Navbar />', () => { 
    
    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'Tyson'
        },
        logout: jest.fn()
    }
    beforeEach(()=> jest.clearAllMocks)

    test('Must be show the user name',  () => { 
        render(
            <MemoryRouter initialEntries={['/login']} >
                <AuthContext.Provider value={ contextValue } >
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Tyson').length).toBe(1);
        expect(screen.getByText('Tyson')).toBeTruthy();


     });

     test('must be call the logout function and navigate  when do click on button',  () => { 
        
        render(
            <MemoryRouter initialEntries={['/login']} >
                <AuthContext.Provider value={ contextValue } >
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        const logOutButton = screen.getByRole('button');
        fireEvent.click(logOutButton);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace": true});

      })
 })