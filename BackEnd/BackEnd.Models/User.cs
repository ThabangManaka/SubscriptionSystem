using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.Models
{

    [Table("Users")]
    public class User
    {

        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }

        public string Email { get; set; }

        [Required]
        public byte[] Password { get; set; }

        public byte[] PasswordKey { get; set; }

        public DateTime? CreatedDate { get; set; }
        public bool Status { get; set; }
    }
}