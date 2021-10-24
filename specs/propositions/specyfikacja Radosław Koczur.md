# Specyfikacja wymagań dla IO sklep internetowy
 
## wersja 0.1.0
 
## Autorzy:
 
- Radosław Koczur
- Wojciech Kasolik
- Błażej Mrzygłód
 
# Spis treści

- [Specyfikacja wymagań dla IO sklep internetowy](#specyfikacja-wymagań-dla-io-sklep-internetowy)
  - [wersja 0.1.0](#wersja-010)
  - [Autorzy:](#autorzy)
- [Spis treści](#spis-treści)
- [1. wprowadzenie](#1-wprowadzenie)
  - [1.1. Opis systemu](#11-opis-systemu)
  - [1.2. Słownik pojęć:](#12-słownik-pojęć)
- [Model procesów biznesowych](#model-procesów-biznesowych)
  - [2.1. Obiekty biznesowe](#21-obiekty-biznesowe)
    - [Produkt - Wirtualna reprezentacja fizycznego przedmiotu posiadająca opis, cenę i obrazek. Produkty o podobnych cechach bądź zastosowaniu grupowane są w kategorie produktów. Produkt może zostać zakupiony poprzez dodanie go do koszyka i sfinalizowanie transakcji przy użyciu jednej z dostępnych metod płatności.](#produkt---wirtualna-reprezentacja-fizycznego-przedmiotu-posiadająca-opis-cenę-i-obrazek-produkty-o-podobnych-cechach-bądź-zastosowaniu-grupowane-są-w-kategorie-produktów-produkt-może-zostać-zakupiony-poprzez-dodanie-go-do-koszyka-i-sfinalizowanie-transakcji-przy-użyciu-jednej-z-dostępnych-metod-płatności)
    - [Podstrona funkcjonalna - Jest to strona posiadająca wersję demo przydatnego narzędzia. Jej pełna wersja odblokowywuje się po stworzeniu konta w serwisie. Jej celem jest przyciąganie do serwisu użytkowników początkowo nie zainteresowanych zakupem.](#podstrona-funkcjonalna---jest-to-strona-posiadająca-wersję-demo-przydatnego-narzędzia-jej-pełna-wersja-odblokowywuje-się-po-stworzeniu-konta-w-serwisie-jej-celem-jest-przyciąganie-do-serwisu-użytkowników-początkowo-nie-zainteresowanych-zakupem)
  - [2.1. Aktorzy biznesowi](#21-aktorzy-biznesowi)
    - [Klient](#klient)
    - [Administrator](#administrator)
- [3. Wymagania funkcjonalne](#3-wymagania-funkcjonalne)
- [4. Wymagania niefunkcjonalne](#4-wymagania-niefunkcjonalne)
- [5. Model systemu](#5-model-systemu)
- [6. Uzasadnienia biznesowe](#6-uzasadnienia-biznesowe)
- [7. Technologie](#7-technologie)
 
# 1. wprowadzenie
 
## 1.1. Opis systemu
 
Celem jest utworzenie serwisu internetowego dla fanów gier planszowych oraz RPG. Serwis ma spełniać wymaganiom współczesnego klienta czyli powinna umożliwiać szybkie i bezpieczne zakupy w internecie. Użytkownik będzie miał opcję założenia w sklepie konta przy użyciu wbudowanego w stronę kreatora bądź zalogowania przy użyciu kont na dużych platformach takich jak gmail,fb, linkedin. Posiadanie konta pozwala użytkownikowi przeglądać historię zamówień oraz korzystać z pełni funkcjonalności w budowanych w stronę aplikacji. Serwis internetowy będzie posiadał także zestaw przydatnych dla planszuwkowiczów aplikacji takich jak generatory rzutu kością.
 
## 1.2. Słownik pojęć:
 
**Sklep internetowy** - Podstrona serwisu internetowego na której użytkownik ma opcję dokonać zakupu.
 
**Serwis internetowy** - Zbiorcza nazwa dla systemu złożonego z podstron informacyjnych, sklepu internetowego, podstron funkcjonalnych i bazy danych.
 
**Podstrona funkcjonalna** - Podstrona zawierająca narzędzie przydatne podczas gry np.: emulator kości 6 ściennej
 
**Klient** - Użytkownik serwisu internetowego. Może nim być dowolna osoba.
 
**Administrator** - Osoba dodająca produkty oraz rozwiązująca problemy użytkowników.
 
**Produkt** - Pojedynczy produkt w sklepie.
 
# Model procesów biznesowych
 
## 2.1. Obiekty biznesowe
 
### Produkt - Wirtualna reprezentacja fizycznego przedmiotu posiadająca opis, cenę i obrazek. Produkty o podobnych cechach bądź zastosowaniu grupowane są w kategorie produktów. Produkt może zostać zakupiony poprzez dodanie go do koszyka i sfinalizowanie transakcji przy użyciu jednej z dostępnych metod płatności.
 
### Podstrona funkcjonalna - Jest to strona posiadająca wersję demo przydatnego narzędzia. Jej pełna wersja odblokowywuje się po stworzeniu konta w serwisie. Jej celem jest przyciąganie do serwisu użytkowników początkowo nie zainteresowanych zakupem.
 
## 2.1. Aktorzy biznesowi
 
### Klient
 
Jest to docelowy użytkownik serwisu. Może on dokonać zakupu na stronie,utworzyć konto albo skorzystać z dostępnych podstron funkcjonalnych. Docelowo powinien być kierowany na te części strony które umożliwiają zakup.
 
### Administrator
 
Specjalista dodający produkty, odpowiadający na pytania użytkowników i w przypadku potrzeby edytując zawartość podstron. Docelowo powinien być to informatyk z tytułem technika albo wyższym.
 
# 3. Wymagania funkcjonalne
 
| id  | nazwa                  | kategoria | rola          | opis                                                                                                                                                      |
| --- | ---------------------- | --------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | tworzenie konta        | kluczowe  | klient        | Aplikacja oferuje tworzenie konta, poprzez dostarczone dane przez użytkownika, które podlegają weryfikacji przez system. Dane używane są zgodnie z RODO. |
| 2   | logowanie użytkownika | kluczowe  | klient        | Po założeniu konta istnieje możliwość zalogowania się na nie w celu zobaczenia historii transakcji oraz uzyskania dostępu do reszty funkcjonalności        |
| 3   | Zakup produktu         | kluczowe  | klient        | Klient ma możliwość zakupu produktu poprzez dodanie go do koszyka oraz sfinalizowanie transakcji przy użyciu jednej z dostępnych metod płatności          |
| 4   | Operacje na produktach | kluczowe  | Administrator | Administrator ma możliwość dodawania, usuwania oraz edycji produktów |
| 5   | emulator rzutu kością | ważne  | Klient | Aplikacja symulująca rzuty kością |
| 6   | płatność online | ważne  | Klient | Umożliwienie uiszczania płatności poprzez popularne metody płatności |
| 7   | Kontakt | drugorzędne  | Klient | Szeroka oferta kanałów komunikacji z klientem |

# 4. Wymagania niefunkcjonalne
 
| id  | nazwa                              | kategoria   | opis                                                                                                                                                                  |
| --- | ---------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Podział odpowiedzialności systemów | kluczowe    | Platforma ma być podzielona na część frontendową jak i backendową. |
| 2   | Responsywność                      | ważne       | Platforma powinna być dostosowana do wyświetlania części front-endowej na wielu rozdzielczościach bez utraty jakości                                                 |
| 3   | Zgodność z wcag 2.1                | drugorzędne | Platforma powinna być dostosowana do wyświetlania części front-endowej na wielu rozdzielczościach bez utraty jakości                                                 |
 
# 5. Model systemu
 
Model systemu ukazujący integralne części systemu. Nie odzwierciedla realnego układu w bazie danych czy też logice systemu.
 
![This is an image](https://cms.spfcentaur.pl/uploads/diagram_34b45db6a1.svg)
 
# 6. Uzasadnienia biznesowe
 
Podstawowa funkcjonalność jaką jest sklep internetowy jest mało konkurencyjna i bez reklamy nie ma większych szans wybicia. Jeżeli jednak wzbogacimy serwis o przydatne aplikacje czy narzędzia istnieje spore prawdopodobieństwo że osoby które przyszły na nasz serwis po narzędzie coś na nim kupią.
 
# 7. Technologie
 
Technologie które zostaną zastosowane:
 
- wordpress
- woocommerce
- facebook sdk
- google sdk
- linkedin dp
- js
- react.js
- css
- scss
- html
- php 7.2
- sql
