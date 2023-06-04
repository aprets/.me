'use client';

import { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react';
import { Combobox as HuiCombobox, Transition } from '@headlessui/react';
import { HiChevronUpDown, HiCheck, HiXMark } from 'react-icons/hi2';

import { TagBadge } from './tag-badge';

export const Combobox = <T extends string>({
  options,
  selected,
  setSelected,
}: {
  options: readonly T[];
  selected: T[];
  setSelected: Dispatch<SetStateAction<T[]>>;
}) => {
  const [query, setQuery] = useState('');

  const comboboxInputRef = useRef<HTMLInputElement>(null);

  return (
    <HuiCombobox
      value={selected}
      onChange={(value) => {
        setSelected(value);
      }}
      multiple
    >
      <HuiCombobox.Label className="block text-sm font-medium leading-5 text-gray-700 mb-1">Filter</HuiCombobox.Label>

      <div className="relative">
        <span className="inline-block w-full rounded-md shadow-sm">
          <HuiCombobox.Button as="div" className="relative w-full" role="button">
            <div className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-primary-700 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-700 sm:text-sm sm:leading-5">
              <span className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <Transition
                    show={selected.includes(option)}
                    as="span"
                    appear
                    key={option}
                    enter="transition-opacity"
                    leave="transition-opacity"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <TagBadge
                      as="span"
                      tag={option}
                      isSelected
                      onRemove={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSelected((existing) => existing.filter((p) => p !== option));
                        comboboxInputRef.current?.focus();
                      }}
                    />
                  </Transition>
                ))}
                <HuiCombobox.Input
                  ref={comboboxInputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="border-none p-0 py-0.5 focus:ring-0 flex-grow"
                  placeholder="Search or pick tags..."
                />
              </span>
              <button
                type="button"
                aria-label={selected.length > 0 ? 'clear' : 'open'}
                className="absolute inset-y-0 right-0 flex items-center pr-2 rounded-md focus-within:outline-none cursor-pointer"
                onClick={(e) => {
                  if (selected.length) {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelected([]);
                    setQuery('');
                    comboboxInputRef.current?.focus();
                  }
                }}
              >
                {selected.length > 0 ? (
                  <HiXMark className="h-5 w-5 text-gray-400" />
                ) : (
                  <HiChevronUpDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </HuiCombobox.Button>
        </span>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-20 border">
            <HuiCombobox.Options className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
              {options
                .filter((option) => option.toLowerCase().includes(query.toLowerCase()))
                .map((option) => (
                  <HuiCombobox.Option
                    key={option}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none'
                      ${active ? 'bg-secondary-600 text-white' : 'text-gray-900'}`
                    }
                  >
                    {({ active, selected: isSelected }) => (
                      <>
                        <span className={`block truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}>
                          {option}
                        </span>
                        {isSelected && (
                          <span
                            className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                              active ? 'text-white' : 'text-secondary-600'
                            }`}
                          >
                            <HiCheck className="h-5 w-5" />
                          </span>
                        )}
                      </>
                    )}
                  </HuiCombobox.Option>
                ))}
            </HuiCombobox.Options>
          </div>
        </Transition>
      </div>
    </HuiCombobox>
  );
};
