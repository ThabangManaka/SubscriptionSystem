using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BackEnd.Interfaces;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repository.Data;

public class SubscriptionRepository : ISubscriptionRepository
{


    private readonly DatabaseContext _context;

    public SubscriptionRepository(DatabaseContext context)
    {
        this._context = context;
    }
    public bool AddSubscription(Subscription subscription)
    {
        _context.Subscriptions.Add(subscription);
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


    public async Task<IEnumerable<Subscription>> GetAllSubscription()
    {

      return await _context.Subscriptions.ToListAsync();
    }
    public async Task<Subscription> FindSubscriptionbyId(int id)
    {
        return await _context.Subscriptions.FindAsync(id);
    }

    public void DeleteSubscription(int subscriptionId)
    {
        var subscription = _context.Subscriptions.Find(subscriptionId);
        _context.Subscriptions.Remove(subscription);
    }
}
