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

        expect(getByText(/로그아웃/)).not.toBeNull():

        fireEvent.click(getByText(/로그아웃/))

        expect(handleLogout).toBeCalled();
    })

    it('render Upload Form', () => {
        const {getByText} =  renderLogoutForm();

        expect(getByText(/카테고리/)).not.toBeNull();
        expect(getByText(/파일/)).not.toBeNull();
        
        fireEvent.click(getByText(/+/))

        expec(handleUpload).toBeCalled();
    })
})