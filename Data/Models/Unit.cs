using System.Text.Json.Serialization;

namespace RitaAppBlazor.Data.Models
{
    public class Unit : ModelBase
    {
		[JsonPropertyName("name")]
		public string Name { get; set; }
		[JsonPropertyName("shortName")]
		public string ShortName { get; set; }
	}
}
