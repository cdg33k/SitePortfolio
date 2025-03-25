import React, { useState } from 'react';
import { Github, Mail, FileText, ExternalLink, Menu, X } from 'lucide-react';
import zap from './assets/zap.png';
import repar from './assets/visite.png';
import visite from './assets/repar.png';
import site from './assets/site.png';
import api from './assets/api.png';
import balancier from './assets/balancier.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Maquette  ",
      description: "Maquette d'un site vitrine pour une agence de voyage",
      image: zap,
      tags: ["Figma"]
    },
    {
      title: "Plateforme de réparation Repar+",
      description: "Plateforme de réparation Repar+ pour la mise en relation client-réparateur",
      image: visite,
      tags: ["Laravel", "PHP", "Postgree"]
    },
    {
      title: "Visite virtuelle 3D",
      description: "Visite virtuelle 3D intégrée dans le navigateur",
      image: repar,
      tags: ["HTML/CSS", "Three.js", "Javascript", "WEBGL", "Blender"]
    },
    {
      title: "Site web Responsive",
      description: "Site web responsive pour intégrer une visite virtuelle",
      image: site,
      tags: ["HTML/CSS", "Three.js", "Javascript", "WEBGL", "Blender"]
    },
    {
      title: "Interface dynamique IA ",
      description: "Interface pour création de contenu dynamique IA",
      image: api,
      tags: ["HTML/CSS", "Three.js", "Javascript", "WEBGL", "Blender"]
    },
    {
      title: "Balancier",
      description: "Assemblage et animation d'objects 3d dans le navigateur",
      image: balancier,
      tags: ["WEBGL", "Three.js", "HTML/CSS"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Portfolio</span>
            </div> 
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-600">À propos</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projets</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">À propos</a>
            <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Projets</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Cynthia AYETOLOOU </span>
            </h1>
            <h3>
              <span className="block text-indigo-600">Développement web • UX • IA • Gestion de projet</span>
            </h3>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Des solutions fonctionnelles, utiles et bien pensées.            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/CV_Cynthia_Ayetolou_Master.pdf"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  <FileText className="mr-2" size={20} />
                  Voir mon CV
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://github.com/cdg33k/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              À propos de moi
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Je m'appelle Cynthia Ayetolou, développeuse web et cheffe de projet en devenir, avec une double licence en informatique (IFRI – Bénin / Université de Franche-Comté – France).
Curieuse, rigoureuse et tournée vers l’humain, j’aime concevoir des solutions utiles, accessibles et bien pensées.

Mon parcours m’a amenée à travailler en design ui/ux, développement web, l’intégration d’APIs IA, le design graphique, mais aussi la gestion de projet digital en contexte réel. J’accorde une attention
particulière à l’expérience utilisateur, au prototypage fonctionnel et aux interfaces bien construites.

Aujourd’hui, je me spécialise dans les projets mêlant développement, intelligence artificielle et innovation numérique, avec l’objectif de devenir Product Owner IA ou ingénieure en machine learning.

Ce portfolio rassemble une sélection de mes réalisations. 
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12 text-center">
            Mes Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/17283t_oVQ3x58n3FJ8Y7vRQKZTQp7Qj4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
            >
              <ExternalLink className="mr-2" size={20} />
              Voir mon portfolio graphique
            </a>
            <a
              href="https://github.com/cdg33k/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-300"
            >
              <Github className="mr-2" size={20} />
              Voir tous mes projets GitHub
            </a>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Intéressé par une collaboration ? N'hésitez pas à me contacter !
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="mailto:cynthiayetolou@gmail.com"
                className="text-gray-600 hover:text-indigo-600"
              >
                <Mail size={24} />
              </a>
              
             
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Portfolio. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;