import React, { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
  ExclamationTriangleIcon,
  DocumentIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline'
import client from '../../.tina/__generated__/client'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function SearchModal(props) {
  const [open, setOpen] = useState(true)
  const [rawQuery, setRawQuery] = useState('')

  const onClose = props.onClose

  React.useEffect(() => {
    if (!open) {
      onClose()
    }
  }, [open, onClose])

  const [filteredDocuments, setFilteredDocuments] = React.useState([])

  React.useEffect(() => {
    const run = async () => {
      let filter = {}
      if (rawQuery.startsWith('#')) {
        filter = { title: { startsWith: rawQuery.slice(1) } }
      } else if (rawQuery.startsWith('>')) {
        filter = { description: { startsWith: rawQuery.slice(1) } }
      } else {
        filter = { title: { startsWith: rawQuery } }
      }
      const res = await client.queries.postConnection({
        filter: filter,
      })
      const documents = res.data.postConnection.edges.map((edge) => {
        return {
          id: edge.node._sys.filename,
          url: `/docs/${edge.node._sys.filename}`,
          name: edge.node.title,
        }
      })
      setFilteredDocuments(documents)
    }
    run()
  }, [rawQuery])

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setRawQuery('')}
      appear
    >
      <Dialog as="div" className="relative z-[100]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-gray-500 fixed inset-0 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="divide-gray-100 ring-black mx-auto max-w-xl transform divide-y overflow-hidden rounded-xl bg-black-20 shadow-2xl ring-1 ring-opacity-5 transition-all">
              <Combobox onChange={(item) => (window.location = item.url)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="text-gray-400 pointer-events-none absolute top-3.5 left-4 h-5 w-5"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="text-gray-800 placeholder-gray-400 h-12 w-full border-0 bg-transparent pr-4 pl-11 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setRawQuery(event.target.value)}
                  />
                </div>

                {filteredDocuments.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
                  >
                    {filteredDocuments.length > 0 && (
                      <li>
                        <h2 className="text-gray-900 text-xs font-semibold">
                          Documents
                        </h2>
                        <ul className="text-gray-700 -mx-4 mt-2 text-sm">
                          {filteredDocuments.map((document) => (
                            <Combobox.Option
                              key={document.id}
                              value={document}
                              className={({ active }) =>
                                classNames(
                                  'flex cursor-default select-none items-center px-4 py-2',
                                  active && 'bg-pink-60 text-white'
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <DocumentIcon
                                    className={classNames(
                                      'h-6 w-6 flex-none',
                                      active ? 'text-white' : 'text-gray-400'
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 flex-auto truncate">
                                    {document.name}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {rawQuery === '?' && (
                  <div className="px-6 py-14 text-center text-sm sm:px-14">
                    <LifebuoyIcon
                      className="text-gray-400 mx-auto h-6 w-6"
                      aria-hidden="true"
                    />
                    <p className="text-gray-900 mt-4 font-semibold">
                      Help with searching
                    </p>
                    <p className="text-gray-500 mt-2">
                      Use this tool to quickly search for documents across our
                      entire platform. You can also use the search modifiers
                      found in the footer below to limit the results to just
                      documents.
                    </p>
                  </div>
                )}

                {rawQuery !== '?' && filteredDocuments.length === 0 && (
                  <div className="px-6 py-14 text-center text-sm sm:px-14">
                    <ExclamationTriangleIcon
                      className="text-gray-400 mx-auto h-6 w-6"
                      aria-hidden="true"
                    />
                    <p className="text-gray-900 mt-4 font-semibold">
                      No results found
                    </p>
                    <p className="text-gray-500 mt-2">
                      We couldn’t find anything with that term. Please try
                      again.
                    </p>
                  </div>
                )}

                <div className="bg-gray-50 text-gray-700 flex flex-wrap items-center py-2.5 px-4 text-xs">
                  Type{' '}
                  <kbd
                    className={classNames(
                      'bg-white mx-1 flex h-5 w-5 items-center justify-center rounded border font-semibold sm:mx-2',
                      rawQuery.startsWith('#')
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-gray-400 text-gray-900'
                    )}
                  >
                    #
                  </kbd>{' '}
                  <span className="sm:hidden">for title search,</span>
                  <span className="hidden sm:inline">for title search ,</span>
                  <kbd
                    className={classNames(
                      'bg-white mx-1 flex h-5 w-5 items-center justify-center rounded border font-semibold sm:mx-2',
                      rawQuery.startsWith('>')
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-gray-400 text-gray-900'
                    )}
                  >
                    &gt;
                  </kbd>{' '}
                  for description search, and{' '}
                  <kbd
                    className={classNames(
                      'bg-white mx-1 flex h-5 w-5 items-center justify-center rounded border font-semibold sm:mx-2',
                      rawQuery === '?'
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-gray-400 text-gray-900'
                    )}
                  >
                    ?
                  </kbd>{' '}
                  for help.
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
