using System.Text.Json.Serialization;

namespace RitaAppBlazor.Data.Models
{
    public class Magazine : ModelBase
    {
		[JsonPropertyName("name")]
		public string Name { get; set; }
		[JsonPropertyName("location")]
		public string Location { get; set; }
    }
}
