import { render, screen } from '@testing-library/react'
import Custom404 from '../pages/404'

describe('404', () => {
    it('Powinno posiadać heading "Błąd 404, nie znaleziono strony"', () => {
        render(<Custom404 />)
    
        const heading = screen.getByRole('heading', {
          name: /Błąd 404, nie znaleziono strony/i,
        })

        expect(heading).toBeInTheDocument();
    })
})