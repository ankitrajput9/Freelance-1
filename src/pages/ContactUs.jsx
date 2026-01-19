import React from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6tv90fj',   // 🔴 replace
        "template_y6mp296",  // 🔴 replace
        e.target,
        "Uo20qC6xwtEbMHtuh"    // 🔴 replace
      )
      .then(
        () => {
          alert("Form submitted successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message!");
        }
      );
  };

  return (
    <section className="min-h-screen bg-[#f7f7f7] px-4 py-24">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-center text-4xl tracking-[0.15em] text-[#A5161B] mb-4">
          CONTACT US
        </h1>
        <p className="text-center text-[#555] mb-14">
          Let’s discuss your project and bring your vision to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-2xl text-[#A5161B] mb-4">Get In Touch</h2>
            <p className="text-[#555] leading-7">
              Maa Vaishnavi Entertainments is your trusted partner for line
              production, casting, and production management across India.
            </p>

            <div className="space-y-3 text-[#444]">
              <p>📧 maavaishnavientertainments@gmail.com</p>
              <p>📞 +91 94072 71262</p>
              <p>🌐 www.filmsmp.com</p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#ddd] rounded-2xl p-8 space-y-6 shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-[#ccc] px-4 py-3 rounded outline-none focus:border-[#A5161B]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-[#ccc] px-4 py-3 rounded outline-none focus:border-[#A5161B]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border border-[#ccc] px-4 py-3 rounded outline-none focus:border-[#A5161B]"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name (Optional)"
              className="w-full border border-[#ccc] px-4 py-3 rounded outline-none focus:border-[#A5161B]"
            />

            <select
              name="project"
              required
              className="w-full border border-[#ccc] px-4 py-3 rounded outline-none focus:border-[#A5161B]"
            >
              <option value="">Project Type</option>
              <option>Film</option>
              <option>Web Series</option>
              <option>TV Show</option>
              <option>Ad Film</option>
              <option>Documentary</option>
              <option>Corporate</option>
              <option>Other</option>
            </select>

            <textarea
              rows="4"
              name="message"
              placeholder="Tell us about your project"
              required
              className="w-full border border-[#ccc] px-4 py-3 rounded outline-none focus:border-[#A5161B]"
            />

            <button
              type="submit"
              className="w-full py-3 tracking-wider transition
                         border border-[#A5161B] text-[#A5161B]
                         hover:bg-[#A5161B] hover:text-white"
            >
              SUBMIT
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
