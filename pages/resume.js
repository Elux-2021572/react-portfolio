import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <div className="flex mob:flex-col desktop:flex-row items-start gap-6 mb-8">
                <div className="mob:w-full desktop:w-3/4">
                  <h1 className="text-3xl font-bold">{name}</h1>
                  <h2 className="text-xl mt-5">{resume.tagline}</h2>
                  <h2 className="w-full text-xl mt-5 opacity-50">
                    {resume.description}
                  </h2>
                </div>
                {resume.profileImage && (
                  <div className="mob:w-full desktop:w-1/4 flex justify-center">
                    <img 
                      src={resume.profileImage} 
                      alt={`${name} profile`}
                      className="w-32 h-32 rounded-full object-cover shadow-lg"
                    />
                  </div>
                )}
              </div>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets, company, logo }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                      company={company}
                      logo={logo}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2 space-y-4">
                  {resume.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-4">
                      <h2 className="text-lg font-semibold">{edu.degree}</h2>
                      <h3 className="text-md text-blue-600 dark:text-blue-400">{edu.institution}</h3>
                      <div className="flex items-center gap-2 text-sm opacity-75 mt-1">
                        <span>{edu.dates}</span>
                        {edu.status && <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">{edu.status}</span>}
                      </div>
                      <p className="text-sm mt-2 opacity-50">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
<div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="grid mob:grid-cols-1 desktop:grid-cols-3 gap-6 mt-5">
                  {resume.languages && (
                    <div>
                      <h2 className="text-lg mb-3">Languages</h2>
                      <div className="space-y-4">
                        {resume.languages.map((language, index) => (
                          <div key={index} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm border">
                            <div className="flex items-center mb-2">
                              <img src={language.logo} alt={`${language.name} logo`} className="w-8 h-8 mr-3"/>
                              <h3 className="font-semibold">{language.name}</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{language.description}</p>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{language.percentage}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div>
                      <h2 className="text-lg mb-3">Frameworks</h2>
                      <div className="space-y-4">
                        {resume.frameworks.map((framework, index) => (
                          <div key={index} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm border">
                            <div className="flex items-center mb-2">
                              <img src={framework.logo} alt={`${framework.name} logo`} className="w-8 h-8 mr-3"/>
                              <h3 className="font-semibold">{framework.name}</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{framework.description}</p>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{framework.percentage}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {resume.others && (
                    <div>
                      <h2 className="text-lg mb-3">Others</h2>
                      <div className="space-y-4">
                        {resume.others.map((other, index) => (
                          <div key={index} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm border">
                            <div className="flex items-center mb-2">
                              <img src={other.logo} alt={`${other.name} logo`} className="w-8 h-8 mr-3"/>
                              <h3 className="font-semibold">{other.name}</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{other.description}</p>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{other.percentage}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
