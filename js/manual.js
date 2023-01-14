// console.log('To jest mój pierwszy program')

// console.log('ok')

// string pomiędzy apostrofy 'tekst', średnika...

// console.log('ok2')



/*

    alt+shift+a

    wieloliniowy

    możemy pisać po eneterach

    itp.

*/



// console.log(typeof "hello world");
// console.log(2 + 3);
// console.log(typeof 2 * 5);



// TYPY DANYCH

// 7 typów wbudowanych - 6 prostych i 1 referencyjny



// typy proste

// string,number.boolean, undefined, null, symbol



// Typy referencyjny

// Obiekt - obiekt, funkcja, tablica



// typeof - operator, który zxwraca informacje o typie



// String '' "" ``

// typeof "tekst";

// zmienna typu string

// let userName = 'Tymoteusz';

// console.log(typeof userName);




// NUMBER

// console.log(typeof 22.222);

// console.log(typeof 2);

// console.log(typeof 100000000000000);

// console.log(typeof NaN);

// console.log(2.2 * 'a');



// Boolean - wartość logiczna

// console.log(typeof true);

// console.log(typeof false);

// console.log(typeof (2 == 3));



// underfined

// let lastName = 'jakaś zmienna';

// console.log(typeof lastName);

// console.log(typeof undefined);



// NULL

// console.log(typeof null);

// console.log(typeof '');




// Typ referencyjny - OBIEKTY

// console.log(typeof {}); // obiekt

// console.log(typeof []); // tablica - array

// console.log(typeof function () { }); // funkcja - też obiekt - w konsoli function



// Tworzymy plik JS

// Podpinamy pod HTML - zewnętrzny plik

// wydrukuj w konsoli "hello world"\

// Wynik dodawania 2+3

// Wynik mnożenia 2*5

// wydrukuj typ danych pierwszej i ostatniej wartości



// ZMIENNE

// var nazwaZmiennej = 'jakaś wartość';

// let nazwaZmiennej1 = 'wartość zmiennej let';

// const nazwaZmiennejStalej = 'wartość zmiennej stałej';

// let numberOne = 14.5;

// const numberTwo = 15;



// console.log(nazwaZmiennej1);

// console.log(nazwaZmiennejStalej);



// nazwaZmiennej1 = 'nowa wartość'

// console.log(nazwaZmiennej1);

// numberOne = 15;

// console.log(numberOne + numberTwo);




// Deklaracja zmiennej:

// let firstName;

// console.log(firstName);

// firstName = 'Jan';

// console.log(firstName);

// inicjalizacja - utworzenie zmiennej i przypisanie wartości

// let lastName = 'Kowalski';

// console.log(lastName);




// Deklarowanie wielu zmiennych

// let name, age, address;

// let userName = 'Wacek', userMail = 'wacek@wp.pl';

// console.log(userName);

// console.log(userMail);




// LISTA SŁÓW ZAREZERWOWANYCH (nie można używać jako nazwy zmiennych)
/*
await
abstract
boolean
byte
break
char
class
case
catch
continue
const
debugger
double
default
delete
do
enum
export
extends
else
final
float
false
finally
for
function
goto
implements
import
int
interface
if
in
instanceof
long
native
new
null
package
private
protected
public
return
short
static
super
synchronized
switch
throws
transient
this
throw
true
try
typeof
volatile
var
void
while
with
yield
*/



// let scope = 100;

/* +1 jest dodawane do elementu */
// scope = scope + 1;
/* +2 jest dodawane do elementu */
// scope = scope + 2;
// console.log(scope);
// console.log(typeof scope);

// let userName = 'Janek';

// userName = 'Wojtek'

// console.log(userName);
// console.log(typeof userName);

// const unChangeAbleNAme = 'Peter'

// console.log(unChangeAbleNAme);
// console.log(typeof unChangeAbleNAme);







// let position = 10;



// position = position + 10;

// position -= 16;

// position *= 4.2;

// position /= 2;

// position += 4;



// console.log(position);



// MODULO - reszta z dzielenia

// console.log(10 % 9);

// console.log(20 % 4);




// Potęga

// console.log(2 ** 5);

// console.log(3 ** 3);



// OPERATORY LOGICZNE

// większe lub równe

// console.log(20 > 40);

// console.log("tekst".length > 3);

// console.log(20 <= 20);



// oeprator porównania

// console.log("tekst" == "tekst2"); // false

// console.log(2 == 2.2);

// console.log(2 == '2');

// console.log(2 === '2');




// Operator różny od

// console.log(100 != 101); // true

// console.log("100" != 100);

// console.log("100" !== 100);




// logiczne zaprzeczenie

// console.log(!true);

// console.log(!(3 - 2));

// console.log(!!true);



// SUMA logiczna ("lub")



// console.log(true || false);

// console.log(false || true);

// console.log(true || true);

// console.log(false || false);



// ILOCZYN logiczny ("i")

// console.log(true && true);

// console.log(false && true);

// console.log(true && false);




// Kolejność jak w matematyce

// console.log(2 + 3 * 5);

// console.log((2 + 3) * (5 - 4));




// Operator warunkowy (trójargumentowy)

// warunek ? wartość jeśli prawdziwy : wartość jeśli fałszywy

// console.log(1 > 2 ? "tak" : "nie");




// const txt = 'Jakiś tekst';

// let score = 12.55;



// własciwość - informacja

// metoda - operacja na tej informacji



// właściwości - zapisujemy po kropce .nazwa

// console.log(txt.length);




// Metody - zapisujemy po kropce nazwa() - wywołanie ()

// console.log(txt.toUpperCase());

// console.log(score.toFixed());

// console.log(txt.indexOf('ś'));




// const newText = txt.toUpperCase();

// console.log(txt);



// const name = "janek"; // new String(name);

// name.length;




// const userName = 'Tomasz Nowak';

// const userName2 = "Artur Woźniak";

// const userName3 = `Jaś Fasola`; // super string




// const firstLetter = userName[0];

// console.log(firstLetter);



// METODY dla typu string

// console.log(userName.toUpperCase());

// console.log(userName.toLowerCase());



// metody i właściwości które warto znać

// console.log(userName.length);

// pobieranie konkretnego znaku

// console.log(userName[2]);

// console.log(userName.charAt(2));



// łączenie typu string

// console.log(userName.concat(" - to fajne imię!"));

// console.log(userName + " To fajne imię za pomocą +");



// Czy dany znak występuje w danym łańcuchu

// console.log(userName.includes('o'));



// Który index ma dany znak

// console.log(userName.indexOf('o'));



// Kopiowanie ciągu znaków

// const repeatString = userName.repeat(5);

// console.log(repeatString);



// Zwracanie fragmentu ciągu znaków

// const sliceWord = userName.slice(1, 3);

// console.log(sliceWord);




// cudzysłowy w środku stringa

// const first = "I'm Kamil";

// const second = 'I\'m \\ Kamil';

// console.log(second);

// const txtEnter = 'tekst\ntekst2';

// console.log(txtEnter);



// Super string - przewaga

// const templateString = `Tekst pierwszy

// Tekst drugi

// Tekst trzeci

// `;

// console.log(templateString);



// konwersja innego typu na typ string

// console.log(String(1000)); // '1000'

// console.log(200..toString());



// niejawna konwersja

// console.log("" + 200); // "200"

// console.log("" + true); // 'true'



// NUMBER



// const integerExample = 100;

// const floatExample = 100.112;




// const newNumber = 123.45;



// zaokrąglenie

// console.log(newNumber.toFixed());

// console.log(newNumber.toFixed(1));



// Wykonanie metody na liczbie (bezpośrednio) wymaga dwóch kropek

// console.log(123..toFixed(2));



// toString - zmaiana na string, ale też zmiana systemu liczbowego

// console.log(newNumber.toString(16));



// Sprawdzenie czy liczba jest całkowita

// console.log(Number.isInteger(floatExample));

// console.log(Number.isInteger(100));



// Konwersja jawna - inny typ w number

// console.log(Number('210')); // 210

// console.log(Number(true));

// console.log(Number(""));

// console.log(Number("cokolwiek"));



// Wykorzystnaie konwersji niejawnej

// console.log("20" * 1);



// paseInt - pzowala nam zmienić string w number

// console.log(parseInt('20', 10));

// console.log(parseInt('100', 2));

// console.log(parseInt('0xff', 16));

// console.log(parseInt("222abc"));

// console.log(parseInt("22.22")); // parseFloat




// Metoda MATH

// console.log(Math.round(200.55)); // zaokrąglenie

// console.log(Math.round(200.4)); // zaokrąglenie

// console.log(Math.floor(200.1)); // ucięcie przcinka / zaokrąglenie ZAWSZE w dół

// console.log(Math.random()); // liczba losowa od 0 do 0.99999



// BOOLEAN



// Funkcja Boolean - zamiana wartości inengo typu na boolean

// console.log(Boolean(0));

// console.log(Boolean(2 >= 2));

// console.log(Boolean('cokolwiek'));

// console.log(Boolean(""));

// console.log(Boolean({}));

// console.log(Boolean(["kotś", 100, false]));




// Wartości która są konwertowane na false:

// ""

// 0

// NaN

// null

// undefined



// let pos = 10;

// pos *= 3;
// console.log(pos);

// pos **= 3;
// console.log(pos);
// console.log(pos > 1000);

// let userName = 'Janek';

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName[2]);
// console.log(userName.indexOf('o'));
// console.log(userName.indexOf('z'));

// let na = userName.slice(1, 2);
// console.log(na);

// console.log(Number('Janek'));
// console.log(parseInt('Janek'));
// console.log(typeof pos);
// // console.log(typeof pos('floatExample'));
// console.log(typeof pos === 'number' ? 'pos has type of number' : 'pos is not a number');


// const condition = 0;




// if (condition) {

//     console.log("Widzisz mnie bo warunek został spełniony");

// }



// const userName = '';

// if (userName) {

//     console.log("Witaj " + userName + "!");

// }



// to samo co powyżej

// if (userName !== "") {

//     console.log("Witaj");

// }




// Instrukcja if else

// const hasTicket = false;

// const moreThan15Years = true;

// const bossFamily = false;



// if (hasTicket && moreThan15Years || bossFamily) {

// console.log("Zapraszamy");

// } else {

// console.log("Przykro mi nie możesz wejść");

// }




// Klauzula else if

// const age = 9;




// Tu sprawdza sięwszystko po kolei - TO 4 OSOBNE INSTRUKCJE:

// if (age <= 9) {

//     console.log("jesteś jeszcze dzieckiem");

// }



// if (age > 9 && age <= 18) {

//     console.log("Jesteś młodzieżą");

// }



// if (age > 18 && age <= 70) {

//     console.log("JEsteś dorosły");

// }



// if (age > 70) {

//     console.log("Jesteś stary");

// }




// Tu po znalezieniu popawnej nie sprawdza dalej - TO JEST JEDNA INSTRUKCJA:

// if (age <= 9) {

//     console.log("Jesteś jeszcze dzieckiem");

// } else if (age <= 18) {

//     console.log("Jesteś młodzieżą");

// } else if (age <= 70) {

//     console.log("Jesteś dorosły");

// } else {

//     console.log("Jesteś stary");

// }




// console.log("----------------------------------------");




// Zagnieżdżony if

// const guestName = "";

// const guestAge = 17;



// if (guestName != "") {

//     if (guestAge > 18) {

//         console.log("Witaj w klubie " + guestName);

//     } else {

//         console.log("No niestesty " + guestName + " nie wejdziesz.");

//     }

// } else {

//     console.log("Nie wiem jak masz na imię, więc nie wchodzisz.s");

// }




// Instrukcja SWITCH

// const dayOfTheWeek = "cześć";



// switch (dayOfTheWeek) {

//     case "poniedziałek":

//         console.log("Dziś jest ponidziałek");

//         break;

//     case "wtorek":

//         console.log("dziś jest wtorek");

//         break;

//     case "środa":

//         console.log("dziś jest środa");

//         break;

//     default:

//         console.log("Nie wiem o co chodzi. Wpisz porpawn dzień tygodnia.");

//         break;

// }




// Operator warunkowy - trójkowy

// a ? b : c;

// const score = 11;

// 20 == "20" && score ? console.log("wykonuję się, bo to prawda") : console.log("Wykonuję się, bo to nieprawda");



// score > 10 ? console.log("jest większy od 10") : console.log("Nie jest większy.");



// let gameResult = 0;

// let killedMonsters = 11;

// let result = killedMonsters > 10 ? 1 : 0;



// console.log(result);



// const playerName = "";

// console.log(`Witaj ${playerName ? playerName : "Nieznajomy graczu."}`);



// 1
// const x = 50;
// const y = 30;

// if (x > y) {
//     let result = x > y;
//     console.log(result, "jest true");
// } else {
//     console.log("nie jest true");
// }


// 2
// let a = 30;
// let b = 40;
// let c = 30;

// if (a == b & a == c & b == c) {
//     console.log(" trojkat utworzyl");
// } else {
//     if (a == b & a == c & b > c) {
//         console.log("trojkat utworzyl rozwarty");
//     }
// }



// ----------------------------------------------------------------------------


/* PODSTAWY:

1. stworzyc 2 zmienne i wypisac ich sume, iloczyn i iloraz => "Iloraz wynosi 0.5, iloczyn wynosi 8, a suma 6"

2. Stworzyc 1 zmienna i wyświetlic w konsoli jej szescian => "Sześcian liczby 3 wynosi 27"



IF:

1. Stworz zmienna x i y. Do x przypisz wartość 50 a do y 30. Za pomoca instrukcji warunkowej if sprawdz czy x jest wiekszy od y i wynik wpypisz w konsoli

2. Utworzyc zmienne a, b i c. Przypisac do niej wartosc, a następnie utworzyć instrukcje sprawdzająca i wypisującą odpowiedź w konsoli czy da się utworzyć trójkąt

3. Do zadania 2 sprawdzić czy trójkąt jest pitagorejski */




// const x = 3;

// const y = 2;



// console.log(`Suma - ${x + y}, iloczyn - ${x * y}, iloraz - ${x / y}`);



// const z = 4;

// console.log(`Szcześcian liczby ${z} wynosi ${z ** 3}`);



// const a = 3;

// const b = 4;

// const c = 5;



// if (a + b > c && a + c > b && b + c > a) {

//     console.log("Da się zbudować trójkąt");

// } else {

//     console.log("Nie da się");

// }





// if (a > b && a > c) {

//     console.log('a jest najdłuższy');

//     if (b * b + c * c == a * a) {

//         console.log("Jest pitargorejski");

//     } else {

//         console.log('nie jest');

//     }

// } else if (b > a && b > c) {

//     console.log('b jest najdłuższy');

//     if (a * a + c * c == b * b) {

//         console.log("Jest pitagorejski");

//     } else { console.log('nie jest') }

// } else {

//     console.log('c jest najdłuższy');

//     if (a * a + b * b == c * c) {

//         console.log('Jest pitagorejski');

//     } else {

//         console.log('nie jest');

//     }

// }


// TABLICE




// const nameList = ['Lubomir', 'Jarosław', 'Anna', 'Magda'];



// const cityList = [];

// cityList[0] = 'Konin';

// cityList[1] = 'Gdańsk';




// const differentValues = ["stirng", 20, {}, ['jeden', 'dwa'], null];

// console.log(differentValues);



// USUWANIE ELEMENTÓW Z TABLICY

// delete nameList[2]; // sprawia, że indeks jest pusty, ale wciąż istnieje

// console.log(nameList);



// Długość tablicy

// const cities = ['Gdańsk', 'Poznań', 'Warszawa', 'Wrocłąw'];

// console.log(cities.length);



// Puste indeksy w tablicy

// const longArray = [];

// longArray.length = 300;

// console.log(longArray);



// Odwołania się do ostatniego elementu tablicy

// console.log(cities[cities.length - 1]);



// Dodanie kolejnego eleemntu do tablicy (jako ostatniego):

// cities[cities.length] = "Tokio";

// console.log(cities);



// Wyczyszczenie tablicy:

// cities.length = 0;

// console.log(cities);



// let example = '';



// Sprawdzanie czy obiekt jest tablicą

// console.log(Array.isArray(example));




// Tworzenie zmiennych w oparciu o zawartość tablicy



// const game = [120.12, 87, "Dobry gracz"];



// let [time, points, name] = game;


// Metody na tablicach



// const italianUsers = ['Giovanni', 'Michaele', 'Angelo', 'Luigi', 'Valentina'];



// console.log(italianUsers);



// PUSH - dodaj element na koniec tablicy

// italianUsers.push('Alessandra');

// console.log(italianUsers);



// UNSHIFT

// italianUsers.unshift('Tomasso');

// console.log(italianUsers);



// POP - Usuń ostatni element tablicy

// italianUsers.pop();

// const deletedUsers = [];

// deletedUsers.push(italianUsers.pop());

//pop zwraca usunięty element, więc możemy to wykorzystać tworząc listę usuniętych użytkowników

// console.log(italianUsers);




// SHIFT - usunięcie pierwszego elemetu - też zwraca usunięty element tak jak POP

// italianUsers.shift()

// console.log(italianUsers);



// PUSH I UNSHIFT - zwracają długość tablicy po dodaniu elementu




// CONCAT - łączenie tablic



// const redColors = ['czerwony', 'ciemny czerwony'];

// const greenColors = ['zielony', 'jasny zielony'];



// Połączenie dwóch tablic

// const redGreenColors = redColors.concat(greenColors);

// Dwie tablicy plus dodatkowa wartość

// const redGreenColors = redColors.concat(greenColors, 'morski');

// console.log(redGreenColors);




// ES6 - spread operator - rozbicie tablicy na pojedyncze elementy ...nazwaTablicy

// console.log([...redColors, ...greenColors, 'morski']);



// const items = ['jeden', 'dwa', 'trzy', 'cztery', 5, 120, 'zielony'];



// METODA SLICE - zwraca nową tablicę, z części tablicy na której jest wykonywana



// Jeden argument - od 3 indeksu do końca tablicy:

// console.log(items.slice(3));



// dwa argumenty - od którego do którego

// console.log(items.slice(2, 4));



// wartość ujemna - wartość ostatnia

// console.log(items.slice(-1));




// SPLICE - usuwa z oryginalnej tablicy - od którego indeksu, ile elementów - splice(2,3) - od drugiego indeksu, 3 elementy.

// items.splice(2, 3)

// items.splice(2); // od drugiego indeksu usuwa wszystko

// items.splice(0) // usuwa wszystko bo od 0 wszystko

// items.splice(3, 1, 'hamster') // usuń od 3 indeks 1 element i zastąp tym co jest na trzecim miejscu.

// items.splice(0, 0, "horse", 'pig', 'monkey')

// Ta metoda też zwsraca usunięte elementy, więc możemy je wykorzystywać w zmiennych.

// console.log(items);




// Metoda SORT - sortowanie tablicy - metoda destrukcyjna

// console.log(italianUsers);

// italianUsers.sort();

// console.log(italianUsers);



// Metoda Indexof - szuka elementu w tablicy i jak znajdzie to zwraca jego indeks, jak nie znajdzie to -1

// console.log(items);

// console.log(items.indexOf('pig'));




// INCLUDES - czy zawiera - zwraca true/false

// console.log(items.includes('pig'));



// Metoda JOIN - tworzy typ string z elementów tablicy

// console.log(items.join()); // oddziela domyślnie przecinkami

// console.log(items.join(' -- ')); // oddziela tym co wpiszemy pomiędzy nawiasy



// REVERSE - destrukcyjna - odwraca kolejność ablicy

// italianUsers.reverse();

// console.log(italianUsers);




// Z typu string tworzenie tablicy - SPLIT - podajemy w niej czym ma oddzielać elementy

// const letters = "Marek Darek Adam Anna Magda Teresa".split('');

// console.log(letters);

// const names = "Marek Darek Adam Anna Magda Teresa".split(' ');

// console.log(names);






// const names = 'Darek Marek Janina';
// const colorList = ['Red ', 'Green ', 'Blue ', 'Orange '];
// const deletedUsers = [];
// colorList.push('Grey');

// console.log(colorList);
// colorList.shift()

// console.log(colorList);

// colorList.sort();

// console.log(colorList);

// colorList.reverse();

// console.log(colorList);
// colorList.splice(1, 2)
// deletedUsers.push(colorList.splice());
// console.log(colorList);


// Utwórz z names tablicę



// 1. Stwórz tablicę z kolorami i dodaj późnbiej kolor na koniec tablicy

// 2. Usuń pierwszy kolor z tablicy

// 3. Posortuj tablicę alfabetycznie

// 4. Odwróć jej kolejność

// 5. Usuń elementy od indeksu 1 do 3 i przypisz je do zmiennej deletedColors



// Pętle



// FOR



/*

    for (inicjalizacje iteratora; warunek; zwiększenie iteratora){

        blok kodu do wykonania

    }

*/




// for (let i = 0; i <= 2; i++) {

//     console.log(`Wyświetlenie ${i}`);

// }

// Krok 1 - inicjalizacja (utworzenie zmiennej i=0 - to wykonuje się TYLKO w kroku 1), Sprawdzenie warunku, wykonanie bloku kodu, zwiększenie iteratora.

// Krok 2 - tutaj nie ma już inicjalizacji (wykonuje się TYLKO RAZ), sprawdzamy od razu warunek, blok kodu, zwiększenie iteratora

// Krok 3 - warunek, blok kodu, zwiększenie iteratroa

// Krok 4 - warunek nie jest spełniony 3<=2 - koniec pętli




// WHILE

/*

while(warunek){

    blok kodu

}

*/

// let number = 0;

// while (number < 10) {

//     number++ // PAMIĘTAJ O TYM BY NIE ZROBIĆ PĘTLI NIESKOŃCZONEJ

//     console.log(number);

// }




// Przykłąd 2 while

// let money = 100;

// while (money >= 8) {

//     console.log(`Mamy jeszcze ${money} zł. To pijemy piwko.`);

//     money -= 8;

// }


// DO WHILE

// do {

//     // To wykona się niezależnie od warunku na wejściu i tyle razy dopóki warunek jest spełniony - minimum raz

//     console.log("działa");

// } while (money > 200) 









// szkielet funkcji

// const nazwaFunkcjiCoRobi = function(){}
// function nazwaFunkcjiCorobi(){}

// const showMessage = function () {
//     console.log("wywołałem funkcję showMessage");
// }

// showMessage();
// console.log("test");


// addNumber(3, 5);

// function addNumber(x, y) {
//     console.log(x + y);
//     return x + y;
// }

// const test = addNumber(3, 5);


// Funkcja strzałkowa:

// const nazwaFunkcjiICorobi = ()=>{}



// const showTextMyArrowFunction = (text) => {
//     console.log(text);
// }

// showTextMyArrowFunction('Testowy tekst');


// const divideBy2 = function (number) {
//     console.log(number / 2);
// }

// const divideBy3 = function (number) {
//     return number / 3;
// }

// divideBy2(2);
// const result = divideBy3(2);

// console.log(result);


// // Funkcja z parametrem
// const showUserName = function (userName) {
//     console.log("Witaj " + userName);
// }

// Argument
// showUserName('Janek');


// Wartości domyślne


// const addTwoNumbers = function (x = 1, y = 1) {
//     console.log(x + y);
// }

// addTwoNumbers();



// function count(x, callback) {
//     return callback(x);
// }

// function addOne(item) {
//     item++;
// console.log(item);
//     return item;
// }


// function subtractOne(number) {
//     number--;
// console.log(number);
// return number;
// }

// const result = count(5, subtractOne);
// console.log(result);



// Przykład callback

// const showClick = function () {
//     console.log("click");
// }

// document.body.addEventListener("click", showClick);

// Kolejny callback

// const showTime = () => {
//     console.log("Minęły 2 sekundy");
// }

// setInterval(showTime,2000);


// Przykłąd
// const usersAge = [20, 30, 21, 17, 67, 97];

// usersAge.forEach((userAge)=> console.log(Wiek użytkownika to ${userAge}))
// usersAge.forEach(function (userAge) {
// console.log(Wiek użytkownika to ${userAge});
// })



// function showInfoAboutUser(age, name, sex) {
//     if (arguments.length === 0) {
//         console.log('Niem żadnych informacji o uzytkowiku');
//     } else if (arguments.length === 1) {
//         console.log(Użytkownik ma ${ age } lat.Nie więcej nie wiemy);
//     } else if (arguments.length === 2) {
//         console.log(Użytkopwnik ma ${ age } lat i ma na imię ${ name }});
// }else {
//     console.log(Użytkownika ma ${ age } lat, na imię ${ name } i jest ${ sex });
// }
// }



// showInfoAboutUser();
// showInfoAboutUser(20)
// showInfoAboutUser(50, 'Marek', 'Mężczyzna')
// const test = ['test', 50, 'test2', {}];
// console.log(...test);


// function showAllArguments(...items) {
//     console.log(items);
// }


// showAllArguments("1", 2, 12, "ab", true)




// const objectExample = {
//     name: "Adam",
//     showName: function () {
//         console.log("Jan");
//     }
// }

// console.log(objectExample.name);
// console.log(objectExample.showName());


//  HOISTING

// console.log(typeNumber);
// console.log(typeString);
// console.log(typeBoolean);
// console.log(tablica);
// console.log(obiekt);
// console.log(funkcja);



// const typeNumber = 20;
// let typeString = "tekst";
// var typeBoolean = false;

// var tablica = [];
// let obiekt = {};
// const funkcja = function(){

// }


// funkcjaNazwana();

// console.log(funkcjaLet);
// console.log(funkcjaConst);
// console.log(funkcjaVar);

// function funkcjaNazwana() {
//     console.log("jestem");
// }


// let funkcjaLet = function () {

// }

// var funkcjaVar = function () {

// }

// const funkcjaConst = function () {
//     console.log("ok");
// }
// // ZAKRES GLOBALNY

// const colorID = 5;
// let userAge = 21;


// console.log(userAge);

// 0

// Zaklres funkcji:
// function test() {
//     let userName = 'Janek';
//     console.log(userName);
// }
// test();


// console.log(userName);


// console.log(Bla bla bla ${ userAge > 20 ? 'Stary' : 'młody'});


// DOM


// Pobiertanie elementów ze strony

// console.log(document);
// console.log(document.body);
// console.log(document.images);


// Metody pobierające jeden element

// const h1 = document.querySelector('h1');
// h1.textContent = 'Test z JS'
// console.log(h1);

// const getById = document.getElementById('test');
// const getByClass = document.getElementsByClassName('test');
// console.log(getById);

// Pobieraniue wielu elementów:
// Pobranie danych do nodeList:
// const p = document.querySelectorAll('p');
// Zamiana na tablioce [...document.querySelectorAll('p')]
console.log(p);

// Pobieranie atrybutów

const h2 = document.querySelector('h2');
console.log(h2);
console.log(h2.getAttribute('class'));
console.log(h2.getAttribute('data-color'));
console.log(h2.getAttribute('id'));


// Zmiana zawartości:
h2.textContent = 'Test h2 z JS <p>test</p>';
h2.innerHTML = 'Test h2 z innerHTML <p>test</p>'

// Modyfikacja elementów DOM

const firstLi = document.querySelector('li:first-child');


firstLi.textContent = 'Nowa zawartość tekstowa';

firstLi.style.fontSize = '30px';
// background-color
firstLi.style.backgroundColor = '#ccc';
firstLi.style.letterSpacing = '5px';


// Dodawanie, odejmowanie i przełączanie klas
firstLi.classList.add('space');
firstLi.classList.remove('space');


// Nadpisaywaści zawartść atrybutów

firstLi.className = "one two";
firstLi.id = "";


// Ustawienie zawartości atrybutów
firstLi.setAttribute('title', 'Uwaga, Ważne!')
firstLi.setAttribute('class', 'sizeX')


// Modyfikowanie wielu elementów:
const liItems = [...document.getElementsByTagName('li')];

console.log(liItems);

// liItems.style.fontSize = "40px"; 

liItems.forEach(function (items) {
    items.style.textDecoration = "underline";
    items.style.fontSize = "40px";
    items.classList.add('red');
})

// Nasłuchiwanie i obsługa zdarzeń

window.addEventListener('dblclick', function () {
    console.log('podwójne kliknięcie');
})


document.body.addEventListener('click', () => console.log("kliknięcie"))


let size = 0;

const showScroll = function () {
    size++;
    document.querySelector('li').style.fontSize = size + "px";
}

window.addEventListener("scroll", showScroll)



// document.querySelector('h1').addEventListener('mousemove',function(){
// this.textContent += "+";
// })


const h1 = document.querySelector('h1');

const addText = function () {
    this.textContent += " 🙂 ";
    h1.classList.toggle("red");
}
h1.addEventListener('click', addText);


// UStawienie nasłuchiwania na wielu elementach

const addClassRed = function () {
    this.classList.add('red');
}

const items = document.querySelectorAll('li');

items.forEach((item) => item.addEventListener('click', addClassRed))


// TWORZENIE I DODAWNAIE ELEMENTÓW DO STRONY
const divElement = document.createElement('div');
divElement.textContent = "Ostatni DIV";
divElement.style.backgroundColor = "red";
document.body.appendChild(divElement);


const ul = document.querySelector('ul');
const liElement = document.createElement('li');
liElement.textContent = "Ostatni li";
ul.appendChild(liElement);