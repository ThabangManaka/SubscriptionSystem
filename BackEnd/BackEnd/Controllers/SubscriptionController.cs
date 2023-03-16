using System.Net;
using AutoMapper;
using BackEnd.Dtos;
using BackEnd.Interfaces;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;
[Route("api/[controller]")]
public class SubscriptionController : Controller
{

    private readonly IUnitOfWork uow;
     private readonly IMapper mapper;

    public SubscriptionController(IUnitOfWork uow, IMapper mapper)
    {
        this.uow = uow;
       this.mapper = mapper;
    }
    
    [HttpGet("get")]
    public async Task<IActionResult> Get()
    {
        var subscriptions = await uow.SubscriptionRepository.GetAllSubscription();
        var subscriptionsDto = mapper.Map<IEnumerable<SubscriptionDto>>(subscriptions);

        return Ok(subscriptionsDto);
    }
    [HttpPost("add")]
    public async Task<IActionResult> AddSubscription([FromBody] SubscriptionDto subscriptionDto)
    {
        var subscription = mapper.Map<Subscription>(subscriptionDto);
        uow.SubscriptionRepository.AddSubscription(subscription);
        await uow.SaveAsync();
        return StatusCode(201);
    }

    [HttpPut("update/{id}")]
    public async Task<IActionResult> UpdateSubscription(int id, SubscriptionDto subscriptionDto)
    {
        if (id  != subscriptionDto.SubscriptionId)
        return BadRequest("Update not allowed");

        var subscriptionFomDb = await uow.SubscriptionRepository.FindSubscriptionbyId(id);

        if (subscriptionFomDb == null)
         return BadRequest("Update not allowed");
        mapper.Map(subscriptionDto, subscriptionFomDb);

        await uow.SaveAsync();
        return StatusCode(200);
    }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteSubscription(int id)
    {
        uow.SubscriptionRepository.DeleteSubscription(id);
        await uow.SaveAsync();
        return Ok(id);
    }

}
