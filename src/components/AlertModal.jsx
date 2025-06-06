import { useState, useContext } from 'react'
import { modalContext } from '../context/ModalContext'

function AlertModal({title, message, circleClass}) {

    const context = useContext(modalContext)
    return (
        <div className={`${context.modalOpen ? 'relative z-10' : 'hidden'}`}>
            <div
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${circleClass} sm:mx-0 sm:size-10`}>
                                    <div aria-hidden="true" className="size-6 text-red-600" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <div as="h3" className="text-base font-semibold text-gray-900">
                                        {title}
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                           {message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                            <button
                                type="button"
                               
                                onClick={() => context.setModalOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertModal
