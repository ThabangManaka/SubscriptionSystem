using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BackEnd.Interfaces;
using BackEnd.Models;

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
    public List<Subscription> GetAllSubscription()
    {
        var result = (from subscription in _context.Subscriptions
                      select subscription).ToList();

        return result;
    }
    public List<Subscription> GetAllSubscriptionById(int subscriptionnId)
    {
        var result = (from subscription in _context.Subscriptions
                      where subscription.SubscriptionId == subscriptionnId
                      select subscription).ToList();

        return result;
    }
}
