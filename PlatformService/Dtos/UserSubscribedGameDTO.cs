namespace PlatformSerivce.Models
{
    public class UserSubscribedGameDTO
    {
        public int UserId { get; set; }
        public int GameId { get; set; }
        public bool Subscription { get; set; }
    }
}