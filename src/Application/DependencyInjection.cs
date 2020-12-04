using MediatR;
using AutoMapper;
using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using Application.Common.Mappings;
using Application.Common.Behaviours;

namespace Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddScoped<HelperMappingProfile2>();
            var serviceProvider = services.BuildServiceProvider();
            var mappingProfile = serviceProvider.GetService<HelperMappingProfile2>().MappingProfile;
            services.AddAutoMapper(x => x.AddProfile(mappingProfile), Assembly.GetExecutingAssembly());

            services.AddMediatR(Assembly.GetExecutingAssembly());
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestPerformanceBehaviour<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));

            return services;
        }
    }
}
