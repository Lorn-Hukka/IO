# Propozycja specyfikacji projektu (Wojciech kasolik)

## Spis treści:
- [Propozycja specyfikacji projektu (Wojciech kasolik)](#propozycja-specyfikacji-projektu-wojciech-kasolik)
  - [Spis treści:](#spis-treści)
  - [Wstęp](#wstęp)
    - [Changelog:](#changelog)
  - [Cel](#cel)
  - [Cechy systemu i wymagania](#cechy-systemu-i-wymagania)
    - [Wymagania funkcjonalne:](#wymagania-funkcjonalne)
      - [Strona Sprzedająca (Sprzedawca):](#strona-sprzedająca-sprzedawca)
      - [Strona Kupująca (Klient):](#strona-kupująca-klient)
    - [Wymagania niefunkcjonalne](#wymagania-niefunkcjonalne)
    - [Cechy systemu](#cechy-systemu)
    - [Opis architektury i technologii:](#opis-architektury-i-technologii)
      - [Schematy](#schematy)



## Wstęp

---

Sklep internetowy / Portal sprzedaży dla zapalonych pasjonatów Fantastyki w którym mogą kupić wszystko co potrzebne do dobrej zabawy (planszówki, kostki do RPG'ów, itd.)

### Changelog:

| Wersja    | Zmiany                             |
|-----------|------------------------------------|
|  v.0.1.0  | Utworzenie propozycji specyfikacji |


## Cel

---

Serwis jest przeznaczony dla osób, fanów fantastyki i gier planszowych. Ma im umożliwić zakup ulubionych gier hobbystycznych czy też sprzętu wymaganego do prowadzenia rozgrywek.

Jednocześnie ma służyć jako platforma do wystawiania danych przedmiotów przez sklep.

## Cechy systemu i wymagania

---

### Wymagania funkcjonalne:

#### Strona Sprzedająca (Sprzedawca):
- Wystawienie produktu/ofert; 
  - Oferta musi posiadać:
    -  tytuł, 
    -  cenę, 
    -  opis wystawionego produktu
    -  zdjęcie/zdjęcia produktu
- Edycja wcześniej wystawionych ofert
- Podgląd złożonych zamówień
- Zarządzanie złożonymi zamówieniami
  - Możliwość oznaczenia ich jako:
    - zrealizowane
    - anulowane
    - zmodyfikowane
    - w trakcie
- Wystawianie ofert promocyjnych
  
#### Strona Kupująca (Klient):

- Zakup produktu. (Wybranie miejsca wysyłki / sposobu płatności)
- Możliwość wyświetlenia i sortowania produktów/ofert
- Koszyk z produktami klienta
- Kontakt ze sprzedającym
- Historia zamówień

### Wymagania niefunkcjonalne
- Możliwośc obsługi na telefonie
- Bezpieczeństwo użytkowników
- Modern Design
- Modularność - Możliwość późniejszej rozbudowy
- Bezawaryjność

### Cechy systemu
- Stabilny
- Bezpieczny
- Skalowalny

### Opis architektury i technologii:

Aplikacja będzie składała się z kilku części, w których najważniejszą z nich (widoczną "gołym okiem" dla użytkownika) jest responsywna strona internetowa służąca za interfejs użytkownikowi. 

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
