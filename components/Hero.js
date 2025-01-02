import Link from "next/link";
export default function Hero() {
  return (
    <>
      <main className="flex items-center justify-center bg-gray-50 py-5 animate-slide-up">
        <div className="max-w-5xl px-4 sm:px-6 flex flex-col items-center justify-center text-center ">
          
          {/* Hero Title Animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-extrabold leading-tight mb-6 sm:mb-8 animate__animated animate__fadeIn">
            Upload, Save, and Effortlessly Share Your Files in One Secure Place
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 opacity-80 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Our platform ensures your files are always accessible, easily shareable, and securely stored. Whether you're collaborating with a team or managing personal files, we make it simple and efficient.
          </p>

    

          {/* Features Section */}
          <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-8">
            <Link href='/upload' className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md focus:outline-none hover:bg-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Get Started
            </Link>
            <Link href='/about' className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-md focus:outline-none hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Learn More
            </Link>
          </div>

          <div className="flex flex-col items-center mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 font-bold mb-4">
              Trusted by Thousands of Users Worldwide
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 opacity-80 mb-6 max-w-2xl mx-auto">
              Join a growing community of users who trust us to store and manage their files. Whether you're a business, educator, or individual, we've got you covered with secure, cloud-based storage and seamless sharing.
            </p>
          </div>
          {/* Extra Section for Trust */}
         
        </div>
      </main>
    </>
  );
}
