import React from "react";

const SkillCard = ({ title, skills, position }) => {
  return (
    // min-w-[320px]: mobile screen each card will stack on each other
    <div
      className={`px-6 py-4 min-w-[320px] rounded-md
      border-1 border-slate-200/80 shadow-sm
       flex-1
      `}
      //    xl:fixed xl:top-[50vh] xl:-translate-y-1/2 xl:${position}  xl:w-[300px]  xl:text-white/80
    >
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((item) => (
          <ul key={item.category}>
            <h4 className="font-medium">{item.category}</h4>
            {item.list.map((skill, index) => (
              <li key={index} className="text-sm">
                {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
