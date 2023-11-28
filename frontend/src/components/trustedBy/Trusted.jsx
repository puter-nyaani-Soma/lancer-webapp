
  
const Trusted = () => {
    return (
        <div className="bg-fafafa py-0 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-gray-400 font-semibold leading-2 ">
            Trusted by :
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/img/Wipro_Secondary Logo_Color_RGB.png"
              alt="wipro"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/img/mern.jpeg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/img/fb.png"
              alt="ABB"
              width={158}
              height={48}
            />
              <img
                className="col-span-2  max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="/img/google.png"
                alt="citi bank"
                width={158}
                height={48}
              />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/img/bits.png"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    );
  };
  
        export default Trusted