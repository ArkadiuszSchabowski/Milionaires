namespace Milionaires.Models
{
    public class QuestionAndAnswer
    {
        public string Question { get; set; }
        public string[] Answers { get; set; }
        public int CorrectAnswerIndex { get; set; }

        public QuestionAndAnswer(string question, string[] answers, int index)
        {
            this.Question = question;
            this.Answers = answers;
            this.CorrectAnswerIndex = index;
        }
    }
}
