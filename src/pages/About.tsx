const About = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 flex flex-col font-sans">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="bg-neutral-800/80 border border-neutral-700 rounded-2xl shadow-lg shadow-black/30 p-10 backdrop-blur-md transition-all">
          <h2 className="text-4xl font-bold text-teal-400 mb-6 tracking-tight">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed mb-10 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            consequatur hic iste illum quia labore facere maxime quisquam
            dignissimos fuga nulla, itaque cumque ipsa nam vel? Enim tenetur
            earum sit..
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, quis placeat velit nesciunt dolorum rerum perferendis
                repudiandae sit enim eveniet eum laudantium, dolores aut hic.
                Sunt fugit debitis voluptate voluptatum!.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Our Values</h3>
              <ul className="list-disc pl-6 text-gray-400 space-y-1">
                <li>Creativity</li>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Collaboration</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
