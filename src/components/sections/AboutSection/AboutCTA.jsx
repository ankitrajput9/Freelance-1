const AboutCTA = () => {
  return (
    <section className="bg-[#f7f7f7] py-24 text-center px-4">
      
      <h2 className="text-3xl sm:text-4xl text-[#A5161B] mb-6 tracking-wide">
        Let’s Bring Your Story to Life
      </h2>

      <p className="text-[#555] mb-8 max-w-2xl mx-auto">
        Partner with a reliable, experienced, and creative production team
        committed to excellence in every frame.
      </p>

      <a
        href="/contact"
        className="inline-block px-8 py-3 border border-[#A5161B]
                   text-[#A5161B] uppercase tracking-wider
                   hover:bg-[#A5161B] hover:text-white transition"
      >
        Discuss Your Project With Us
      </a>

    </section>
  );
};

export default AboutCTA;
