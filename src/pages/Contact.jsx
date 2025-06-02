import React, { useState } from 'react';

const Contact = () => {
  // ✅ State variables to manage form feedback
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      {/* ✅ Container centered with max width */}
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* ✅ Section Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Contact Me
        </h2>

        {/* ✅ Contact Form connected to FormSubmit (sends to sabrihse1@hotmail.com) */}
        <form
          action="https://formsubmit.co/sabrihse1@hotmail.com"
          method="POST"
          target="_blank"
          onSubmit={() => setSubmitted(true)} // ✅ Triggers feedback message
          className="space-y-6"
        >
          {/* ✅ Hidden fields to disable captcha and format email nicely */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* ✅ Two-column layout for name and email inputs */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* ✅ Textarea for message input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* ✅ Submit button styled with Tailwind */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-md transition-all"
          >
            Submit Form
          </button>
        </form>

        {/* ✅ Success Message After Submission */}
        {submitted && (
          <p className="mt-4 text-green-600 text-center font-medium">
            ✅ Thank you! Your message has been submitted.
          </p>
        )}

        {/* ✅ WhatsApp Contact Option */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">or reach me directly on</p>
          <a
            href="https://wa.me/252622343666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-green-600 hover:text-green-700 font-semibold underline"
          >
            📱 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
