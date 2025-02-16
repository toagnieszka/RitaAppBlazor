using System.Text.Json.Serialization;

namespace RitaAppBlazor.Data.Models
{
    public class Category : ModelBase
    {
        [JsonPropertyName("name")]
        public string Name { get; set; } = "";
    }
}
