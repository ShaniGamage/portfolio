import { ExternalLink, GithubIcon } from 'lucide-react'
import React, { useState } from 'react'
import { colors } from '../constants/colors';
import { projects } from '../constants/projects';
import Link from 'next/link';

export default function Project() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-gray-900 min-h-screen py-20">
      <section id="projects" className="px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: colors.pink }}>
            My Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore my latest work across web development, mobile apps, UI/UX design, and branding
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['all', 'webapp', 'mobile', 'uiux', 'logo'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat
                  ? 'scale-110 shadow-lg'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                style={{
                  backgroundColor: activeCategory === cat ? colors.purple : 'rgba(123, 111, 158, 0.2)',
                  border: `2px solid ${colors.purple}`,
                  color: activeCategory === cat ? 'white' : colors.peach
                }}
              >
                {cat === 'uiux' ? 'UI/UX' : cat === 'all' ? 'All Projects' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  boxShadow: `0 4px 20px ${colors.purple}20`,
                }}
              >
                {/* Image Container with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* status Badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-sm"
                    style={{
                      backgroundColor: `${colors.peach}90`,
                      color: 'white'
                    }}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-opacity-80 transition-colors" style={{ color: colors.peach }}>
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.techs && (
                    <div className="pt-3 border-t border-gray-700">
                      <p className="text-xs font-semibold mb-2" style={{ color: colors.purple }}>
                        Technologies:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techs.split(',').map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 hover:bg-gray-700 transition-colors border border-gray-600"
                            style={{ color: colors.peach }}
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View More Buttons */}
                  <div className="flex items-center gap-4 mt-4">
                    {/* Only show GitHub link for webapp and mobile categories */}
                    {project.category !== 'uiux' && project.category !== 'logo' && (
                      <Link href={project.repo}>
                        <button
                          className="flex items-center gap-2 font-semibold group/btn hover:gap-3 transition-all duration-300"
                          style={{ color: colors.pink }}
                        >
                          <GithubIcon
                            size={16}
                            className="group-hover/btn:rotate-45 transition-transform"
                          />
                        </button>
                      </Link>
                    )}

                    <Link href={project.url}>
                      <button
                        className="flex items-center gap-2 font-semibold group/btn hover:gap-3 transition-all duration-300"
                        style={{ color: colors.pink }}
                      >
                        <ExternalLink
                          size={16}
                          className="group-hover/btn:rotate-45 transition-transform"
                        />
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section >
    </div >
  );
}