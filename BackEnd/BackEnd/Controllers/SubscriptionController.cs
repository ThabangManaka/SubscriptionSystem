using System.Net;
using BackEnd.Interfaces;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;
[Route("api/[controller]")]
public class SubscriptionController : Controller
{

    private readonly IUnitOfWork uow;
    //private readonly IMapper mapper;

    public SubscriptionController(IUnitOfWork uow)
    {
        this.uow = uow;
      //  this.mapper = mapper;
    }


    [HttpGet("get")]
    public IEnumerable<Subscription> Get()
    {
        try
        {
            return uow.SubscriptionRepository.GetAllSubscription();
        }
        catch (Exception)
        {
            throw;
        }
    }
    [HttpPost("add")]
    public HttpResponseMessage AddSubscription([FromBody] Subscription subscriptions)
    {

        try
        {
            if (ModelState.IsValid)
            {
                uow.SubscriptionRepository.AddSubscription(subscriptions);
                uow.SaveAsync();

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;
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
        catch (Exception)
        {
            throw;
        }

    }

}
