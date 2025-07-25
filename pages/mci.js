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
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-5xl p-8 tablet:p-12 laptop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl laptop:text-4xl font-bold text-center mb-4">
                {mci.title}
              </h1>
              <p className="text-lg laptop:text-xl text-center opacity-70 mb-8">
                {mci.description}
              </p>
              
              <div className="mt-4 flex justify-center">
                <Socials />
              </div>

              {/* Contenido Principal */}
              <div className="mt-12">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div className="text-lg laptop:text-xl leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">
                    {mci.content}
                  </div>
                </div>
              </div>

              {/* Sección destacada */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg">
                <blockquote className="text-xl laptop:text-2xl italic text-center font-medium">
                  &ldquo;Mi camino profesional no ha sido lineal, pero ha sido profundamente intencional.&rdquo;
                </blockquote>
              </div>

              {/* Timeline visual simple */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-8 text-center">Mi Evolución Profesional</h2>
                <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Marketing Digital</h3>
                    <p className="text-sm opacity-70">Hotmart - Comprensión del entorno comercial y tecnológico</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Programación</h3>
                    <p className="text-sm opacity-70">JavaScript, React, Node.js - Soluciones tecnológicas</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Ciencia & Filosofía</h3>
                    <p className="text-sm opacity-70">Física, matemáticas y pensamiento crítico</p>
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
