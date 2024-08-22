import React from 'react';

export function  Ranklist(){
    const users = [
        { id: 1, name: 'John Doe', points: 1000 },
        { id: 2, name: 'Jane Doe', points: 950 },
        { id: 3, name: 'Bob Smith', points: 850 },
        { id: 4, name: 'Alice Smith', points: 800 },
        { id: 5, name: 'Joe Johnson', points: 750 },
        { id: 6, name: 'John Doe', points: 1000 },
        { id: 7, name: 'Jane Doe', points: 950 },
        { id: 8, name: 'Bob Smith', points: 850 },
        { id: 9, name: 'Alice Smith', points: 800 },
        { id: 10, name: 'Joe Johnson', points: 750 },
        { id: 11, name: 'John Doe', points: 1000 },
        { id: 12, name: 'Jane Doe', points: 950 },
        { id: 13, name: 'Bob Smith', points: 850 },
        { id: 14, name: 'Alice Smith', points: 800 },
        { id: 15, name: 'Joe Johnson', points: 750 },
        { id: 11, name: 'John Doe', points: 1000 },
        { id: 12, name: 'Jane Doe', points: 950 },
        { id: 13, name: 'Bob Smith', points: 850 },
        { id: 14, name: 'Alice Smith', points: 800 },
        { id: 15, name: 'Joe Johnson', points: 750 },
    ];

    return (
        <div className=" w-full h-[90%]  bg-slate-100 shadow-md rounded-md p-4  mx-auto text-slate-950 flex flex-col">
            <h2 className="text-xl w-full h-[10%] font-semibold  pl-10 pt-6">Leaderboard</h2>
            <ul className='w-full h-[90%] overflow-scroll' >
                {users.map(user => (
                    <li key={user.id} className="flex items-center justify-between px-10 py-2 border-b border-gray-300 cursor-pointer">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold mr-4">{user.id}</span>
                            <img 
                                src={`https://via.placeholder.com/48`} 
                                alt="User Avatar" 
                                className="w-8 h-8 rounded-full mr-4" 
                            />
                            <span className="text-gray-800 font-semibold">{user.name}</span>
                        </div>
                        <span className="text-green-500 font-semibold">{user.points} Points</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
