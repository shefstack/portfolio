export const About = () => {
  return (
    <div className="text-gray-800 leading-relaxed space-y-6">
      <p className="text-lg">
        I’m <span className="font-semibold text-gray-900">Shefali Sinha</span>, a
        <span className="text-blue-600 font-medium"> results-driven Front-End Developer</span> 
        with over <span className="font-semibold text-gray-900">3 years of experience</span> 
        building and optimizing user interfaces using <span className="font-semibold text-gray-900">React.js</span>. 
        I specialize in developing responsive, high-performance web applications and translating design mockups into intuitive, user-friendly interfaces.
      </p>

      <p className="text-lg">
        At <span className="font-semibold text-gray-900">Tata Consultancy Services (TCS)</span>, 
        I’ve contributed to the development of scalable UI components and libraries, 
        optimized application performance using advanced React techniques, 
        and ensured seamless front-end and back-end integration. 
        My approach emphasizes clean, efficient, and maintainable code aligned with modern web development practices.
      </p>

      <p className="text-lg">
        I’m passionate about creating accessible, visually engaging interfaces that enhance user experience. 
        I love collaborating with cross-functional teams, solving UI challenges, and contributing to 
        scalable digital products that bring design and functionality together.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="bg-gradient-to-tr from-blue-50 to-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 sm:col-span-2 justify-self-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md">
          <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2 text-xl">
            ⚙️ Technical Skills
          </h4>
          <p className="text-gray-700 text-base leading-relaxed">
            React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Git, REST APIs, Redux, Bootstrap, MUI
          </p>
        </div>
      </div>
    </div>
  );
};
