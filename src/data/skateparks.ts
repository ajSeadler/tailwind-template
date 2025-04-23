export interface Skatepark {
  name: string;
  address: string;
  description: string;
  imageUrl: string;
}

export const skateparks: Skatepark[] = [
  {
    name: "Mat Hoffman Action Sports Park",
    address: "1700 S Robinson Ave, Oklahoma City, OK 73102",
    description:
      "The bowl section ranges from 5 to 11 feet deep and includes an 11-foot half pipe, 10-foot oververt pocket, a three-part panda bowl, volcano with sub box, loveseat, molehill, waterfalls, BMX berm, and rollers. The street area features hubba ledges, handrails, a bank to flat bar, bank to picnic table, block combos, a double set with step-up, and a manual pad.",
    imageUrl:
      "https://cdn-kccnl.nitrocdn.com/sXVsCMWzFrCfylHpycjFZyEgBBairymK/assets/images/optimized/rev-4921ac5/spaskateparks.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/08/12123708/SPA-Skateparks-Mat-Hoffman-Skatepark-Improvement-Design-Build-Contractor-Oklahoma-16.jpg.webp",
  },
  {
    name: "Blake Baldwin Skate Park",
    address: "201 W Daws St, Norman, OK 73069",
    description:
      "A modern concrete skatepark featuring quarterpipes, street flow section, 5 foot mini ramp (with 6ft ext.), brick banks and ledges, manny pads, a large bowl section, stairs, handrails, flatbars, plus more. Designed by Pivot skateparks in 2020.",
    imageUrl:
      "https://americanrampcompany.com/wp-content/uploads/2021/07/IMG_1553-scaled.jpg",
  },
  {
    name: "Stars and Stripes Skatepark",
    address: "3701 S Lake Hefner Dr, Oklahoma City, OK 73116",
    description:
      "Located in Stars and Stripes Park next to Lake Hefner, this smaller, modern, concrete park features a nice street flow section with one end consisting of smaller obstacles, while the other end features larger obstacles. Obstacles include stars, handrails, flatbars, a bowl section, hubbas, ledges, and more.",
    imageUrl:
      "https://goskate.com/sp/wp-content/uploads/2024/02/2019-09-14-1.jpg",
  },
  {
    name: "Mathis Skate Park",
    address: "1305 W Covell Rd, Edmond, OK 73083",
    description:
      "Located in Mitch Park, this skatepark features concrete ramps and bowls.",
    imageUrl:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/visitedmondok/Mathis-Skate-Park_B28E48AE-A92F-03A1-C71090A47EBDF080-b28e3e7900b7dd8_b28e51cc-e337-0a66-59ed6aa2a3abb57f.jpg",
  },
  {
    name: "HC Shillings Skatepark",
    address: "539 SE 25th St, Oklahoma City, OK 73129",
    description:
      "Small modern concrete park. Features a gap, quarterpipes, a ledge, box, handrail, and a hip.",
    imageUrl: "../images/shillings.JPG",
  },
  {
    name: "South Lakes Skatepark",
    address: "4302 SW 119th, Oklahoma City, OK 73137",
    description:
      "Medium sized concrete park with plenty of boxes, stairs, flatbars, handrails, hips, ledges, etc.",
    imageUrl:
      "https://www.concretedisciples.com/media/reviews/photos/original/31/92/5e/south-lakes-skate-court-86-1435681543.webp",
  },
  {
    name: "Route 66 Skate Court",
    address: "9901 NW 23rd, Oklahoma City, OK 73141",
    description:
      "Geared toward beginner and intermediate skaters, this skate court features above-ground ramps, slides, and rails. Located in a larger park with picnic areas, a playground, and more.",
    imageUrl:
      "https://assets.simpleviewinc.com/simpleview/image/upload/crm/oklahoma/Route66-Oct2010-24--5db47ef95056a36_5db48063-5056-a36a-06dfc215fc3627e7.jpg",
  },
];
