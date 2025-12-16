import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");

  const isButtonActive = name && (email || phone);

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    reset();
  };

  return (
    <section className="w-full min-h-screen bg-[#0f1113] py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ================= LEFT : CONTACT DETAILS ================= */}
        <div className="space-y-6">

          {/* COMPANY INFO */}
          <div className="bg-[#1a1b1d] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#d9c08f]">
              📍 MAA VAISHNAVI ENTERTAINMENTS
            </h3>
            <p className="text-sm text-gray-300 leading-6">
              Plot No. 120 Flat No. G-2 Park View Apartment,  
              Lalalajpatray Society Near by Hanuman Mandir,  
              E-7 Arera Colony, Bhopal,  
              Madhya Pradesh 462016, India
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-[#1a1b1d] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-[#d9c08f]">
              📞 Phone
            </h3>
            <a
              href="tel:+919407271262"
              className="text-gray-300 hover:text-[#d9c08f] transition"
            >
              +91 9407271262
            </a>
          </div>

          {/* EMAIL */}
          <div className="bg-[#1a1b1d] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-[#d9c08f]">
              ✉ Email
            </h3>
            <a
              href="mailto:maavaishnavientertainments@gmail.com"
              className="text-gray-300 hover:text-[#d9c08f] transition break-all"
            >
              maavaishnavientertainments@gmail.com
            </a>
          </div>

          {/* MAP */}
          <div className="bg-[#1a1b1d] border border-gray-700 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#d9c08f]">
              📍 Office Location
            </h3>

            <iframe
              title="office-map"
              src="https://www.google.com/maps?q=E-7%20Arera%20Colony%20Bhopal&output=embed"
              className="w-full h-64 rounded-lg border border-gray-600"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>

        {/* ================= RIGHT : CONTACT FORM ================= */}
        <div className="bg-[#1a1b1d] border border-gray-700 rounded-xl p-8 shadow-xl">

          <h2 className="text-center text-[#d9c08f] text-3xl 
                         font-light tracking-[0.15em] mb-8">
            CONTACT US
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full bg-transparent border border-gray-600 
                           px-4 py-3 rounded-md focus:border-[#d9c08f] 
                           outline-none text-gray-200"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="w-full bg-transparent border border-gray-600 
                         px-4 py-3 rounded-md focus:border-[#d9c08f] 
                         outline-none text-gray-200"
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className="w-full bg-transparent border border-gray-600 
                         px-4 py-3 rounded-md focus:border-[#d9c08f] 
                         outline-none text-gray-200"
            />

            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Your Message"
              {...register("message")}
              className="w-full bg-transparent border border-gray-600 
                         px-4 py-3 rounded-md resize-none 
                         focus:border-[#d9c08f] outline-none text-gray-200"
            ></textarea>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={!isButtonActive}
              className={`w-full py-3 rounded-md tracking-widest transition
                ${
                  isButtonActive
                    ? "bg-[#d9c08f] text-black hover:bg-[#c5aa74]"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
            >
              SUBMIT
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
