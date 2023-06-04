'use client';

import { useState } from 'react';
import Link from 'next/link';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion, AnimatePresence } from 'framer-motion';

import { Tag, Project, projects, tagAreas, allTags } from '@/lib/projects-data';
import { Entries } from '@/lib/types';
import { Combobox } from '@/components/combobox';
import { TagBadge } from '@/components/tag-badge';

export const SkillsAndProjects = () => {
  const [filterMode, setFilterMode] = useState<'AND' | 'OR'>('OR');
  const [filter, setFilter] = useState<Tag[]>([]);
  const filterToUse =
    filterMode === 'AND'
      ? (project: Project) => filter.every((tag) => project.tags.includes(tag))
      : (project: Project) => filter.some((tag) => project.tags.includes(tag));
  const filteredProjects = filter.length ? projects.filter((project) => filterToUse(project)) : projects;
  const toggleTag = (tag: Tag) => () => {
    setFilter((c) => (c.includes(tag) ? c.filter((t) => t !== tag) : [...c, tag]));
  };

  return (
    <>
      <div className="mx-auto max-w-3xl text-center mt-36">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Click on a category or skill to add it to the project filter below.
        </p>
      </div>
      <div className="mt-8">
        {(Object.entries(tagAreas) as Entries<typeof tagAreas>).map(([area, tags]) => (
          <div key={area} className="mt-4">
            <button
              type="button"
              className={`rounded-full cursor-pointer text-lg font-semibold transition-colors ${
                filter.includes(area) ? 'text-primary-600 hover:text-primary-500' : 'text-gray-700 hover:text-gray-600'
              }`}
              onClick={toggleTag(area)}
            >
              {area}
            </button>
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <TagBadge key={tag} tag={tag} isSelected={filter.includes(tag)} onClick={toggleTag(tag)} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-3xl text-center mt-24 mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Some of the projects I worked on. You can use the filter below to filter by tech or area.
        </p>
      </div>
      <Combobox selected={filter} setSelected={setFilter} options={allTags} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="block text-sm font-medium leading-5 text-gray-700 mt-2">Mode</label>
      <fieldset className="mt-1">
        <legend className="sr-only">Filter mode</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {(
            [
              { value: 'OR', label: 'Show projects including any of the selected tags (OR)' },
              { value: 'AND', label: 'Show only the projects that include all selected tags (AND)' },
            ] as const
          ).map((filterModeOption) => (
            <div key={filterModeOption.value} className="flex items-center">
              <input
                id={filterModeOption.value}
                name="notification-method"
                type="radio"
                checked={filterMode === filterModeOption.value}
                onChange={() => setFilterMode(filterModeOption.value)}
                className="h-4 w-4 text-secondary-600 border-gray-300 transition-colors"
              />
              <label htmlFor={filterModeOption.value} className="pl-3 block text-sm font-medium text-gray-700">
                {filterModeOption.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-2">
        <AnimatePresence initial={false}>
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              key={project.title}
              className="flex flex-col items-start justify-between"
            >
              <motion.div layout>
                <div className="relative w-full">
                  <Zoom>
                    <img
                      src={project.image.src}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                  </Zoom>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none" />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                  {project.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} isSelected={filter.includes(tag)} onClick={toggleTag(tag)} small />
                  ))}
                </div>
              </motion.div>

              <motion.div layout>
                <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900">{project.title}</h3>
                <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-700">{project.brief}</h4>
                <p className="mt-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </motion.div>
              <motion.p layout className="mt-3">
                {project.githubLink || project.websiteLink ? (
                  <span className="inline-flex gap-x-4">
                    {project.websiteLink && (
                      <Link
                        href={project.websiteLink}
                        className="inline-flex items-center gap-x-1.5 text-sm font-medium leading-6 text-secondary-600 hover:text-indigo-500"
                      >
                        Go to website
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        className="inline-flex items-center gap-x-1.5 text-sm font-medium leading-6 text-secondary-600 hover:text-indigo-500"
                      >
                        See on GitHub
                      </Link>
                    )}
                  </span>
                ) : (
                  <span className="text-sm font-medium leading-6 text-gray-600 cursor-default">
                    Proprietary project
                  </span>
                )}
              </motion.p>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
