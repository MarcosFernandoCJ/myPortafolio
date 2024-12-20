import React from "react";

const TAGS = {
  SPRINGBOOT: {
    name: "Spring Boot",
    class: "bg-green-500 text-white",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.6 17.4h-3.2V15h3.2v2.4zm1.6-6.4c-.2.2-.5.4-.8.6-.3.2-.6.3-.9.4-.3.1-.5.3-.7.5-.2.2-.3.4-.3.7h-3.2c0-.5.2-.9.5-1.3.3-.4.8-.8 1.3-1 .5-.3.8-.6 1-.8.2-.3.3-.5.3-.8 0-.3-.1-.6-.3-.8-.2-.3-.5-.4-.8-.6-.3-.2-.6-.3-.9-.4-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.3-.7V7.6h3.2c0 .5.2.9.5 1.3.3.4.8.8 1.3 1 .5.3.8.6 1 .8.2.3.3.5.3.8 0 .3-.1.6-.3.8z" />
      </svg>
    ),
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-blue-500 text-white",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.4 17.4h-2.8V15h2.8v2.4zm1.6-6.4c-.2.2-.5.4-.8.6-.3.2-.6.3-.9.4-.3.1-.5.3-.7.5-.2.2-.3.4-.3.7H8.6c0-.5.2-.9.5-1.3.3-.4.8-.8 1.3-1 .5-.3.8-.6 1-.8.2-.3.3-.5.3-.8 0-.3-.1-.6-.3-.8-.2-.3-.5-.4-.8-.6-.3-.2-.6-.3-.9-.4-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.3-.7V7.6h2.8c0 .5.2.9.5 1.3.3.4.8.8 1.3 1 .5.3.8.6 1 .8.2.3.3.5.3.8 0 .3-.1.6-.3.8z" />
      </svg>
    ),
  },
  REACT: {
    name: "React",
    class: "bg-blue-400 text-white",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.4 17.4h-2.8V15h2.8v2.4zm1.6-6.4c-.2.2-.5.4-.8.6-.3.2-.6.3-.9.4-.3.1-.5.3-.7.5-.2.2-.3.4-.3.7H8.6c0-.5.2-.9.5-1.3.3-.4.8-.8 1.3-1 .5-.3.8-.6 1-.8.2-.3.3-.5.3-.8 0-.3-.1-.6-.3-.8-.2-.3-.5-.4-.8-.6-.3-.2-.6-.3-.9-.4-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.3-.7V7.6h2.8c0 .5.2.9.5 1.3.3.4.8.8 1.3 1 .5.3.8.6 1 .8.2.3.3.5.3.8 0 .3-.1.6-.3.8z" />
      </svg>
    ),
  },
};

const PROJECTS = [
  {
    title: "T&C WEEK APP LIMA",
    description:
      "Un sistema desarrollado con Spring Boot, MySQL y React para la gestion y organización de eventos de T&C WEEK Tecsup Lima",
    link: "https://github.com/MarcosFernandoCJ/PROYECT_T-CWEEKAPPLIMA_BACKENDFINAL",
    github: "https://github.com/MarcosFernandoCJ/PROYECT_T-CWEEKAPPLIMA_BACKENDFINAL",
    image: "/projects/sistema-gestion-academica.webp",
    tags: [TAGS.SPRINGBOOT, TAGS.MYSQL, TAGS.REACT],
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 pb-16 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Mis Proyectos</h2>
        <div className="flex flex-col gap-y-16">
          {PROJECTS.map(({ image, title, description, tags, link, github }) => (
            <article
              key={title}
              className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
            >
              <div className="w-full md:w-1/2">
                <div className="relative flex overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 md:group-hover:scale-105">
                  <img alt={title} src={image} className="object-cover object-center w-full h-56 sm:h-full" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
                <div className="flex flex-wrap mt-2">
                  <ul className="flex flex-row mb-2 gap-x-2">
                    {tags.map((tag) => (
                      <li key={tag.name}>
                        <span
                          className={`flex items-center gap-x-2 rounded-full text-xs py-1 px-3 ${tag.class}`}
                        >
                          {tag.icon()}
                          {tag.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-gray-300">{description}</p>
                </div>
                <footer className="flex items-center mt-4 space-x-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 px-4 py-2 bg-gray-800 text-yellow-400 rounded-lg hover:bg-gray-700"
                    >
                      Código
                    </a>
                  )}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-300"
                    >
                      Vista previa
                    </a>
                  )}
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
