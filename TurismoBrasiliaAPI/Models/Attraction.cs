namespace TurismoBrasiliaAPI.Models
{
    public class Attraction
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string ImageUrl { get; set; }

        public Attraction(string name, string description, string location, string imageUrl)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name)); 
            Description = description ?? throw new ArgumentNullException(nameof(description)); 
            Location = location ?? throw new ArgumentNullException(nameof(location));
            ImageUrl = imageUrl ?? throw new ArgumentNullException(nameof(imageUrl));
        }
    }
}