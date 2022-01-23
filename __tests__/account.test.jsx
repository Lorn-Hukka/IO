import { render, screen } from '@testing-library/react'
import Account from '../pages/account'

describe('Logowanie', () => {
    it('Powinno posiadać miejsce do wpisania adresu e-mail', () => {
        render(<Account />)
    
        const mail = screen.getByLabelText(/E-mail:/i)
    
        expect(mail).toBeInTheDocument()
      });

      it('Powinno posiadać miejsce do wpisania hasła', () => {
        render(<Account />)
    
        const password = screen.getByLabelText(/Hasło:/i)
    
        expect(password).toBeInTheDocument()
      });

      it('Powinien posiadać przycisk służący do wczytania koszyka', () => {
        render(<Account />)
    
        const button = screen.getByRole('button', {
          name: /ZALOGUJ SIĘ/i,
        })
    
        expect(button).toBeInTheDocument()
      });
})