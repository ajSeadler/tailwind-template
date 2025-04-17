const Diy = () => {
  return (
    <section className="bg-neutral-900 text-white py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Title */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            DIY Spot Clean Up
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Some tips to help get started.
          </p>
        </header>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 border-l-4 border-teal-500 pl-6">
            <h2 className="text-2xl font-bold mb-2">Crack & Surface Repair</h2>
            <p className="text-gray-400">
              Smooth concrete is good concrete. Surface damage is common — but
              fixable.
            </p>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-gray-300">
            <p>
              Start by clearing out cracks with a stiff wire brush. For deeper
              gaps, use foam backer rod. Mix and apply Bondo or Quikrete, and
              feather the edges with a trowel. Let it cure fully before skating
              — and never apply it over dust.
            </p>
            <p>
              For chips or crumbling areas, use a vinyl concrete patch compound.
              For large flat areas, consider self-leveling concrete mix, but
              note that it must be applied quickly and evenly.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
          <div className="w-full md:w-1/3 border-r-4 border-teal-500 pr-6 text-right md:text-left">
            <h2 className="text-2xl font-bold mb-2">
              Weed Control & Overgrowth
            </h2>
            <p className="text-gray-400">Toke up.</p>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-gray-300">
            <p>
              Use a gas or electric weed whacker to cut grass and weeds from the
              base of ledges, rails, and banks. Be mindful of trash, syringes,
              or insects hiding in overgrowth. For thicker brush, consider
              bringing a rake and heavy-duty gloves.
            </p>
            <p>
              Remove weeds at the root when possible to slow regrowth. If you're
              working with concrete seams or cracks, a propane torch or safe
              weed killer can help finish the job.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 border-l-4 border-teal-500 pl-6">
            <h2 className="text-2xl font-bold mb-2">
              Trash, Debris & Surface Cleaning
            </h2>
            <p className="text-gray-400"></p>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-gray-300">
            <p>
              Bring heavy-duty trash bags, nitrile gloves, and a trash grabber.
              Sweep from the top down — ledges first, then flatground. A push
              broom and a dustpan or leaf blower are helpful..
            </p>
            <p>Separate recyclables when possible and dispose.</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
          <div className="w-full md:w-1/3 border-r-4 border-teal-500 pr-6 text-right md:text-left">
            <h2 className="text-2xl font-bold mb-2">Supplies Checklist</h2>
            <p className="text-gray-400">
              Bring what you can. Share gear. Prep for more than you think
              you’ll need.
            </p>
          </div>
          <div className="w-full md:w-2/3 text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-2 list-disc list-inside">
              <li>Bondo / Quikrete / Cement Patch</li>
              <li>Push broom, leaf blower</li>
              <li>Trash bags & gloves</li>
              <li>Weed whacker, rakes</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Mixing bucket & trowel</li>
              <li>Water, snacks, first aid</li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
      </div>
    </section>
  );
};

export default Diy;
