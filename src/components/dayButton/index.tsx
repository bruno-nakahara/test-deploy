import { useEffect, useState } from 'react';
import './style.css';
import { useCustomDates } from '../../hooks/useCustomDate';
import { MinTwoDigits } from '../../utils/month';

type Props = {
  day: number;
  month: number;
  year: number;
};

function DayButton({ year, month, day }: Props) {
  const { customDates, handleCustomDates } = useCustomDates();
  const [dayState, setDayState] = useState('');

  const handleClickDate = () => {
    handleCustomDates({ year, month, newDay: day });
  };

  useEffect(() => {
    const foundDate = customDates.find(
      date =>
        date.date === `${year}-${MinTwoDigits(month + 1)}-${MinTwoDigits(day)}`
    );

    if (foundDate) {
      setDayState(foundDate.type);
    } else {
      setDayState('');
    }
  }, [month, day, customDates]);

  return (
    <button
      className={`day-button ${dayState}`}
      disabled={dayState === 'block'}
      onClick={handleClickDate}
    >
      {day.toString()}
    </button>
  );
}

export default DayButton;
