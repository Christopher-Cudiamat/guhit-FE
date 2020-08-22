import moment from 'moment';

import event1 from '../../../images/events/event-1.jpg';
import event2 from '../../../images/events/event-2.png';
import event3 from '../../../images/events/event-3.jpg';
import event4 from '../../../images/events/event-4.jpg';

export const eventsArr = [
  {
    image: event4,
    title: "Komikon 2010",
    date: moment("01-25-2021").format('ll').toString(),
    desc:  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  },

  {
    image: event2,
    title: "Team Guhit Talks @ CSB",
    date: moment("03-03-2021").format('ll').toString(),
    desc:  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",

  },
  {
    image: event3,
    title: "Game Devs Manila Conference",
    date: moment("05-06-2021").format('ll').toString(),
    desc:  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",

  },
  {
    image: event1,
    title: "Komikon 2014",
    date: moment("06-10-2021").format('ll').toString(),
    desc:  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    
  },
]