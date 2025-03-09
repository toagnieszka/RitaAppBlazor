using System.Text.Json.Serialization;

namespace RitaAppBlazor.Data.Models
{
	public class CreateProductCard
	{
		[JsonPropertyName("id")]
		public int Id { get; set; }
		[JsonPropertyName("name")]
		public string Name { get; set; } = "";
		[JsonPropertyName("unitId")]
		public int UnitId { get; set; } = 0;
		[JsonPropertyName("categoryIds")]
		public List<int>? CategoryIds { get; set; } = new List<int>();
	}
}
