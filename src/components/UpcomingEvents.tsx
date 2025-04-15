const UpcomingEvents: React.FC = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay tuned for our next cleanup events. Mark your calendars and help
            us make an impact in your community.
          </p>
        </header>

        <div className="w-full divide-y divide-neutral-800 border border-neutral-700 rounded-xl overflow-hidden">
          {/* Column Headers */}
          <div className="grid grid-cols-3 text-sm uppercase tracking-wider text-gray-500 bg-neutral-800 px-6 py-4">
            <span>Location</span>
            <span>Date</span>
            <span>Time</span>
          </div>

          {/* Event Rows */}
          <div className="grid grid-cols-3 px-6 py-6 hover:bg-neutral-700 transition">
            <span className="font-medium text-lg">
              Matt Hoffman Action Sports Park
            </span>
            <span className="text-gray-400">Saturday, August 19</span>
            <span className="text-gray-400">10:00 AM – 2:00 PM</span>
          </div>

          <div className="grid grid-cols-3 px-6 py-6 hover:bg-neutral-800 transition">
            <span className="font-medium text-lg">
              Stars and Stripes Skatepark
            </span>
            <span className="text-gray-400">Saturday, September 16</span>
            <span className="text-gray-400">9:30 AM – 1:30 PM</span>
          </div>

          <div className="grid grid-cols-3 px-6 py-6 hover:bg-neutral-800 transition">
            <span className="font-medium text-lg">
              Mathis Brothers Skatepark
            </span>
            <span className="text-gray-400">Saturday, October 14</span>
            <span className="text-gray-400">11:00 AM – 3:00 PM</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
