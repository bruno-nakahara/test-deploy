import { useEffect, useState } from 'react';
import './style.css';
import { MonthCard } from '..';
import { ConvertMonthToString } from '../../utils/month';
import { useCustomDates } from '../../hooks/useCustomDate';

function Calendar() {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getUTCFullYear()
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getUTCMonth()
  );

  const { initialInsert } = useCustomDates();

  const handleMonthChange = (value: string) => {
    if (value === 'prev') {
      if (selectedMonth === 0) {
        setSelectedYear(selectedYear - 1);
        setSelectedMonth(11);
        return;
      }

      setSelectedMonth(month => month - 1);
      return;
    }

    if (value === 'next') {
      if (selectedMonth === 11) {
        setSelectedYear(selectedYear + 1);
        setSelectedMonth(0);
        return;
      }

      setSelectedMonth(month => month + 1);
      return;
    }
  };

  useEffect(() => {
    const customDates = [
      {
        type: 'block',
        date: '2024-01-01',
      },
      {
        type: 'booked',
        date: '2024-01-02',
      },
    ];

    initialInsert(customDates);
  }, []);

  return (
    <div className="calendar-wrapper">
      <div className="content">
        <div className="title">
          <h2>Calendário {selectedYear}</h2>
        </div>

        <div className="calendar-nav">
          <button onClick={() => handleMonthChange('prev')}>{'<'}</button>
          <p>{ConvertMonthToString(selectedYear, selectedMonth)}</p>
          <button onClick={() => handleMonthChange('next')}>{'>'}</button>
        </div>

        <div className="calendar-content">
          <MonthCard month={selectedMonth} year={selectedYear} />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
