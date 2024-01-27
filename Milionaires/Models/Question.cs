namespace Milionaires.Models
{
    public class Question
    {
        public string QuestionText { get; set; }
        public string[] Answers { get; set; }
        public int CorrectAnswerIndex { get; set; }
        public string ExplainAnswer { get; set; }
        public int Difficulty { get; set; }

        public Question(string question, string[] answers, int index, string explainAnswer, int difficulty)
        {
            this.QuestionText = question;
            this.Answers = answers;
            this.CorrectAnswerIndex = index;
            this.ExplainAnswer = explainAnswer;
            this.Difficulty = difficulty;
        }
    }
}
