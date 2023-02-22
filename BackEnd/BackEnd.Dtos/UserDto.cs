using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.Dtos
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public string PasswordKey { get; set; }

        public DateTime? CreatedDate { get; set; }
        public bool Status { get; set; }
    }
}
