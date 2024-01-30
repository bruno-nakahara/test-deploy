import { createContext, ReactNode, useContext, useState } from 'react';
import { CustomDate } from '../types/date';
import { minTwoDigits } from '../utils/month';

interface CustomDatesProviderProps {
  children: ReactNode;
}

interface CustomDatesContextData {
  customDates: CustomDate[];
  handleCustomDates: (newDate: handleCustomDatesProps) => void;
  initialInsert: (values: CustomDate[]) => void;
}

type handleCustomDatesProps = {
  newDay: number;
  month: number;
  year: number;
};

const CustomDatesContext = createContext<CustomDatesContextData>(
  {} as CustomDatesContextData
);

export function CustomDatesProvider({ children }: CustomDatesProviderProps) {
  const [customDates, setCustomDates] = useState<CustomDate[]>([]);

  function handleCustomDates({ newDay, month, year }: handleCustomDatesProps) {
    const newDate = `${year}-${minTwoDigits(month + 1)}-${minTwoDigits(
      newDay
    )}`;
    const foundDate = customDates.find(date => date.date === newDate);
    console.log('foundDate', foundDate);

    if (foundDate) {
      const filteredDates = customDates.filter(date => date.date !== newDate);

      setCustomDates([...filteredDates]);

      return;
    }

    setCustomDates([
      ...customDates,
      {
        date: newDate,
        type: 'booked',
      },
    ]);
  }

  function initialInsert(values: CustomDate[]) {
    setCustomDates([...values]);
  }

  return (
    <CustomDatesContext.Provider
      value={{ customDates, handleCustomDates, initialInsert }}
    >
      {children}
    </CustomDatesContext.Provider>
  );
}

export function useCustomDates() {
  const context = useContext(CustomDatesContext);

  return context;
}
