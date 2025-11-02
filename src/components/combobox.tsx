'use client';

import { Dispatch, Fragment, SetStateAction, useId, useRef, useState } from 'react';
import {
  Combobox as HuiCombobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  Label,
  Transition,
} from '@headlessui/react';
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
  const inputId = useId();

  return (
    <HuiCombobox
      value={selected}
      onChange={(value: T[]) => {
        setSelected(value);
      }}
      multiple
    >
      <Label htmlFor={inputId} className="block text-sm font-medium leading-5 text-gray-700 mb-1">
        Filter
      </Label>

      <div className="relative">
        <span className="inline-block w-full rounded-md shadow-sm">
          <ComboboxButton
            as="div"
            className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-16 text-left transition duration-150 ease-in-out focus-within:border-primary-700 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-700 sm:text-sm sm:leading-5"
          >
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
                  <button
                    type="button"
                    aria-hidden="true"
                    tabIndex={-1}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
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
                  </button>
                </Transition>
              ))}
              <ComboboxInput
                id={inputId}
                ref={comboboxInputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="border-none p-0 py-0.5 focus:ring-0 flex-grow"
                placeholder="Search or pick tags..."
              />
            </span>
            {selected.length > 0 && (
              <button
                type="button"
                aria-label="clear"
                className="absolute inset-y-0 right-8 flex items-center pr-2 rounded-md focus-within:outline-none cursor-pointer"
                onPointerDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseDown={(e) => {
                  // Keep the combobox open and input focused
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelected([]);
                  setQuery('');
                  comboboxInputRef.current?.focus();
                }}
              >
                <HiXMark className="h-5 w-5 text-gray-400" />
              </button>
            )}
            <button type="button" aria-label='toggle dropdown' className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown className="h-5 w-5 text-gray-400" />
            </button>
          </ComboboxButton>
        </span>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-20 border">
            <ComboboxOptions className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
              {options
                .filter((option) => option.toLowerCase().includes(query.toLowerCase()))
                .map((option) => (
                  <ComboboxOption
                    key={option}
                    value={option}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none text-gray-900 data-[focus]:bg-secondary-600 data-[focus]:text-white"
                  >
                    <span className="block truncate group-data-[selected]:font-semibold">{option}</span>
                    <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-secondary-600 group-data-[selected]:flex group-data-[focus]:text-white">
                      <HiCheck className="h-5 w-5" />
                    </span>
                  </ComboboxOption>
                ))}
            </ComboboxOptions>
          </div>
        </Transition>
      </div>
    </HuiCombobox>
  );
};
