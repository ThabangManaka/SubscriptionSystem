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
    List<Subscription> GetAllSubscription();
    List<Subscription> GetAllSubscriptionById(int subscriptionnId);
}
