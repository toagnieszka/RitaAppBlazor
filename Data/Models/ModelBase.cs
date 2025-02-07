using System.Text.Json.Serialization;

namespace RitaAppBlazor.Data.Models
{
    public class ModelBase
    {
		[JsonPropertyName("id")]
		public int Id { get; set; }
		[JsonPropertyName("createdDate")]
		public DateTime CreatedDate { get; set; }
    }
}
