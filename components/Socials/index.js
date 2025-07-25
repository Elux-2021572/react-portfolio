import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <div className="flex items-center gap-2">
            {social.logo && (
              <img 
                src={social.logo} 
                alt={`${social.title} logo`}
                className="w-4 h-4 object-contain"
              />
            )}
            {social.title}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
