import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Strona główna', () => {
  it('Powinna posiadać heading "O tej stronie"', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /O tej stronie/i,
    })

    expect(heading).toBeInTheDocument()
  });

  it('Powinna posiadać heading "Nowości"', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Nowości/i,
    })

    expect(heading).toBeInTheDocument()
  });

  it('Powinna posiadać heading "Promocje"', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Promocje/i,
    })

    expect(heading).toBeInTheDocument()
  });
  
})