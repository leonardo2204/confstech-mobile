//credits go to @nimzco https://github.com/tech-conferences/confs.tech/blob/master/src/components/ConferenceItem/utils.js

import parse from 'date-fns/parse';
import format from 'date-fns/format';

export function formatDate(startDate, endDate) {
  // If specific date is not defined yet. Meaning startDate is 2018-02 for instance
  if (startDate.length === 7) { return format(parse(`${startDate}-01`), 'MMMM'); }

  const parsedStartDate = parse(startDate);

  if (endDate && startDate !== endDate) {
    const parsedEndDate = parse(endDate);
    return `${format(parsedStartDate, 'MMMM, D')}${format(parsedEndDate, '-Do')}`;
  } else {
    return format(parsedStartDate, 'MMMM, Do');
  }
}

export function generateEventJSONLD({name, url, city, country, startDate, endDate}) {
  const data = {
    '@context': 'http://schema.org',
    '@type': 'Event',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressCountry: country,
      },
      name: `${city}, ${country}`,
    },
    name,
    startDate,
    url,
    endDate: (endDate || startDate),
  };

  return JSON.stringify(data);
}