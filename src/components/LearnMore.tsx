import React from "react";
// import OurTeam from "./OurTeam";
import { AlertTriangle } from "lucide-react";

const LearnMore: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-gray-100 font-sans">
      {/* Section 1: Intro */}
      <section className="py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-teal-400 mb-6">
              We're not reinventing the wheel.
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              We're just making it easier for your wheels to spin.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              We’re a group of dedicated skaters passionate about preserving our
              local skateparks. Join us once a month—usually on weekends—to help
              maintain the quality of skateparks across Oklahoma.
            </p>

            <p className="text-lg text-gray-300">
              Oklahoma is home to a diverse range of incredible skateparks, and
              with time, even the best take a beating. Our mission is to keep
              these community spaces in top shape, whether it’s through routine
              clean-ups, removing trash, or even fixing small cracks and
              imperfections. We do not consider graffiti vandalism unless it
              includes hate speech.
            </p>
            <p className="text-lg text-gray-300 mt-2">
              Know a skate spot that’s been overgrown or worn down over time?
              Let's fix it up!
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-6">
            <img
              className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg transition-transform hover:scale-105"
              src="https://goskate.com/sp/wp-content/uploads/2024/02/2019-09-14-1.jpg"
              alt="Skatepark 1"
            />
            <img
              className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg transition-transform hover:scale-105 mt-4 md:mt-0"
              src="https://cdn-kccnl.nitrocdn.com/sXVsCMWzFrCfylHpycjFZyEgBBairymK/assets/images/optimized/rev-4921ac5/spaskateparks.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/08/12123641/SPA-Skateparks-Mat-Hoffman-Skatepark-Improvement-Design-Build-Contractor-Oklahoma-10.jpeg.webp"
              alt="Skatepark 2"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-300 mb-4">
              We figure we're already at the skatepark on most weekends anyway,
              so why not bring some landscaping tools and some trashbags?
            </p>

            <p className="text-lg text-gray-300">
              Fortunately, most skateparks in Oklahoma stay in pretty fair
              condition. However, there are cases of neglect or vandalism in
              some parks. The idea of this 'organization' is to help reduce the
              amount of damage, whether it be from natural causes or vandalism.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-6">
            <img
              className="w-full h-80 object-cover rounded-xl shadow-lg transition-transform hover:scale-105"
              src="https://pivotcustom.com/wp-content/uploads/2020/11/NormanOK_08-scaled.jpg"
              alt="Skatepark 1"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-red-500 mb-6">
              Vandalism at Skateparks
            </h2>
            <p className="text-gray-300 mb-4 text-base sm:text-lg">
              Damage to public skateparks not only ruins the experience for
              skaters — it puts people at risk for injury. Here’s one example of
              vandalism that occurred at Blake Baldwin Skatepark.
            </p>
            <div className="bg-neutral-800 border border-red-600 rounded-2xl p-6 shadow-lg mt-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">
                  Cement Poured in Drains
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Entire bags of cement were poured into the bowl drains.
                Fortunately, skaters acted quickly to repair the damage. Keep in
                mind, the city will only do so much — many park issues end up in
                the hands of skaters if we want them fixed fast.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="lg:w-1/2 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src="/images/hoffman-damage.jpg"
                alt="Cement damage at Mat Hoffman Park"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src="/images/hoffman-damage1.jpg"
                alt="Drain covered with cement at Mat Hoffman Park"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      {/* <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">
            Join Our Movement
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Become part of the change! Sign up to receive notifications on
            upcoming events and learn how you can get involved in making a
            difference.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-teal-500 rounded-full shadow-md hover:bg-teal-600 transition"
          >
            Sign Up Now
          </a>
        </div>
      </section> */}
      {/* Section 4: Meet The Team */}
      {/* <section className="py-20 bg-neutral-900 px-6 md:px-12">
        <OurTeam />
      </section> */}
    </div>
  );
};

export default LearnMore;
