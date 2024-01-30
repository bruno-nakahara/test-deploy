import './style.css';
import { DayButton } from '..';
import { GetMonthDays } from '../../utils/month';
import { useEffect, useState } from 'react';

type Props = {
  year: number;
  month: number;
};

function MonthCard({ month, year }: Props) {
  const [daysOfTheMonth, setDaysOfTheMonth] = useState<number[]>([]);
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  useEffect(() => {
    const days = GetMonthDays(year, month + 1);

    setDaysOfTheMonth(days);
  }, [month, year]);

  return (
    <div className="card">
      <div className="calendar-layout week-days">
        {weekDays.map((value, index) => (
          <div className="week-day" key={index}>
            {value}
          </div>
        ))}
      </div>

      <div className="calendar-layout">
        {daysOfTheMonth.map((day, index) => (
          <div key={index}>
            <DayButton day={day} month={month} year={year} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthCard;
