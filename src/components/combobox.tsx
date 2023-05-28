'use client';

import { Fragment, MutableRefObject, useRef, useState } from 'react';
import type { Ref } from 'react';
import { Combobox, Transition } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2';

type Person = {
  id: number;
  name: string;
};

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ComboBox = () => {
  const [query, setQuery] = useState('');
  const [activePersons, setActivePersons] = useState([people[2], people[3]]);

  const fucked = useRef(false);
  const comboboxButtonRef = useRef<HTMLButtonElement>(null);

  console.dir(activePersons);

  return (
    <div className="w-full max-w-4xl mb-96">
      <div className="space-y-1">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log([...new FormData(e.currentTarget).entries()]);
          }}
        >
          <Combobox
            value={activePersons}
            onChange={(value) => {
              setActivePersons(value);
            }}
            multiple
          >
            {({ open }) => (
              <>
                <Combobox.Label className="block text-sm font-medium leading-5 text-gray-700">
                  Assigned to
                </Combobox.Label>

                <div className="relative">
                  <span className="inline-block w-full rounded-md shadow-sm">
                    <div className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-blue-700 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-700 sm:text-sm sm:leading-5">
                      <span className="block flex flex-wrap gap-2">
                        {activePersons.map((person) => (
                          <span key={person.id} className="flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5">
                            <span>{person.name}</span>
                            <svg
                              className="h-4 w-4 cursor-pointer"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setActivePersons((existing) => existing.filter((p) => p !== person));
                              }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        ))}
                        <Combobox.Input
                          onChange={(event) => setQuery(event.target.value)}
                          className="border-none p-0 focus:ring-0 flex-grow"
                          placeholder="Search..."
                          onFocus={() => {
                            if (!open && !fucked.current) comboboxButtonRef.current?.click();
                            fucked.current = false;
                          }}
                        />
                      </span>
                      <Combobox.Button
                        ref={comboboxButtonRef}
                        className="absolute inset-y-0 right-0 flex items-center pr-2"
                        onClick={(e) => {
                          fucked.current = true;
                          if (open && activePersons.length) {
                            e.preventDefault();
                            e.stopPropagation();
                            setActivePersons([]);
                          }
                        }}
                      >
                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                          <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Combobox.Button>
                    </div>
                  </span>

                  <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                    <Combobox.Options className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
                      {people
                        .filter((person) => person.name.toLowerCase().includes(query.toLowerCase()))
                        .map((person) => (
                          <Combobox.Option
                            key={person.id}
                            value={person}
                            className={({ active }) =>
                              classNames(
                                'relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none',
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                              )
                            }
                          >
                            {({ active, selected }) => (
                              <>
                                <span
                                  className={classNames('block truncate', selected ? 'font-semibold' : 'font-normal')}
                                >
                                  {person.name}
                                </span>
                                {selected && (
                                  <span
                                    className={classNames(
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                      active ? 'text-white' : 'text-indigo-600',
                                    )}
                                  >
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                    </Combobox.Options>
                  </div>
                </div>
              </>
            )}
          </Combobox>
          <button className="mt-2 inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};