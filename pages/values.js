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
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{values.title}</h1>
              <p className="text-xl mt-5 opacity-50">
                {values.description}
              </p>
              <div className="mt-2">
                <Socials />
              </div>

              {/* Valores Profesionales */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Mis Valores</h2>
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
                  {values.professionalValues.map((value) => (
                    <div
                      key={value.id}
                      className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border"
                    >
                      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {value.name}
                      </h3>
                      <p className="text-sm opacity-70">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marca Personal */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">{values.personalBrand.title}</h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg">
                  <blockquote className="text-xl italic text-center mb-4">
                    &ldquo;{values.personalBrand.description}&rdquo;
                  </blockquote>
                  <p className="text-lg text-center opacity-80">
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
