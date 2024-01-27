using Milionaires.Database.Entities;

namespace Milionaires.Models
{
    public class ScoreQuery
    {
        public List<Score> ListScores { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int ItemsFrom {  get; set; }
        public int ItemsTo { get; set; }

        public int TotalCount { get; set; }
        public int TotalPages {  get; set; }

        public ScoreQuery(ScoreDto scoreDto)
        {
            ListScores = new List<Score>();
            PageNumber = scoreDto.PageNumber;
            PageSize = scoreDto.PageSize;
            ItemsFrom = 0;
            ItemsTo = 0;
            TotalCount = 0;
            TotalPages = 0;
        }
    }

}
