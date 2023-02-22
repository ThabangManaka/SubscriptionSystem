using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BackEnd.Interfaces;
using BackEnd.Repository.Data;

namespace BackEnd.Repository;

public class UnitOfWork : IUnitOfWork
{
    private readonly DatabaseContext _context;

    public UnitOfWork(DatabaseContext context)
    {
        _context = context;
    }
    public IUserRepository UserRepository => new UserRepository(_context);
    public ISubscriptionRepository SubscriptionRepository => new SubscriptionRepository(_context);

    public async Task<bool> SaveAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}
