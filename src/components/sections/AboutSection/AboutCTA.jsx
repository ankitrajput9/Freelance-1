const AboutCTA = () => {
  return (
    <section className="bg-[#1A1A1A] py-24 text-center text-white px-4">
      <h2 className="text-3xl text-[#A5161B] mb-6">
        Let’s Bring Your Story to Life
      </h2>

      <p className="text-[#E6E6E6] mb-8">
        Partner with a reliable, experienced, and creative production team.
      </p>

      <a
        href="/contact"
        className="inline-block px-8 py-3 border border-[#A5161B]
                   hover:bg-[#A5161B] transition"
      >
        Discuss Your Project With Us
      </a>
    </section>
  );
};

export default AboutCTA;
