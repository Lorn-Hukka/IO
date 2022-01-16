import { render, screen } from '@testing-library/react'
import Contact from '../pages/contact'

describe('Strona kontaktowa', () => {
  it('Powinna posiadać heading "Skontaktuj się z nami"', () => {
    render(<Contact />)

    const heading = screen.getByRole('heading', {
      name: /Skontaktuj się z nami/i,
    })

    expect(heading).toBeInTheDocument()
  });
  
  it('Powinna posiadać miejsca do wpisania danych - Imie i Nazwisko', () => {
    render(<Contact />)

    const nameInput = screen.getByLabelText(/Imie i Nazwisko:/i)

    expect(nameInput).toBeInTheDocument()
  });

  it('Powinna posiadać miejsca do wpisania danych - Adress E-mail', () => {
    render(<Contact />)

    const mailInput = screen.getByLabelText(/Adres E-mail:/i)

    expect(mailInput).toBeInTheDocument()
  });

  it('Powinna posiadać miejsca do wpisania danych - Wiadomość od klienta', () => {
    render(<Contact />)

    const msgInput = screen.getByLabelText(/Wiadomość do nas:/i)

    expect(msgInput).toBeInTheDocument()
  });

  it('Powinna posiadać button do wysłania wiadomości z tekstem "Wyślij!"', () => {
    render(<Contact />)

    const button = screen.getByRole('button', {
      name: /Wyślij!/i,
    })

    expect(button).toBeInTheDocument()
  });

  it('Pola do wprowadzenia danych powinny być wymagane', () => {
    render(<Contact />)

    const nameInput = screen.getByLabelText(/Imie i Nazwisko:/i)
    const mailInput = screen.getByLabelText(/Adres E-mail:/i)
    const msgInput = screen.getByLabelText(/Wiadomość do nas:/i)


    expect(nameInput).toBeRequired()
    expect(mailInput).toBeRequired()
    expect(msgInput).toBeRequired()
  });

})