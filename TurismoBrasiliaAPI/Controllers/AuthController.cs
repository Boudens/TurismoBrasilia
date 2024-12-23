using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TurismoBrasiliaAPI.Data;
using TurismoBrasiliaAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace TurismoBrasiliaAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly AppDbContext _context;

        public AuthController(IConfiguration configuration, AppDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            var user = _context.Users.SingleOrDefault(u => u.Username == loginModel.Username);

            if (user == null || user.Password != loginModel.Password)
            {
                return Unauthorized("Usuário ou senha inválidos");
            }

            var token = GenerateJwtToken(user.Username);
            return Ok(new { Message = "Login bem-sucedido!", Token = token });
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterModel registerModel)
        {
            var existingUser = _context.Users.SingleOrDefault(u => u.Username == registerModel.Username);
            if (existingUser != null)
            {
                return BadRequest("Usuário já existe.");
            }

            // Criar um novo usuário
            var newUser = new User
            {
                Username = registerModel.Username,
                Password = registerModel.Password,
                Role = "User"
            };

            _context.Users.Add(newUser);
            _context.SaveChanges();

            return Ok(new { Message = "Usuário registrado com sucesso!" });
        }

        private string GenerateJwtToken(string username)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
