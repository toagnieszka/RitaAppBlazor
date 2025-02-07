using System.Text.Json.Serialization;

namespace RitaAppBlazor.Data.Models
{
    public class Product : ModelBase
    {
		[JsonPropertyName("productCard")]
		public ProductCard ProductCard { get; set; }
		[JsonPropertyName("productCardId")]
		public int ProductCardId { get; set; }
		[JsonPropertyName("magazine")]
		public Magazine Magazine { get; set; }
		[JsonPropertyName("magazineId")]
		public int MagazineId { get; set; }
		[JsonPropertyName("amount")]
		public float Amount { get; set; }
		[JsonPropertyName("status")]
		public Status Status { get; set; }
		[JsonPropertyName("expireDate")]
		public DateTime ExpireDate { get; set; }
		[JsonPropertyName("comment")]
		public string Comment { get; set; }
		[JsonPropertyName("loanDate")]
		public DateTime LoanDate { get; set; }
		[JsonPropertyName("lender")]
		public string Lender { get; set; }
		[JsonPropertyName("borrower")]
		public string Borrower { get; set; }
    }
}
