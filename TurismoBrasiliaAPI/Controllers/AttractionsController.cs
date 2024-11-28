using Microsoft.AspNetCore.Mvc;
using TurismoBrasiliaAPI.Models;
using System.Collections.Generic;

namespace TurismoBrasiliaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttractionsController : ControllerBase
    {
        private static readonly List<Attraction> Attractions = new List<Attraction>
        {
            new Attraction("Congresso Nacional", "O coração político do Brasil.", "Praça dos Três Poderes, Brasília", "https://www.df.gov.br/wp-conteudo/uploads/2016/02/pra%C3%A7a-dos-tr%C3%AAs-poderes-ebc.jpg"),
            new Attraction("Palácio da Alvorada", "Residência oficial do Presidente.", "Eixo Monumental, Brasília", "https://upload.wikimedia.org/wikipedia/commons/e/eb/Homologa%C3%A7%C3%A3o_do_tombamento_de_obras_do_Niemeyer_%2834321040524%29.jpg"),
            new Attraction("Catedral de Brasília", "Um dos maiores marcos da arquitetura de Niemeyer.", "Eixo Monumental, Brasília", "https://upload.wikimedia.org/wikipedia/commons/c/cf/Catedral1_Rodrigo_Marfan.jpg"),
            new Attraction("Parque Nacional de Brasília", "Para quem ama natureza e trilhas.", "Brasília", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fa/ba/1c/piscina-menor-mas-suficiente.jpg?w=1200&h=-1&s=1"),
            new Attraction("Memorial JK", "Homenagem ao fundador de Brasília, Juscelino Kubitschek.", "Lago Paranoá, Brasília", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Memorial_J_Kubitschek_Brasilia_2009.jpg/800px-Memorial_J_Kubitschek_Brasilia_2009.jpg")
        };

        // Método GET que retorna as atrações
        [HttpGet]
        public ActionResult<IEnumerable<Attraction>> GetAttractions()
        {
            return Ok(Attractions);
        }

        // Método POST que adiciona uma nova atração
        [HttpPost]
        public ActionResult<Attraction> AddAttraction([FromBody] Attraction newAttraction)
        {
            if (newAttraction == null)
            {
                return BadRequest("Atração inválida.");
            }

            newAttraction.Id = Attractions.Count + 1;  // Gerando um ID simples para a nova atração
            Attractions.Add(newAttraction);  // Adiciona a nova atração na lista

            return CreatedAtAction(nameof(GetAttractions), new { id = newAttraction.Id }, newAttraction);
        }

    }
}
