import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import logo from "../src/asset/logo22.png";
import { menuData } from "./data/menu-data";
import image from "../src/asset/menu1.jpeg";

function App() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(["Drinks"])
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-black to-blue-800 text-white">
      <div className="max-w-4xl mx-auto p-6">
        <header className="flex gap-4 flex-col justify-center items-center text-center mb-12 pb-[50px]">
          <h1 className="pt-10 text-5xl font-bold mb-4 relative z-10 bg-clip-text  bg-gradient-to-br from-blue-700 fill-black to-pink-500 color-tr">
            안전제일주점
          </h1>
          <h1 className="text-[1.25rem] font-bold mb-4 relative z-10 bg-gradient-to-br from-blue-700 fill-black to-pink-500 color-tr">
            Safety First Pub
          </h1>
          <img
            className="w-[300px] h-[500px]   z-0"
            src={logo}
            alt="뽈ㄹ로로롤"
          />
          <div className="color-tr">
            <div className="text text-[1.25rem] bg-clip-text bg-gradient-to-br from-blue-700 fill-black to-pink-500 color-tr font-bold">
              안녕하세요 안전제일주점입니다.
              <br />
              <div className="pt-8 flex flex-col gap-1 ">
                <div className="mr-[auto] pl-[2.5rem]">오픈시간</div>
                <div>평일: 18:00 ~ 07:00</div>
                <div>주말: 18:00 ~ 07:00</div>
              </div>
              <div className="pt-8 flex flex-col gap-1 ">
                <div className="mr-[auto] pl-[2.5rem]">화장실</div>
                <div className="mr-[auto] pl-[2.5rem]">
                  위치: 1.5층 남녀 공용
                </div>
                <div className="mr-[auto] pl-[2.5rem]">비밀번호: 1233*</div>
              </div>
              <div className="pt-8 flex flex-col gap-1 ">
                <div className="mr-[auto] pl-[2.5rem]">인스타그램</div>
                <div className="mr-[auto] pl-[2.5rem]">
                  <a href="https://www.instagram.com/safety_first_moran?igsh=enlzaWljNHMxZm4z">
                    safety_first_moran
                  </a>
                </div>
              </div>
              <br />
            </div>
          </div>
        </header>

        <main>
          {menuData.map((section) => (
            <div key={section.title} className="mb-8">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between bg-black bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-colors"
              >
                <div className="flex items-center">
                  {section.icon}
                  <h2 className="text-2xl font-semibold ml-2">
                    {section.title}
                  </h2>
                </div>
                {openSections.has(section.title) ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>
              {openSections.has(section.title) && (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-colors"
                    >
                      <div className="flex justify-start gap-1 flex-col items-start w-full">
                        {item.img && (
                          <p className="flex items-center justify-center pb-5 ">
                            <img
                              className="w-full max-w-[700px] h-[auto] rounded-[1.5rem] aspect-square shadow-[0_35px_30px_-15px_rgba(0,0,0,1)]"
                              src={item.img}
                              alt="asd"
                            />
                          </p>
                        )}
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <span className="text-lg font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </main>

        <footer className="text-center mt-12 text-sm text-gray-400">
          <p>Please drink responsibly. Safety is our top priority.</p>
          <p className="mt-2">
            &copy; 2024 Safety First Pub. All rights reserved.
          </p>
          <p>App Developer: jaewon Kim </p>
          <p>
            <a href="https://www.instagram.com/ashe_s_one?igsh=MTRjcDV3MzU0c3U4ZQ%3D%3D&utm_source=qr">
              Developer instargram: ashe_s_one
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
