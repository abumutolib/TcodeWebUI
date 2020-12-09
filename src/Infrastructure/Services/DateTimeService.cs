using System;
using Application.Common.Interfaces;

namespace Infrastructure.Services
{
    class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
