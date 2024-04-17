import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';
import { AuthContext } from '../../../src/auth/context/AuthContext';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}));

describe('Test in <SearchPage />', () => { 
    
    beforeEach(()=> jest.clearAllMocks);
    
    test('musht show defaults values correctly', () => { 
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();
     });

     test('must be show Batman and the input with queryString value', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        const inputValue = screen.getByRole('textbox');
        expect(inputValue.value).toBe('batman');
        const img = screen.getByRole('img')
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');   
        const alert = screen.getByLabelText('alert-display');
        expect(alert.style.display).toBe('none');
      })

test('must be  show error if dont find hero (batman123)', () => {  
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']} >
                <SearchPage />
             </MemoryRouter>
        );
        const alert = screen.getByLabelText('alert-display');
        expect(alert.style.display).toBe('none');
});


test('must be  called the new page', () => {
    const inputValue = 'superman'
    render(
        <MemoryRouter initialEntries={['/search']} >
            <SearchPage />
         </MemoryRouter>
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {name: 'searchText', value: inputValue}});
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
    

})

 })