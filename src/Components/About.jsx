import React from 'react'

function About() {
  return (
    <div>
      <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        The Willyma Technology 

        <span className="sm:block"> Boost Your Conversion Rate </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      At Willyma Technology, we specialize in web and app development, machine learning, and artificial intelligence. With a passion for crafting innovative and efficient solutions, we create responsive websites, powerful apps, and intelligent systems that address real-world challenges. Our commitment is to leverage cutting-edge technology to help businesses grow, improve user experiences, and increase conversions. Ready to transform your ideas into impactful results?
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started Today!
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
