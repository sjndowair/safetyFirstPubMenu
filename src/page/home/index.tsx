import { useState } from "react";
import { Beer, Coffee, Utensils, ChevronDown, ChevronUp } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    title: "Drinks",
    icon: <Beer className="w-6 h-6" />,
    items: [
      { name: "Safety Lager", description: "Our signature brew", price: "$5" },
      {
        name: "Caution Ale",
        description: "Amber ale with a kick",
        price: "$6",
      },
      {
        name: "Protective Porter",
        description: "Rich and smooth",
        price: "$6",
      },
      {
        name: "Secure Cider",
        description: "Apple cider with a twist",
        price: "$5",
      },
    ],
  },
  {
    title: "Non-Alcoholic",
    icon: <Coffee className="w-6 h-6" />,
    items: [
      {
        name: "Vigilant Virgin Mojito",
        description: "Minty fresh mocktail",
        price: "$4",
      },
      {
        name: "Precaution Punch",
        description: "Fruity and refreshing",
        price: "$4",
      },
      {
        name: "Alert Americano",
        description: "Strong coffee to keep you safe",
        price: "$3",
      },
      {
        name: "Guarded Green Tea",
        description: "Antioxidant-rich brew",
        price: "$3",
      },
    ],
  },
  {
    title: "Food",
    icon: <Utensils className="w-6 h-6" />,
    items: [
      {
        name: "Shield Sliders",
        description: "Mini burgers with our special sauce",
        price: "$10",
      },
      {
        name: "Caution Nachos",
        description: "Loaded nachos with all the fixings",
        price: "$12",
      },
      {
        name: "Protected Pizza",
        description: "12-inch pizza with your choice of toppings",
        price: "$14",
      },
      {
        name: "Safety Wings",
        description: "Choose your heat level",
        price: "$11",
      },
    ],
  },
];

export default function PubMenu() {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-black to-blue-600 text-white">
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Safety First Pub</h1>
          <img
            src="/public/KakaoTalk_Image_2024-10-29-22-08-48.png"
            alt="뽈로로롤"
            className="m-x-[500px] h-[300px]"
          />
          <p className="text-xl">Where caution meets celebration!</p>
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
                      <div className="flex justify-between items-start">
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
        </footer>
      </div>
    </div>
  );
}
