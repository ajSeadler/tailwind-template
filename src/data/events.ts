// events.ts

export interface Event {
  id: string; // This will match the skatepark name (or a slugified version)
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    id: "mat-hoffman-action-sports-park",
    location: "Mat Hoffman Action Sports Park",
    date: "5/3/2025",
    time: "10:00 AM – 2:00 PM",
  },
  {
    id: "stars-and-stripes-skatepark",
    location: "Stars and Stripes Skatepark",
    date: "6/7/2025",
    time: "9:30 AM – 1:30 PM",
  },
  {
    id: "mathis-skate-park",
    location: "Mathis Brothers Skatepark",
    date: "7/5/2025",
    time: "11:00 AM – 3:00 PM",
  },
];
