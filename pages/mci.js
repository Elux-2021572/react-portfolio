import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showMCI } from "../data/portfolio.json";
import { mci } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const MCI = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showMCI) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit MCI
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
              } max-w-5xl p-8 tablet:p-12 laptop:p-20 rounded-xl`}
            >
              <h1 className="text-3xl laptop:text-4xl font-bold text-center mb-6">
                {mci.title}
              </h1>
              <p className="text-lg laptop:text-xl text-center mb-8 opacity-80">
                {mci.description}
              </p>
              
              <div className="mt-4 flex justify-center">
                <Socials />
              </div>

              {/* Contenido Principal */}
              <div className="mt-12">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div className="text-lg laptop:text-xl leading-relaxed whitespace-pre-line opacity-90">
                    {mci.content}
                  </div>
                </div>
              </div>

              {/* Sección destacada */}
              <div className={`mt-12 ${
                mount && theme.theme === "dark" 
                  ? "bg-gradient-to-r from-slate-800 to-slate-700" 
                  : "bg-gradient-to-r from-blue-50 to-purple-50"
              } p-8 rounded-xl shadow-lg`}>
                <blockquote className="text-xl laptop:text-2xl italic text-center font-medium">
                  &ldquo;Mi camino profesional no ha sido lineal, pero ha sido profundamente intencional.&rdquo;
                </blockquote>
              </div>

              {/* Timeline visual simple */}
              <div className="mt-12">
                <h2 className="text-2xl laptop:text-3xl font-bold mb-8 text-center">
                  Mi Evolución Profesional
                </h2>
                <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
                  <div className={`${
                    mount && theme.theme === "dark" 
                      ? "bg-slate-800 hover:bg-slate-700" 
                      : "bg-white hover:bg-gray-50"
                  } p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-600 text-center hover:shadow-xl transition-all duration-300`}>
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Marketing Digital</h3>
                    <p className="text-sm leading-relaxed opacity-90">Hotmart - Comprensión del entorno comercial y tecnológico</p>
                  </div>
                  
                  <div className={`${
                    mount && theme.theme === "dark" 
                      ? "bg-slate-800 hover:bg-slate-700" 
                      : "bg-white hover:bg-gray-50"
                  } p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-600 text-center hover:shadow-xl transition-all duration-300`}>
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Programación</h3>
                    <p className="text-sm leading-relaxed opacity-90">JavaScript, React, Node.js - Soluciones tecnológicas</p>
                  </div>
                  
                  <div className={`${
                    mount && theme.theme === "dark" 
                      ? "bg-slate-800 hover:bg-slate-700" 
                      : "bg-white hover:bg-gray-50"
                  } p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-600 text-center hover:shadow-xl transition-all duration-300`}>
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Ciencia & Filosofía</h3>
                    <p className="text-sm leading-relaxed opacity-90">Física, matemáticas y pensamiento crítico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MCI;
