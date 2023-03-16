using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BackEnd.Models;

namespace BackEnd.Interfaces;

public interface ISubscriptionRepository
{
    bool AddSubscription(Subscription subscription);
    Task<IEnumerable<Subscription>> GetAllSubscription();
    Task<Subscription> FindSubscriptionbyId(int id);
    void DeleteSubscription(int subscriptionId);
 
}
