import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showValues } from "../data/portfolio.json";
import { values } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Values = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showValues) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Values
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
                mount && theme.theme === "dark" 
                  ? "bg-slate-900" 
                  : "bg-gray-50"
              } max-w-4xl p-8 tablet:p-12 laptop:p-20 rounded-xl`}
            >
              <h1 className="text-3xl laptop:text-4xl font-bold text-center mb-6">
                {values.title}
              </h1>
              <p className="text-lg laptop:text-xl text-center mb-8 opacity-80">
                {values.description}
              </p>
              
              <div className="mt-4 flex justify-center">
                <Socials />
              </div>

              {/* Valores Profesionales */}
              <div className="mt-10">
                <h2 className="text-2xl laptop:text-3xl font-bold mb-8 text-center">
                  Mis Valores
                </h2>
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
                  {values.professionalValues.map((value) => (
                    <div
                      key={value.id}
                      className={`${
                        mount && theme.theme === "dark" 
                          ? "bg-slate-800 hover:bg-slate-700" 
                          : "bg-white hover:bg-gray-50"
                      } p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300`}
                    >
                      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {value.name}
                      </h3>
                      <p className="text-sm leading-relaxed opacity-90">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marca Personal */}
              <div className="mt-12">
                <h2 className="text-2xl laptop:text-3xl font-bold mb-8 text-center">
                  {values.personalBrand.title}
                </h2>
                <div className={`${
                  mount && theme.theme === "dark" 
                    ? "bg-gradient-to-r from-slate-800 to-slate-700" 
                    : "bg-gradient-to-r from-blue-50 to-purple-50"
                } p-8 rounded-xl shadow-lg`}>
                  <blockquote className="text-xl laptop:text-2xl italic text-center mb-6 font-medium">
                    &ldquo;{values.personalBrand.description}&rdquo;
                  </blockquote>
                  <p className="text-lg laptop:text-xl text-center leading-relaxed opacity-90">
                    {values.personalBrand.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Values;
