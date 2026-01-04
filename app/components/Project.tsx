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
    <div className="bg-gray-900 min-h-screen py-12 sm:py-20">
      <section id="projects" className="px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4" style={{ color: colors.pink }}>
            My Projects
          </h2>
          <p className="text-center text-gray-400 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Explore my latest work across web development, mobile apps, UI/UX design, and branding
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2">
            {['all', 'webapp', 'mobile', 'uiux', 'logo'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${activeCategory === cat
                  ? 'scale-105 sm:scale-110 shadow-lg'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                style={{
                  backgroundColor: activeCategory === cat ? colors.purple : 'rgba(123, 111, 158, 0.2)',
                  border: `2px solid ${colors.purple}`,
                  color: activeCategory === cat ? 'white' : colors.peach
                }}
              >
                {cat === 'uiux' ? 'UI/UX' : cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  boxShadow: `0 4px 20px ${colors.purple}20`,
                }}
              >
                {/* Image Container with Overlay */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* status Badge */}
                  <div
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-sm"
                    style={{
                      backgroundColor: `${colors.peach}90`,
                      color: 'white'
                    }}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-colors" style={{ color: colors.peach }}>
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed min-h-[40px]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.techs && (
                    <div className="pt-3 border-t border-gray-700">
                      <p className="text-xs font-semibold mb-2" style={{ color: colors.purple }}>
                        Technologies:
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.techs.split(',').map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 hover:bg-gray-700 transition-colors border border-gray-600"
                            style={{ color: colors.peach }}
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View More Buttons */}
                  <div className="flex items-center gap-3 sm:gap-4 mt-4">
                    {/* Only show GitHub link for webapp and mobile categories */}
                    {project.category !== 'uiux' && project.category !== 'logo' && project.repo && (
                      <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                        <button
                          className="flex items-center gap-2 font-semibold group/btn hover:gap-3 transition-all duration-300 p-2 rounded-lg hover:bg-gray-700/50"
                          style={{ color: colors.pink }}
                          aria-label="View GitHub Repository"
                        >
                          <GithubIcon
                            size={18}
                            className="group-hover/btn:rotate-12 transition-transform"
                          />
                          <span className="text-xs sm:text-sm">Code</span>
                        </button>
                      </Link>
                    )}

                    {project.url && (
                      <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        <button
                          className="flex items-center gap-2 font-semibold group/btn hover:gap-3 transition-all duration-300 p-2 rounded-lg hover:bg-gray-700/50"
                          style={{ color: colors.pink }}
                          aria-label="View Project"
                        >
                          <ExternalLink
                            size={18}
                            className="group-hover/btn:rotate-12 transition-transform"
                          />
                          <span className="text-xs sm:text-sm">View</span>
                        </button>
                      </Link>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-base sm:text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}