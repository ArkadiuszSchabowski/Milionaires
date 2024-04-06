using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Milionaires.Database;
using Milionaires.Database.Entities;
using Milionaires.Exceptions;
using Milionaires.Models;

namespace Milionaires.Service
{
    public interface IGameService
    {
        Score CreateRecord(Score score);
        ScoreQuery GetAllScores(ScoreDto scoreDto);
        List<Question> CreateQuestions();
    }

    public class GameService : IGameService
    {
        private readonly MyDbContext _context;

        public GameService(MyDbContext context)
        {
            _context = context;
           
        }
        public List<Question> CreateQuestions()
        {
            List<Question> questions = new List<Question>
            {
                new Question("Jak wygląda operator inkrementacji?", new[] { "A. ==", "B. ++", "C. --", "D. =" }, 1, "Operator inkrementacji '++' zwiększa wartość zmiennej o 1.", 1),
                new Question("Jak wygląda operator dekrementacji?", new[] { "A. ==", "B. --", "C. ++", "D. =" }, 1, "Operator dekrementacji '--' zmniejsza wartość zmiennej o 1.", 1),
                new Question("Jak wygląda operator przypisania?", new[] { "A. ==", "B. --", "C. =", "D. ++" }, 2, "Operator przypisania '=' służy do przypisywania wartości jednej zmiennej do drugiej.", 2),
                new Question("Klasa zapieczętowana, po której nie można dziedziczyć to?", new[] { "A. Static", "B. Abstract", "C. Sealed", "D. Dynamic" }, 2, "Klasa zapieczętowana (sealed) nie może być dziedziczona.", 2),
                new Question("Który typ nie jest typem referencyjnym?", new[] { "A. Boolean", "B. Lista", "C. Tablica", "D. Kolejka" }, 0, "Typ Boolean jest typem wartościowym (value type), a nie referencyjnym (reference type).", 3),
                new Question("Metoda, która służy do usuwania pustych znaków na początku i końcu tekstu to?", new[] { "A. Trim", "B. Reverse", "C. Concat", "D. Replace" }, 0, "Metoda Trim usuwa puste znaki na początku i końcu tekstu.", 3),
                new Question("Jakie jest domyślne zachowanie modyfikatora dostępu w C# dla elementów klasy?", new[] { "A. Internal", "B. Protected", "C. Public", "D. Private" }, 3, "Domyślnie modyfikator dostępu dla elementów klasy to 'private'.", 4),
                new Question("Która instrukcja jest używana do obsługi wyjątków w C#?", new[] { "A. if-else", "B. for", "C. switch", "D. try-catch" }, 3, "Instrukcja try-catch służy do obsługi wyjątków.", 4),
                new Question("Który modyfikator dostępu w C# oznacza, że element jest dostępny tylko w obrębie tego samego namespace?", new[] { "A. Internal", "B. Private", "C. Protected", "D. Public" }, 0, "Modyfikator dostępu 'internal' oznacza dostęp tylko w obrębie tego samego namespace.", 5),
                new Question("Co to jest delegat w C#?", new[] { "A. Typ reprezentujący wskaźnik do metody", "B. Typ reprezentujący listę elementów", "C. Typ reprezentujący wyjątek", "D. Typ reprezentujący klasę abstrakcyjną" }, 0, "Delegat to typ reprezentujący wskaźnik do metody.", 5),
                new Question("Jakie jest zastosowanie kolekcji `HashSet` w języku C#?", new[] { "A. Przechowywanie unikalnych elementów", "B. Implementacja stosu danych", "C. Przechowywanie elementów w kolejności wstawiania", "D. Przechowywanie elementów w porządku alfabetycznym" }, 0, "HashSet przechowuje unikalne elementy.", 6),
                new Question("W języku C#, co oznacza termin 'boxing'?", new[] { "A. Proces konwertowania typu wartościowego na typ referencyjny", "B. Tworzenie kopii obiektu", "C. Kompilator C#", "D. Optymalizacja kodu" }, 0, "Boxing to proces konwertowania typu wartościowego na typ referencyjny.", 6),
                new Question("Który z poniższych operatorów w C# służy do tworzenia nowych obiektów?", new[] { "A. +", "B. -", "C. new", "D. /" }, 2, "Operator 'new' służy do tworzenia nowych obiektów.", 7),
                new Question("Co oznacza słowo kluczowe 'base' w języku C#?", new[] { "A. Deklaracje nowej klasy bazowej", "B. Tworzenie nowej instancji obiektu", "C. Wywołanie metody bazowej w klasie pochodnej", "D. Przekazanie wartości do konstruktora" }, 2, "Słowo kluczowe 'base' używane jest do wywołania metody bazowej w klasie pochodnej.", 7),
                new Question("Jaki jest wynik działania operatora 'is' w C#?", new[] { "A. Porównuje dwie liczby całkowite", "B. Sprawdza, czy obiekt jest instancją określonej klasy lub interfejsu", "C. Wywołuje wyjątek w przypadku błędu", "D. Oznacza przypisanie do zmiennej" }, 1, "Operator 'is' sprawdza, czy obiekt jest instancją określonej klasy lub interfejsu.", 8),
                new Question("Jakie jest zastosowanie interfejsów w języku C#?", new[] { "A. Dziedziczenie wielokrotne", "B. Wymaganie dla klas implementujących interfejs", "C. Implementacja wielu klas bazowych", "D. Tworzenie abstrakcyjnych klas" }, 1, "Interfejsy wymagają, aby klasy implementowały określone metody.", 8),
                new Question("Co to jest LINQ w języku C#?", new[] { "A. Biblioteka do pracy z plikami XML", "B. Framework do tworzenia interfejsów użytkownika", "C. Technologia do zarządzania pamięcią", "D. Język zapytań do baz danych" }, 3, "LINQ to język zapytań do baz danych w języku C#.", 9),
                new Question("Jakie jest zastosowanie modyfikatora 'static' w języku C#?", new[] { "A. Tworzenie instancji klasy", "B. Określanie dostępu do elementów klasy z innych przestrzeni nazw", "C. Zmniejszanie rozmiaru plików wykonywalnych", "D. Tworzenie elementów, które nie wymagają instancji klasy" }, 3, "Modyfikator 'static' oznacza, że element należy do klasy, a nie do instancji klasy.", 9),
                new Question("Jakie jest zastosowanie słowa kluczowego 'async' w języku C#?", new[] { "A. Określanie klas abstrakcyjnych", "B. Określanie klasy zapieczętowanej", "C. Tworzenie asynchronicznych metod", "D. Tworzenie interfejsów" }, 2, "Słowo kluczowe 'async' oznacza, że metoda jest asynchroniczna.", 10),
                new Question("Jakie jest zastosowanie słowa kluczowego 'using' w języku C#?", new[] { "A. Tworzenie pętli", "B. Określanie dostępu do elementów klasy", "C. Importowanie przestrzeni nazw", "D. Tworzenie klas generycznych" }, 2, "Słowo kluczowe 'using' jest używane do importowania przestrzeni nazw.", 10),
            };
            return questions;

        }

        public Score CreateRecord(Score score)
        {
            if(score.Name == "")
            {
                score.Name = "Anonim";
            }

            if(score.Name.Length > 25)
            {
                throw new BadRequestException("Twój nick jest za długi - operacja zapisu nie powiodła się!");
            }
            if(score.Result != 500 && score.Result != 2000 && score.Result != 5000 && score.Result != 10000 && score.Result != 40000 && score.Result != 75000 && score.Result != 150000 && score.Result != 250000 && score.Result != 500000 && score.Result != 1000000)
            {
                throw new BadRequestException("Wprowadzony wynik nie jest prawidłowy. Dozwolone wartości to: 500, 2000, 5000, 10000, 40000, 75000, 150000, 250000, 500000, 1000000.");
            }
            score.Date = DateTime.Now;
            _context.Scores.Add(score);
            _context.SaveChanges();
            return score;
        }

        public ScoreQuery GetAllScores(ScoreDto scoreDto)
        {
            if(scoreDto.PageNumber < 1)
            {
                throw new BadRequestException("Numer strony nie może być mniejszy niż jeden");
            }
            if(scoreDto.PageSize < 1 || scoreDto.PageSize > 100) 
            {
                throw new BadRequestException("Liczba przeglądanych wyników musi mieścić się w zakresie 1-100");
            }

            List<Score> baseQuery = _context.Scores.ToList();

            List<Score> scores = _context.Scores
                .OrderByDescending(x => x.Result)
                .Skip(scoreDto.PageSize * (scoreDto.PageNumber - 1))
                .Take(scoreDto.PageSize)
                .ToList();

            int totalCount = baseQuery.Count();
            int totalPages = totalCount / scoreDto.PageSize;

            var query = new ScoreQuery();

            query.PageSize = scoreDto.PageSize;
            query.PageNumber = scoreDto.PageNumber;
            query.ListScores = scores;
            query.TotalCount = totalCount;
            query.TotalPages = totalPages;
            query.ItemsFrom = scoreDto.PageSize * (scoreDto.PageNumber - 1) + 1;
            query.ItemsTo = query.ItemsFrom + scoreDto.PageSize - 1;

            return query;
        }
    }
}
