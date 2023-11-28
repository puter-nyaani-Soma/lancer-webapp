import React from "react";

const About = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Lancer</h2>
        <p className="text-gray-600">
          Welcome to Lancer, your trusted platform for freelancers and
          services. We are a diverse community of talented individuals and
          businesses, providing a wide range of services to clients worldwide.
          Our mission is to connect skilled freelancers with clients seeking
          top-quality services.
        </p>
        <p className="text-gray-600 mt-4">
          At Lancer, we believe in the power of collaboration and the impact it
          can make on businesses and individuals. Whether you are a freelancer
          looking to showcase your skills or a client in need of professional
          services, Lancer is the place for you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-around flex-col md:flex-row">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img
                src="/img/ceo.webp"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg-w-1/4 px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img
                src="/img/ceo2.webp"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img
                src="/img/ceo3.webp"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
