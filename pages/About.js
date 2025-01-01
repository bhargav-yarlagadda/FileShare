import Link from "next/link";
import { FaSmile, FaRocket, FaLock, FaShareAlt, FaMobileAlt, FaUsers } from "react-icons/fa";


export default function About() {
  return (
    <main className="bg-gray-50 animate-slide-in text-gray-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-100 shadow-md">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Welcome to the file-sharing platform that's more fun than a kitten playing with a laser pointer! We're here to make your life easier, faster, and more secure. 
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We’re on a mission to make file-sharing so easy you could do it with your eyes closed—though we don’t recommend that for accuracy’s sake. Secure, fast, and ridiculously simple, we’re here for you.
          </p>
          <FaRocket className="mx-auto text-blue-500 text-6xl mt-6" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Vision</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Imagine a world where sharing files is as effortless as sharing memes—our platform makes that a reality (minus the bad jokes, though those are optional).
          </p>
          <FaSmile className="mx-auto text-yellow-500 text-6xl mt-6" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-lg shadow-lg">
              <FaLock className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Secure Storage</h3>
              <p className="text-gray-700">
                Your files are stored with the kind of security James Bond would envy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-lg shadow-lg">
              <FaShareAlt className="text-green-500 text-5xl mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-4">Effortless Sharing</h3>
              <p className="text-gray-700">
                Sharing files as easy as sharing snacks at a party (but way less messy).
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-lg shadow-lg">
              <FaMobileAlt className="text-purple-500 text-5xl mb-4" />
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Cross-Device Access</h3>
              <p className="text-gray-700">
                Your files, anytime, anywhere—except underwater (we’re working on it).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">What Our Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <blockquote className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                “This platform is my new BFF for team projects. Absolute lifesaver!”
              </p>
              <cite className="block text-gray-900 font-semibold">– Alex J., Team Lead</cite>
            </blockquote>
            <blockquote className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                “Secure storage that even my overly paranoid cousin approves of.”
              </p>
              <cite className="block text-gray-900 font-semibold">– Sarah K., Freelancer</cite>
            </blockquote>
            <blockquote className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                “Finally, a platform that gets me and my need to work from bed.”
              </p>
              <cite className="block text-gray-900 font-semibold">– John D., Photographer</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Join the Fun?</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Don’t just take our word for it—come see for yourself. We promise it’s worth the hype!
          </p>
          <Link href={'/upload'} className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg focus:outline-none hover:bg-blue-700 transition-all duration-300">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
