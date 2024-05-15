namespace PlatformSerivce.Models
{
    public class UserSubscribedGame
    {
        public int UserId { get; set; }
        public int GameId { get; set; }
        public bool Subscription { get; set; }
    }
}