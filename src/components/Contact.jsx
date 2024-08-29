import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-lg font-medium">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-lg font-medium">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
