import React, { useState } from 'react';

export function Circle(){
  const [skills] = useState([
    { title: 'C Level', percent: 95 },
    { title: 'DS Level', percent: 70 },
    { title: 'PS Level', percent: 90 },
    { title: 'Full Stack', percent: 70 },
    { title: 'Java Level', percent: 90 },
    { title: 'DBMS Level', percent: 70 },
  ]);

  const [currentSkill, setCurrentSkill] = useState(skills[0]);

  const circumference = 2 * Math.PI * 120;

  return (
    <main className="w-full h-full bg-slate-800 rounded p-10">
      <section className="w-full h-full flex justify-between">
        <div className=" h-full grid grid-cols-3 gap-10 ">
          {skills.map((skill) => (
            <button
              key={skill.title}
              onClick={() => setCurrentSkill(skill)}
              className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-500 rounded-md shadow-md h-16 w-48 hover:bg-blue-700 ${
                currentSkill.title === skill.title
                  ? 'font-bold  '
                  : ''
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>
        
        <div className="flex items-center justify-center ">
          <svg className="transform -rotate-90 w-72 h-72">
            <circle
              cx="145"
              cy="165"
              r="80"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="145"
              cy="165"
              r="80"
              stroke="currentColor"
              strokeWidth="20"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference}
              className="text-blue-500"
            />
          </svg>
          <span className="absolute text-5xl pl-10">{`${currentSkill.percent}%`}</span>
        </div>
      </section>
    </main>
  );
};

