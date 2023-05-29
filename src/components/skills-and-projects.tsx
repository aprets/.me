'use client';

import { useState } from 'react';

import { Tag, Project, projects, tagAreas, allTags } from '@/lib/projects-data';
import { Entries } from '@/lib/types';

import { Combobox } from './combobox';

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
      <h1 className="font-bold text-3xl mb-4 text-neutral-900">Skills</h1>
      <h2 className="text-lg mb-2 text-neutral-700">
        Click on a category or skill to add it to the project filter below.
      </h2>
      <div className="mb-6">
        {(Object.entries(tagAreas) as Entries<typeof tagAreas>).map(([area, tags]) => (
          <div key={area} className="mb-2">
            <button
              type="button"
              className={`rounded-full cursor-pointer hover:text-primary-600 ${
                filter.includes(area) ? 'text-primary-700' : 'text-neutral-700'
              } text-lg font-semibold active:translate-y-[1px] mb-1`}
              onClick={toggleTag(area)}
            >
              {area}
            </button>
            <div className="flex flex-row flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`border-none rounded-full cursor-pointer hover:bg-primary-100 text-sm line font-medium px-2 py-1 active:translate-y-[1px] ${
                    filter.includes(tag) ? 'bg-primary-100 text-neutral-800' : 'bg-neutral-100 text-neutral-800'
                  }`}
                  onClick={toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h1 className="font-bold text-3xl mb-4 text-neutral-900">Projects</h1>
      <h2 className="text-lg mb-4 text-neutral-700">
        Some of the projects I worked on. You can use the filter below to filter by tech or area.
      </h2>
      <Combobox selected={filter} setSelected={setFilter} options={allTags} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="block text-sm font-medium leading-5 text-neutral-700 mt-2">Mode</label>
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
                defaultChecked={filterMode === filterModeOption.value}
                onClick={() => setFilterMode(filterModeOption.value)}
                className="h-4 w-4 text-secondary-600 border-gray-300"
              />
              <label htmlFor={filterModeOption.value} className="pl-3 block text-sm font-medium text-neutral-700">
                {filterModeOption.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </>
  );
};
