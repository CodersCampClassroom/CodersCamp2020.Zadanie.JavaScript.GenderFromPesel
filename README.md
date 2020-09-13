# CodersCamp 2020 - JavaScript
## Zadanie praktyczne - Płeć z numeru PESEL

W pliku `gender-from-pesel.js` uzupełnij implementację funkcji genderFromPesel, 
która będzie przyjmowała jeden parametr wejściowy.
Załóż, że podana do funkcji wartość zawsze będzie typu `string`.
Nie będziemy sprawdzać liczb, obiektów itp.

Do wykonania zadania wykorzystaj wiedzę domenową nt. numeru pesel, ze strony Gov.pl
Potrzebna treść strony została podana na końcu zadania.

### Wyzwania stojące przed Tobą

Twój zespół realizuje projekt dla platformy rządowej.
W ramach tego projektu zostało Ci przypisane zadanie, 
którego kryteria akceptacji zostały spisane poniżej.

1. Funkcja zwraca string `"MALE"`, jeśli PESEL dotyczy mężczyzny. **(10 punktów)**
2. Funkcja zwraca string `"FEMALE"`, jeśli PESEL dotyczy kobiety. **(10 punktów)**
3. Jeśli do funkcji nie został podany **string zawierający 11 znaków**, to należy rzucić wyjątek (Error). 
Treść wiadomości w wyjątku musi być następująca `"XXX is not valid PESEL number!"`, gdzie XXX to podany na wejściu do funkcji niepoprawny PESEL
Sprawdzamy jedynie liczbę znaków w podanym stringu. Nie weryfikujemy czy cały PESEL jest poprawnie skonstruowany.
**(15 punktów)**

Przykłady działania funkcji:
```js
genderFromPesel("89090132712") returns "MALE"
genderFromPesel("00301791241") returns "FEMALE"
genderFromPesel("123") throws Error("123 is not valid PESEL number!")
```

Powodzenia, twój zespół liczy na Ciebie! 


## Czym jest numer PESEL
Źródło: https://www.gov.pl/web/gov/czym-jest-numer-pesel

Numer PESEL to jedenastocyfrowy symbol numeryczny, 
który pozwala na łatwą identyfikację osoby, która go posiada. 
Numer PESEL zawiera datę urodzenia, numer porządkowy, oznaczenie płci oraz liczbę kontrolną.

### Co oznaczają cyfry w numerze PESEL
Każda z 11 cyfr w numerze PESEL ma swoje znaczenie. Można je podzielić następująco:

RRMMDDPPPPK

RR – to 2 ostanie cyfry roku urodzenia,

MM – to miesiąc urodzenia,

DD – to dzień urodzenia,

PPPP – to liczba porządkowa oznaczająca płeć. 
U kobiety ostatnia cyfra tej liczby jest parzysta (0, 2, 4, 6, 8), 
a u mężczyzny - nieparzysta (1, 3, 5, 7, 9),

K – to cyfra kontrolna.

Przykład: PESEL **81020**3PPP**6**K należy do kobiety, 
która urodziła się 3 lutego 1981 roku, 
a PESEL **761115**PPP**3**K - do mężczyzny, 
który urodził się 15 listopada 1976 roku.


