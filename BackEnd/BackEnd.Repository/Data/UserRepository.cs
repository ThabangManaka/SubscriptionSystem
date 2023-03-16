using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using BackEnd.Dtos;
using BackEnd.Interfaces;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repository.Data;

public class UserRepository : IUserRepository
{
    private readonly DatabaseContext _context;
    public UserRepository(DatabaseContext context)
    {
        this._context = context;
    }
    public bool CheckUsersExits(string username)
    {
        var result = (from user in _context.Users
                      where user.UserName == username
                      select user).Count();

        return result > 0 ? true : false;
    }

    public async Task<User> Authenticate(string userName, string passwordText)
    {

        var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == userName);

        if (user == null || user.PasswordKey == null)
            return null;

        if (!MatchPasswordHash(passwordText, user.Password, user.PasswordKey))
            return null;

        return user;

    }

    private bool MatchPasswordHash(string passwordText, byte[] password, byte[] passwordKey)
    {
        using (var hmac = new HMACSHA512(passwordKey))
        {
            var passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(passwordText));

            for (int i = 0; i < passwordHash.Length; i++)
            {
                if (passwordHash[i] != password[i])
                    return false;
            }

            return true;
        }
    }

    public void Register(UserDto userDto)
    {
        byte[] passwordHash, passwordKey;
        using (var hmac = new HMACSHA512())
        {
            passwordKey = hmac.Key;
            passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDto.Password));
        }

        User user = new User();

        user.UserName = userDto.UserName;
        user.Email = userDto.Email;
        user.Password = passwordHash;
        user.PasswordKey = passwordKey;
        user.Status = userDto.Status;
        user.CreatedDate = DateTime.Now;

        _context.Users.Add(user);

    }
    public bool InsertUsers(User user)
    {
        _context.Users.Add(user);
        var result = _context.SaveChanges();
        if (result > 0)
        {
            return true;
        }
        else
        {
            return false;
        }


    }
    public async Task<bool> UserAlreadyExists(string userName)
    {
        return await _context.Users.AnyAsync(x => x.UserName == userName);
    }

    public LoginResDto GetUserDetailsbyCredentials(string username)
    {
        try
        {
            var result = (from user in _context.Users
                              //join userinrole in _context.UsersInRoles on user.UserId equals userinrole.UserId
                          where user.UserName == username

                          select new LoginResDto
                          {
                              UserId = user.UserId,
                              UserName = user.UserName
                          }).SingleOrDefault();

            return result;
        }
        catch (Exception)
        {
            throw;
        }
    }
}
