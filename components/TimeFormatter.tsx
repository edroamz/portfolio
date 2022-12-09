import { parseISO, format } from 'date-fns';

type TimeFormatterProps = {
  dateString: string;
};

const TimeFormatter = ({ dateString }: TimeFormatterProps) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default TimeFormatter;
