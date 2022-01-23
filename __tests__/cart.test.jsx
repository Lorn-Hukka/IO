import { render, screen } from '@testing-library/react'
import Cart from '../pages/cart'

describe('Koszyk', () => {
    it('Powinien posiadać heading "Koszyk"', () => {
        render(<Cart />)

        const heading = screen.getByRole('heading', {
            name: /Koszyk/i,
          })

          expect(heading).toBeInTheDocument()
    });

    it('Powinien posiadać heading "Łącznie do zapłaty"', () => {
        render(<Cart />)

        const heading = screen.getByRole('heading', {
            name: /Łącznie do zapłaty/i,
          })

          expect(heading).toBeInTheDocument()
    });

    it('Powinien posiadać przycisk służący do przejścia do płatności', () => {
        render(<Cart />)
    
        const button = screen.getByRole('button', {
          name: /PRZEJDŹ DO PŁATNOŚCI/i,
        })
    
        expect(button).toBeInTheDocument()
      });

      it('Powinien posiadać przycisk służący do zapisania koszyka', () => {
        render(<Cart />)
    
        const button = screen.getByRole('button', {
          name: /ZAPISZ KOSZYK/i,
        })
    
        expect(button).toBeInTheDocument()
      });

      it('Powinien posiadać przycisk służący do wczytania koszyka', () => {
        render(<Cart />)
    
        const button = screen.getByRole('button', {
          name: /WCZYTAJ ZAPISANY KOSZYK/i,
        })
    
        expect(button).toBeInTheDocument()
      });
})