using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.Interfaces;

public interface IUnitOfWork
{
    IUserRepository UserRepository { get; }
    ISubscriptionRepository SubscriptionRepository { get; }
    Task<bool> SaveAsync();
}
