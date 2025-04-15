import React from "react";

const teamMembers = [
  {
    name: "Aj Seadler",
    role: "Organizer",
    image: "/images/aj.jpg",
    description: "Aj is one of the founding members of OK Clean Skateparks.",
  },
  {
    name: "John Doe",
    role: "Organizer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrF3t4HTqY8rjh54a9PrakBAZsJ5gPFv2CQ&s",
    description:
      "blah blah blah blah blah blah blah blah blah blah blah blah blah.",
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            If you have any questions, feel free to reach out below!
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-neutral-800 dark:border-gray-700"
            >
              <a href="#">
                <div className="w-full sm:w-48 h-50 overflow-hidden rounded-t-lg sm:rounded-none sm:rounded-l-lg flex-shrink-0">
                  <img
                    src={member.image}
                    alt={`${member.name} Avatar`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }} // Moves the image down
                  />
                </div>
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {["facebook", "twitter", "github", "dribbble"].map(
                    (platform, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <span className="sr-only">{platform}</span>
                          {/* You can replace these with proper icon components */}
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
