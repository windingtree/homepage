/* @flow */
export type EventType = {
  startDate: string,
  endDate?: string,
  startMonth: string, // If there is only a month, it must include year. Ex. "Feb'19",
  endMonth?: string, // When there is start and end Month, the year must be only in endMont
  name: string,
  location: string,
  imgSrc: string,
  text?: string,
  buttonHref?: string,
  buttonText?: string
};

export type EventsType = {
  own: EventType[],
  upcoming: EventType[],
  past: EventType[]
};
