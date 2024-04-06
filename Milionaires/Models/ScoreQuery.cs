using Milionaires.Database.Entities;

namespace Milionaires.Models
{
    public class ScoreQuery
    {
        public List<Score> ListScores { get; set; } = new List<Score>();
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int ItemsFrom {  get; set; }
        public int ItemsTo { get; set; }

        public int TotalCount { get; set; }
        public int TotalPages {  get; set; }

    }

}
