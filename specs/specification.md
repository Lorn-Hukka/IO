# Specyfikacja wymagań projektu - Sklep Pajonatów Fantastyki

## Spis treści:
- [Specyfikacja wymagań projektu - Sklep Pajonatów Fantastyki](#specyfikacja-wymagań-projektu---sklep-pajonatów-fantastyki)
  - [Spis treści:](#spis-treści)
  - [Wstęp](#wstęp)
    - [Autorzy:](#autorzy)
    - [Changelog:](#changelog)
    - [Słownik Pojęć:](#słownik-pojęć)
  - [Cel](#cel)
  - [Cechy systemu i wymagania](#cechy-systemu-i-wymagania)
    - [Wymagania funkcjonalne:](#wymagania-funkcjonalne)
      - [Strona Sprzedająca (Sprzedawca / Administrator):](#strona-sprzedająca-sprzedawca--administrator)
      - [Strona Kupująca (Klient / Użytkownik):](#strona-kupująca-klient--użytkownik)
    - [Wymagania niefunkcjonalne](#wymagania-niefunkcjonalne)
    - [Cechy systemu](#cechy-systemu)
    - [Opis architektury i technologii:](#opis-architektury-i-technologii)
      - [Schematy](#schematy)


## Wstęp

---

Specyfikacja ta ma na celu przedstawienie funkcji i technologii wykorzystanej do zbudowania sklepu internetowego / portal sprzedaży dla zapalonych pasjonatów Fantastyki w którym mogą kupić wszystko co potrzebne do dobrej zabawy (planszówki, kostki do RPG'ów, itd.)

### Autorzy:
- Wojciech Kasolik
- Radosław Koczur
- Błażej Mrzygłód

### Changelog:

| Wersja    | Zmiany                             |
|-----------|------------------------------------|
|  v.1.0.0  | Utworzenie tej specyfikacji        |

### Słownik Pojęć:

**Serwis Internetowy** / **Serwis** / **Aplikacja** - Zbiorcza nazwa dla całego systemu informatycznego składającego się z wielu podczęści np. bazy danch, dostawcy płatności itd.

**Klient** / **Użytkownik**  - Osoba fizyczna, bądź prawna korzystająca z serwisu.

**Administrator** - Osoba zarządzająca systemem, rozwiązująca problemy użytkowników - często sprzedawca. 

**Oferta** - Wystawione ogłoszenie w aplikacji.

**Produkt** - Dowolny artykuł wystawiony w sklepie na sprzedaż. Musi posiadać odpowiednie parametry mające odzwierciedlające fizyczne parametry sprzedawnego przedmiotu.


## Cel

---

Celem danego projektu jest zbudowanie sklepu internetowego dla pasjonatów fantastyki. Utworzony serwis ma spełniać wymaganiom współczesnego klienta, czyli powinien umożliwiać szybkie i bezpieczne zakupy w internecie.

Użytkownik będzie miał opcję założenia w sklepie konta bądź zalogowania się przy pomocy zewnętrznych platform np. Google, Facebook, Twitter, Discord.

Posiadanie konta umożliwi użytkownikowi dostęp do historii swoich zamówień, ułatwi komunikacje ze sprzedawcą czy zezwoli na wystawianie recenzji.

## Cechy systemu i wymagania

---

### Wymagania funkcjonalne:

#### Strona Sprzedająca (Sprzedawca / Administrator):
- Wystawienie produktu/oferty
- Edycja wcześniej wystawionych ofert
  - Zwyczajnych
  - Promocyjnych
- Podgląd złożonych zamówień
- Zarządzanie złożonymi zamówieniami
  - Możliwość oznaczenia ich jako:
    - zrealizowane
    - anulowane
    - zmodyfikowane
    - w trakcie
- Możliwość kontaktu z klientem

#### Strona Kupująca (Klient / Użytkownik):

- Zakup produktu:
  - Wybór miejsca wysyłki
  - Sposobu płatności
- Możliwość wyświetlenia, sortowania i obserwowania oferty
- Koszyk z produktami klienta
- Kontakt ze sprzedającym
- Historia zamówień
- Możliwość wystawienia opinii

### Wymagania niefunkcjonalne
- Możliwośc obsługi na telefonie
- Bezpieczeństwo użytkowników
- Modern Design
- Modularność systemu
- Bezawaryjność (SLA)
- Łatwy w obsłudze (Intuicyjny)
- Integralność danych
- Podział odpowiedzialności systemów

### Cechy systemu
- Stabilny
- Bezpieczny
- Skalowalny
- Odporny na awartie
- Automatyczny Deployment

### Opis architektury i technologii:

Aplikacja będzie składała się z wielu części, w których najważniejszą z nich (widoczną "gołym okiem" dla użytkownika) jest responsywna strona internetowa służąca za interfejs użytkownikowi. 

Back-end aplikacji będą stanowić wszystkie systemy (mikroserwisy) potrzebne do jej poprawnego i wydajnego funkcjonowania.

Do budowy i poprwanego funkcjonowania systemu zostaną wykorzystane nastepujące technologie:
- [Nextjs](https://nextjs.org/)  - Front-end
- [Tailwindcss](https://tailwindcss.com/) - Stylizacja Front-endu
- [Strapi](https://strapi.io/) - Backend API / CMS
- [Auth0](https://auth0.com/) - Zewnętrzny dostawca, obsługujący na logowanie się użytkowników
- [PayPal](https://www.paypal.com/pl/home) / [Stripe](https://stripe.com/en-pl) - Zewnętrzni dostawcy obsługujący Płatności
- [Docker](https://www.docker.com/) - Konteneryzacja 
- [Nginx](https://www.nginx.com/) - Proxy, Load-Balancing


#### Schematy
Przykładowa architektura aplikacji:
![Architektura](https://cms.spfcentaur.pl/uploads/schemat_f98c3ef214.png)
