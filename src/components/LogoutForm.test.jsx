import { fireEvent, render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

import { MemoryRouter } from 'react-router-dom';


describe('LogoutForm', () => {
    const handleLogout = jest.fn();
    const handleUpload = jest.fn();    
    function renderLogoutForm() {
        return render(<LogoutForm handleLogout={handleLogout} handleUpload={handleUpload}/>)
    }
    
    it('render logout button', () => {
        const {getByText} =  renderLogoutForm();

        expect(getByText(/떠나기/)).not.toBeNull():

        fireEvent.click(getByText(/떠나기/))

        expect(handleLogout).toBeCalled();
    })

    it('render Upload Form', () => {
        const {getByText} =  renderLogoutForm();

        expect(getByText(/카테고리/)).not.toBeNull();
        
        fireEvent.click(getByText(/+/))

        expec(handleUpload).toBeCalled();
    })
})