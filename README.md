# CodersCamp 2020 - JavaScript
## 🧑‍🤝‍🧑 Zadanie praktyczne - Płeć z numeru PESEL

#### ⏰ Czas na wykonanie: 35 minut

W pliku `gender-from-pesel.js` uzupełnij implementację funkcji genderFromPesel, 
która będzie przyjmowała jeden parametr wejściowy.
Załóż, że podana do funkcji wartość zawsze będzie typu `string`.
Nie będziemy sprawdzać liczb, obiektów itp.

Do wykonania zadania wykorzystaj wiedzę domenową nt. numeru pesel, ze strony Gov.pl
Potrzebna treść strony została podana na końcu zadania.

### 🚀 Wyzwania stojące przed Tobą

Twój zespół realizuje projekt dla klienta.
W ramach tego projektu zostało Ci przypisane zadanie, 
którego kryteria akceptacji zostały spisane poniżej.
Każde z zadań zostało wycenione. Im więcej zadań zdobędziesz - tym więcej zarobisz dla firmy i tym lepiej Cię ocenią.

Niestety, w projektach informatycznych oprócz działania programu ważne są także ustalone terminy.
Pamiętaj, że umowa z klientem zobowiązuje nasz do zmieszczenia się w wyznaczonym czasie (30 minut).
Za każde spóźnienie otrzymamy 1$ mniej. Jednakże, jeśli wszystko będzie wykonane w terminie, zarobimy premię 10$.

1. Funkcja genderFromPesel zwraca string `"MALE"`, jeśli PESEL dotyczy mężczyzny. **(Wycena: 10$)**
2. Funkcja genderFromPesel zwraca string `"FEMALE"`, jeśli PESEL dotyczy kobiety. **(Wycena: 10$)**
3. Jeśli podany do funkcji genderFromPesel parametr, to nie **string zawierający 11 znaków**, wtedy należy rzucić wyjątek (Error). 
Treść wiadomości w wyjątku musi być następująca `"XXX is not valid PESEL number!"`, gdzie XXX to podany na wejściu do funkcji niepoprawny PESEL
Sprawdzamy jedynie liczbę znaków w podanym stringu. Nie weryfikujemy czy cały PESEL jest poprawnie skonstruowany.
**(Wycena: 15$)**

**Całość**: 35$ + możliwa premia (10$) + opóźnienie (-1$ * każda rozpoczęta minuta po czasie)

Przykłady działania funkcji:
```js
genderFromPesel("89090132712") returns "MALE"
genderFromPesel("00301791241") returns "FEMALE"
genderFromPesel("123") throws Error("123 is not valid PESEL number!")
```

Powodzenia, twój zespół liczy na Ciebie! 


## ℹ️ Czym jest numer PESEL
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
