import React from "react";

const ProjectResume = ({ dates, type, position, bullets, company, logo }) => {
  const bulletsArray = Array.isArray(bullets) ? bullets : bullets.split(",");

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">
        <div className="flex items-center gap-3 mb-2">
          {logo && (
            <img 
              src={logo} 
              alt={`${company} logo`}
              className="w-8 h-8 object-contain"
            />
          )}
          <h2 className="text-lg font-bold">{position}</h2>
        </div>
        {bulletsArray && bulletsArray.length > 0 && (
          <ul className="list-disc ml-5">
            {bulletsArray.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet.trim()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
