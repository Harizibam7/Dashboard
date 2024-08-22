import React from 'react';

export function Leave() {
    return <div className='flex flex-col'>
        <form className="h-full w-full py-10 px-20 flex flex-col gap-5">
            <div className='font-bold text-xl'>Apply Leave</div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" htmlFor="grid-password">
                        Leave Type
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password"
                        type="text"
                        placeholder="leave type"
                    />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6" >
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        From Date
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                    />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      To Date
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6" >
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        From Time
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                    />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      To Time
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div class="w-full">
                <label for="message" class="block mb-2 text-md font-bold text-gray-200 dark:text-white">Reason</label>
                <textarea id="message" rows="4" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Leave a comment..."></textarea>
            </div>
        </form>
   
    </div>
};


