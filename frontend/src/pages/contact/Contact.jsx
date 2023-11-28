import React from "react";

const Contact = () => {
  return (
    <section className="py-10 h-[100vh]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600">
          Have questions, suggestions, or need assistance? Don't hesitate to
          get in touch with us. We're here to help!
        </p>

        <div className="mt-8 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Information</h3>
            <div className="mb-4">
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> contact@lancer.com
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +91 78541495
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">
                <span className="font-semibold">Address:</span> 123 Lancer Street, Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
