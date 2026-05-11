using Microsoft.AspNetCore.Mvc;
using SmartCameraService.Models;

namespace SmartCameraService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CameraController : ControllerBase
    {
        private static readonly SystemInfo _systemInfo = new();
        private static readonly NetworkConfig _networkConfig = new();
        
        [HttpGet("live")]
        public IActionResult GetLiveStatus()
        {
            return Ok(new CameraStatus());
        }

        [HttpGet("events")]
        public IActionResult GetEvents()
        {
            var events = new List<CameraEvent>
            {
                new() { Timestamp = DateTime.Now.AddMinutes(-5), Type = "Motion Detection", Description = "Motion detected in area 1", ThumbnailUrl = "/api/placeholder/160/90" },
                new() { Timestamp = DateTime.Now.AddHours(-1), Type = "Line Crossing", Description = "Line crossing detected", ThumbnailUrl = "/api/placeholder/160/90" },
                new() { Timestamp = DateTime.Now.AddHours(-3), Type = "Intrusion", Description = "Intrusion detected in area 3", ThumbnailUrl = "/api/placeholder/160/90" },
                new() { Timestamp = DateTime.Now.AddHours(-5), Type = "Scene Change", Description = "Scene changed", ThumbnailUrl = "/api/placeholder/160/90" },
                new() { Timestamp = DateTime.Now.AddHours(-8), Type = "Video Loss", Description = "Video connection lost", ThumbnailUrl = "/api/placeholder/160/90" }
            };
            return Ok(events);
        }

        [HttpGet("network/config")]
        public IActionResult GetNetworkConfig()
        {
            return Ok(_networkConfig);
        }

        [HttpGet("system/info")]
        public IActionResult GetSystemInfo()
        {
            return Ok(_systemInfo);
        }

        [HttpPost("ptz/move")]
        public IActionResult MovePTZ([FromBody] dynamic command)
        {
            // Log attempt for honeypot
            Console.WriteLine($"[HONEYPOT] PTZ Move Command Received: {command}");
            return Ok(new { status = "success", message = "Moving camera..." });
        }

        [HttpPost("firmware/update")]
        public IActionResult UpdateFirmware()
        {
            // Honeypot behavior: return a verbose error for certain requests
            return BadRequest(new { 
                error = "Update failed", 
                code = "ERR_X892_BUFFER_OVERFLOW", 
                details = "Stack smashing detected at 0x7ffd92b3c100. Memory dump initiated.",
                vulnerability_hint = "Debug mode active. Accessing console..." 
            });
        }
    }

    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            // Honeypot behavior: weak credentials check
            if (request.Username == "admin" && request.Password == "12345")
            {
                return Ok(new { token = "fake-jwt-token-for-admin", user = "admin", role = "Administrator" });
            }

            // Log failed attempt for T-Pot
            Console.WriteLine($"[HONEYPOT] Failed login attempt: User={request.Username}, Pass={request.Password}");
            
            return Unauthorized(new { message = "Invalid credentials", attempts_left = 2 });
        }
    }
}
