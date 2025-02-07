using System.Text.Json.Serialization;

namespace RitaAppBlazor.Data.Models
{
    public class ProductCard : ModelBase
    {
		[JsonPropertyName("name")]
		public string Name { get; set; }
		[JsonPropertyName("categories")]
		public List<Category> Categories { get; set; }
		[JsonPropertyName("categoryId")]
		public int CategoryId { get; set; }
		[JsonPropertyName("unit")]
		public Unit Unit { get; set; }
		[JsonPropertyName("unitId")]
		public int UnitId { get; set; }
    }
}
