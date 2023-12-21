using Milionaires.Models;

namespace Milionaires.Service
{
    public interface IQuestionService
    {
        List<QuestionAndAnswer> GetAll();
        void InitializeQuestions();
    }
    public class QuestionService : IQuestionService
    {
        private List<QuestionAndAnswer> _questions = new List<QuestionAndAnswer>();

        public void InitializeQuestions()
        {
            string question1 = "1. Jak wygląda operator inkrementacji?";
            string[] question1Answers = new string[4] { "A. ==", "B. ++", "C. --", "D. =" };

            string question2 = "1. Jak wygląda operator dekrementacji?";
            string[] question2Answers = new string[4] { "A. ==", "B. --", "C. ++", "D. =" };

            string question3 = "2. Jak wygląda operator przypisania?";
            string[] question3Answers = new string[4] { "A. ==", "B. --", "C. =", "D. ++" };

            string question4 = "2. Klasa zapieczętowana, po której nie można dziedziczyć to?";
            string[] question4Answers = new string[4] { "A. Static", "B. Abstract", "C. Sealed", "D. Dynamic" };

            string question5 = "3. Który typ nie jest typem referencyjnym?";
            string[] question5Answers = new string[4] { "A. Boolean", "B. Lista", "C. Tablica", "D. Kolejka" };

            string question6 = "3. Metoda, która służy do usuwania pustych znaków na początku i końcu tekstu to?";
            string[] question6Answers = new string[4] { "A. Trim", "B. Reverse", "C. Concat", "D. Replace" };

            string question7 = "4. Jakie jest domyślne zachowanie modyfikatora dostępu w C# dla elementów klasy?";
            string[] question7Answers = new string[4] { "A. Internal", "B. Protected", "C. Public", "D. Private" };

            string question8 = "4. Która instrukcja jest używana do obsługi wyjątków w C#?";
            string[] question8Answers = new string[4] { "A. if-else", "B. for", "C. switch", "D. try-catch" };

            string question9 = "5. Który modyfikator dostępu w C# oznacza, że element jest dostępny tylko w obrębie tego samego namespace?";
            string[] question9Answers = new string[4] { "A. Internal", "B. Private", "C. Protected", "D. Public" };

            string question10 = "5. Co to jest delegat w C#?";
            string[] question10Answers = new string[4] { "A. Typ reprezentujący wskaźnik do metody", "B. Typ reprezentujący listę elementów", "C. Typ reprezentujący wyjatek", "D. Typ reprezentujący klasę abstrakcyjną" };


            string question11 = "6. Jakie jest zastosowanie kolekcji `HashSet` w języku C#?";
            string[] question11Answers = new string[4] { "A. Przechowywanie unikalnych elementów", "B. Implementacja stosu danych", "C. Przechowywanie elementów w kolejności wstawiania", "D. Przechowywanie elementów w porządku alfabetycznym" };


            string question12 = "6. W języku C#, co oznacza termin 'boxing'?";
            string[] question12Answers = new string[4] { "A. Proces konwertowania typu wartościowego na typ referencyjny", "B. Tworzenie kopii obiektu", "C. Kompilator C#", "D. Optymalizacja kodu" };

            string question13 = "7. Który z poniższych operatorów w C# służy do tworzenia nowych obiektów?";
            string[] question13Answers = new string[4] { "A. +", "B. -", "C. new", "D. /" };

            string question14 = "7. Co oznacza słowo kluczowe 'base' w języku C#?";
            string[] question14Answers = new string[4] { "A. Deklaracje nowej klasy bazowej", "B. Tworzenie nowej instancji obiektu", "C. Wywołanie metody bazowej w klasie pochodnej", "D. Przekazanie wartości do konstruktora" };

            string question15 = "8. Jaki jest wynik działania operatora 'is' w C#?";
            string[] question15Answers = new string[4] { "A. Porównuje dwie liczby całkowite", "B. Sprawdza, czy obiekt jest instancją określonej klasy lub interfejsu", "C. Wywołuje wyjątek w przypadku błędu", "D. Oznacza przypisanie do zmiennej" };

            string question16 = "8. Jakie jest zastosowanie interfejsów w języku C#?";
            string[] question16Answers = new string[4] { "A. Dziedziczenie wielokrotne", "B. Wymaganie dla klas implementujących interfejs", "C. Implementacja wielu klas bazowych", "D. Tworzenie abstrakcyjnych klas" };

            string question17 = "9. Co to jest LINQ w języku C#?";
            string[] question17Answers = new string[4] { "A. Biblioteka do pracy z plikami XML", "B. Framework do tworzenia interfejsów użytkownika", "C. Technologia do zarządzania pamięcią", "D. Język zapytań do baz danych" };

            string question18 = "9. Jakie jest zastosowanie modyfikatora 'static' w języku C#?";
            string[] question18Answers = new string[4] { "A. Tworzenie instancji klasy", "B. Określanie dostępu do elementów klasy z innych przestrzeni nazw", "C. Zmniejszanie rozmiaru plików wykonywalnych", "D. Tworzenie elementów, które nie wymagają instancji klasy", };

            string question19 = "10. Jakie jest zastosowanie słowa kluczowego 'async' w języku C#?";
            string[] question19Answers = new string[4] { "A. Określanie klas abstrakcyjnych", "B. Określanie klasy zapieczętowanej", "C. Tworzenie asynchronicznych metod", "D. Tworzenie interfejsów" };

            string question20 = "10. Jakie jest zastosowanie słowa kluczowego 'using' w języku C#?";
            string[] question20Answers = new string[4] { "A. Tworzenie pętli", "B. Określanie dostępu do elementów klasy", "C. Importowanie przestrzeni nazw", "D. Tworzenie klas generycznych" };

            {
                _questions.Add(new QuestionAndAnswer(question1, question1Answers, 1));
                _questions.Add(new QuestionAndAnswer(question2, question2Answers, 1));
                _questions.Add(new QuestionAndAnswer(question3, question3Answers, 2));
                _questions.Add(new QuestionAndAnswer(question4, question4Answers, 2));
                _questions.Add(new QuestionAndAnswer(question5, question5Answers, 0));
                _questions.Add(new QuestionAndAnswer(question6, question6Answers, 0));
                _questions.Add(new QuestionAndAnswer(question7, question7Answers, 3));
                _questions.Add(new QuestionAndAnswer(question8, question8Answers, 3));
                _questions.Add(new QuestionAndAnswer(question9, question9Answers, 0));
                _questions.Add(new QuestionAndAnswer(question10, question10Answers, 0));
                _questions.Add(new QuestionAndAnswer(question11, question11Answers, 0));
                _questions.Add(new QuestionAndAnswer(question12, question12Answers, 0));
                _questions.Add(new QuestionAndAnswer(question13, question13Answers, 2));
                _questions.Add(new QuestionAndAnswer(question14, question14Answers, 2));
                _questions.Add(new QuestionAndAnswer(question15, question15Answers, 1));
                _questions.Add(new QuestionAndAnswer(question16, question16Answers, 1));
                _questions.Add(new QuestionAndAnswer(question17, question17Answers, 3));
                _questions.Add(new QuestionAndAnswer(question18, question18Answers, 3));
                _questions.Add(new QuestionAndAnswer(question19, question19Answers, 2));
                _questions.Add(new QuestionAndAnswer(question20, question20Answers, 2));
            };
        }

        public List<QuestionAndAnswer> GetAll()
        {
            return _questions;
        }
    }
}
