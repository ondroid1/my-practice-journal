using System.Collections.Generic;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.BusinessLogic.Services.Interfaces
{
    public interface IPracticeService
    {
        IEnumerable<PracticeDto> GetPractices();
        PracticeDto GetPractice(int id);
        void UpdatePractice(PracticeDto practiceDto);
        Practice CreatePractice(PracticeDto practiceDto);
        void DeletePractice(int id);
    }
}
