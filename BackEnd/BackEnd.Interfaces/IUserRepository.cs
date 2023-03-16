using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BackEnd.Dtos;
using BackEnd.Models;

namespace BackEnd.Interfaces
{
    public interface IUserRepository
    {

        bool CheckUsersExits(string username);
        Task<User> Authenticate(string userName, string passwordText);
        void Register(UserDto userDto);
        Task<bool> UserAlreadyExists(string userName);
        LoginResDto GetUserDetailsbyCredentials(string username);
    }
}
