using System.Net;
using BackEnd.Dtos;
using BackEnd.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;

[Route("api/[controller]")]
public class UserController : Controller
{
    private readonly IUnitOfWork uow;
    /// private readonly IMapper mapper;

    public UserController(IUnitOfWork uow)
    {
        this.uow = uow;
        //this.mapper = mapper;
    }
    [HttpPost("register")]
    public HttpResponseMessage Post([FromBody] UserDto usersDto)
    {
        if (ModelState.IsValid)
        {
            if (uow.UserRepository.CheckUsersExits(usersDto.UserName))
            {
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.Conflict
                };
                return response;

            }
            else
            {

                uow.UserRepository.Register(usersDto);

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;

            }

        }
        else
        {
            var response = new HttpResponseMessage()
            {

                StatusCode = HttpStatusCode.BadRequest
            };

            return response;
        }
    }


    [HttpPost("registers")]
    public async Task<IActionResult> Registers([FromBody] UserDto usersDto)
    {
        uow.UserRepository.Register(usersDto);
        await uow.SaveAsync();
        return StatusCode(201);
    }
}
