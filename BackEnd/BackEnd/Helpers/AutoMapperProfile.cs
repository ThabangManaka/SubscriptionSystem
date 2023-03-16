using AutoMapper;
using BackEnd.Dtos;
using BackEnd.Models;

namespace BackEnd.Helpers;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<User, UserDto>().ReverseMap(); ;
        CreateMap<Subscription, SubscriptionDto>().ReverseMap();

        CreateMap<SubscriptionDto, Subscription>().ReverseMap();
        CreateMap<Subscription, SubscriptionDto>()
            .ForMember(d => d.Name, opt => opt.MapFrom(src => src.Name))
            .ForMember(d => d.Description, opt => opt.MapFrom(src => src.Description))
            .ForMember(d => d.Price, opt => opt.MapFrom(src => src.Price));


    }
}
