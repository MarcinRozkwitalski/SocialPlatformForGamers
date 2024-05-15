using Microsoft.AspNetCore.Mvc;
using PlatformService.Data;

namespace PlatformSerivce.Controllers
{
    public class GameController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GameController(AppDbContext context)
        {
            _context = context;
        }
    }
}