import { parseISO, format } from 'date-fns';

interface IProps {
  dateString: string;
}

const TimeFormatter = ({ dateString }: IProps) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default TimeFormatter;
