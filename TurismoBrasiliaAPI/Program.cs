using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using TurismoBrasiliaAPI.Data;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Configuração do banco de dados com Entity Framework e SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Configuração de CORS para permitir requisições de qualquer origem
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()   // Permite qualquer origem (modifique conforme necessário)
              .AllowAnyMethod()   // Permite qualquer método HTTP (GET, POST, etc.)
              .AllowAnyHeader();  // Permite qualquer cabeçalho
    });
});

// Configuração da autenticação JWT
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,        // Valida o emissor do token
        ValidateAudience = true,      // Valida o público-alvo do token
        ValidateLifetime = true,      // Valida o tempo de vida do token
        ValidateIssuerSigningKey = true, // Valida a chave de assinatura do token
        ValidIssuer = builder.Configuration["Jwt:Issuer"],  // Emissor válido
        ValidAudience = builder.Configuration["Jwt:Audience"], // Público válido
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]))  // Chave de assinatura
    };
});

// Configuração para suportar controllers e API REST
builder.Services.AddControllers();

// Adiciona suporte para Swagger (opcional para documentação da API)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Condicional para usar o Swagger no ambiente de desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Habilitar CORS
app.UseCors("AllowAll");

// Middleware para suportar HTTPS e autenticação
app.UseHttpsRedirection();

app.UseAuthentication(); // Autenticação via JWT
app.UseAuthorization();  // Autorização baseada nas credenciais fornecidas

// Configura o mapeamento das controllers
app.MapControllers();

// Inicia a aplicação
app.Run();
