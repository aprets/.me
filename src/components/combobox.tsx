'use client';

import { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react';
import { Combobox as HuiCombobox, Transition } from '@headlessui/react';
import { HiChevronUpDown, HiCheck, HiXMark } from 'react-icons/hi2';

type Option = {
  label: string;
  value: string;
};

export const Combobox = <T extends Option>({
  options,
  selected,
  setSelected,
}: {
  options: T[];
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
      <HuiCombobox.Label className="block text-sm font-medium leading-5 text-neutral-700 mb-1">
        Filter
      </HuiCombobox.Label>

      <div className="relative">
        <span className="inline-block w-full rounded-md shadow-sm">
          <HuiCombobox.Button as="div" className="relative w-full">
            <div className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-primary-700 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-700 sm:text-sm sm:leading-5">
              <span className="flex flex-wrap gap-2">
                {selected.map((option) => (
                  <span
                    key={option.value}
                    className="flex items-center gap-1 rounded bg-primary-100 px-2 py-0.5 text-neutral-900"
                  >
                    <span>{option.label}</span>
                    <HiXMark
                      className="h-4 w-4 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSelected((existing) => existing.filter((p) => p !== option));
                        comboboxInputRef.current?.focus();
                      }}
                    />
                  </span>
                ))}
                <HuiCombobox.Input
                  ref={comboboxInputRef}
                  onChange={(event) => setQuery(event.target.value)}
                  className="border-none p-0 focus:ring-0 flex-grow"
                  placeholder="Search or pick tags..."
                />
              </span>
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-2 rounded-md focus-within:outline-none cursor-pointer"
                onClick={(e) => {
                  if (selected.length) {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelected([]);
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
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
            <HuiCombobox.Options className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
              {options
                .filter((option) => option.label.toLowerCase().includes(query.toLowerCase()))
                .map((option) => (
                  <HuiCombobox.Option
                    key={option.value}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none'
                      ${active ? 'bg-secondary-600 text-white' : 'text-neutral-900'}`
                    }
                  >
                    {({ active, selected: isSelected }) => (
                      <>
                        <span className={`block truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}>
                          {option.label}
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
