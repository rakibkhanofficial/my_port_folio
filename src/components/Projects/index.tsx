import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { Image } from '@nextui-org/react';
import Link from 'next/link';

// Type definitions
type TechName = 'React' | 'Next.js' | 'TypeScript' | 'Tailwind' | 'Node.js' | 'MongoDB';

interface ProjectStats {
  stars: number;
  forks: number;
}

interface ProjectTech {
  frontend: TechName[];
  backend: TechName[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  stats: ProjectStats;
  image: string;
  tech: ProjectTech;
}

interface TechIconProps {
  name: TechName;
}

// Sample data
const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing online stores with real-time analytics, inventory management, and sales tracking features.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    stats: {
      stars: 128,
      forks: 45,
    },
    image: '/api/placeholder/600/400',
    tech: {
      frontend: ['React', 'TypeScript', 'Tailwind'],
      backend: ['Node.js', 'MongoDB'],
    },
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'An AI-powered platform that generates high-quality content for blogs, social media, and marketing materials using advanced NLP.',
    tags: ['Next.js', 'OpenAI', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    stats: {
      stars: 245,
      forks: 89,
    },
    image: '/api/placeholder/600/400',
    tech: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind'],
      backend: ['Node.js', 'MongoDB'],
    },
  },
  {
    id: '3',
    title: 'Real-time Collaboration Tool',
    description: 'A collaborative workspace platform with real-time document editing, video conferencing, and team management features.',
    tags: ['React', 'WebRTC', 'Socket.io', 'MongoDB'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    stats: {
      stars: 189,
      forks: 67,
    },
    image: '/api/placeholder/600/400',
    tech: {
      frontend: ['React', 'TypeScript', 'Tailwind'],
      backend: ['Node.js', 'MongoDB'],
    },
  },
];

// Tech icon component
const TechIcon: React.FC<TechIconProps> = ({ name }) => {
  const icons: Record<TechName, IconType> = {
    React: SiReact,
    'Next.js': SiNextdotjs,
    TypeScript: SiTypescript,
    Tailwind: SiTailwindcss,
    'Node.js': SiNodedotjs,
    MongoDB: SiMongodb,
  };

  const Icon = icons[name];
  return Icon ? <Icon className="h-5 w-5" /> : null;
};

const ProjectsSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-24 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Showcasing innovative solutions and technical excellence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800/80"
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub className="h-6 w-6" />
                  </Link>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.frontend.concat(project.tech.backend).map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 rounded-full bg-gray-100/80 px-3 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm dark:bg-gray-700/80 dark:text-gray-300"
                    >
                      <TechIcon name={tech} />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <FiStar className="h-4 w-4" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiFolder className="h-4 w-4" />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;