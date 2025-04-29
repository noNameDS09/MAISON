"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/components/ui/use-outside-click";

const menuItems = [
  {
    category: 'Starters',
    items: [
      { name: 'Truffle Burrata', description: 'Fresh burrata, black truffle, aged balsamic', price: '24', src: 'https://images.pexels.com/photos/18675006/pexels-photo-18675006/free-photo-of-close-up-of-a-meal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { name: 'Foie Gras', description: 'House-made terrine, brioche, fig jam', price: '32', src: 'https://images.pexels.com/photos/7214484/pexels-photo-7214484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { name: 'Caviar Selection', description: 'Traditional garnishes, blinis', price: '95', src: 'https://images.pexels.com/photos/8112406/pexels-photo-8112406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ]
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Wagyu Beef Tenderloin', description: 'Grade A5, seasonal vegetables, red wine jus', price: '145', src: 'https://www.kitchenmess.com/wp-content/uploads/2014/12/pan-seared-wagyu-beef-7-of-7.jpg' },
      { name: 'Dover Sole', description: 'Wild caught, brown butter, capers, lemon', price: '85', src: 'https://therockfish.co.uk/cdn/shop/articles/2023-09-05-Dover-Sole-salad-potatoes-003-X2_1.jpg?v=1700654610' },
      { name: 'Lobster Thermidor', description: 'Maine lobster, cognac, gruyère', price: '110', src: 'https://static01.nyt.com/images/2024/02/09/multimedia/LH-lobster-thermidor-plzk/LH-lobster-thermidor-plzk-mediumSquareAt3X.jpg' },
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Valrhona Chocolate Soufflé', description: 'Grand cru chocolate, vanilla ice cream', price: '28', src: 'https://images.pexels.com/photos/3599974/pexels-photo-3599974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { name: 'Crêpes Suzette', description: 'Orange-butter sauce, tableside flambé', price: '26', src: 'https://static01.nyt.com/images/2016/05/28/dining/28COOKING-CREPES-SUZETTE1/28COOKING-CREPES-SUZETTE1-superJumbo.jpg' },
      { name: 'Cheese Selection', description: 'Curated French & Italian cheeses', price: '35', src: 'https://images.pexels.com/photos/8472931/pexels-photo-8472931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ]
  }
];

export function MenuSection() {
  const [active, setActive] = useState<{ category: string; item: typeof menuItems[0]['items'][0] } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <section id="menu" className="py-24 bg-[#202020]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-white">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {menuItems.map((category) => (
              <div key={category.category}>
                <h3 className="text-2xl font-serif text-[#C8A97E] mb-8">{category.category}</h3>
                <ul className="space-y-8">
                  {category.items.map((item) => (
                    <motion.li
                      layoutId={`card-${category.category}-${item.name}-${id}`}
                      key={`card-${category.category}-${item.name}-${id}`}
                      onClick={() => setActive({ category: category.category, item })}
                      className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-700 rounded-xl cursor-pointer border border-neutral-700"
                    >
                      <motion.div layoutId={`image-${category.category}-${item.name}-${id}`} className="h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.src}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                          width={96}
                          height={96}
                        />
                      </motion.div>
                      <div className="flex-1 ml-4">
                        <motion.h3
                          layoutId={`title-${category.category}-${item.name}-${id}`}
                          className="font-medium text-white text-center md:text-left"
                        >
                          {item.name}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${category.category}-${item.description}-${id}`}
                          className="text-gray-400 text-center md:text-left"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                      <motion.span
                        layoutId={`price-${category.category}-${item.name}-${id}`}
                        className="px-4 py-2 text-sm rounded-full font-bold bg-[#C8A97E] text-black mt-4 md:mt-0"
                      >
                        ${item.price}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {menuItems.map((category) => (
        <AnimatePresence key={`animate-${category.category}`}>
          {active && active.category === category.category && (
            <div className="fixed inset-0 grid place-items-center z-[100] bg-black/20">
              <motion.button
                key={`button-${active.category}-${active.item.name}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.category}-${active.item.name}-${id}`}
                ref={ref}
                className="w-[calc(100vw-10vw)] md:w-full max-w-[500px] h-fit rounded-3xl md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.category}-${active.item.name}-${id}`}>
                  <img
                    src={active.item.src}
                    alt={active.item.name}
                    className="w-full h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                    width={320}
                    height={320}
                  />
                </motion.div>
                <div className="p-6 flex flex-col gap-4">
                  <motion.h3
                    layoutId={`title-${active.category}-${active.item.name}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200"
                  >
                    {active.item.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.category}-${active.item.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {active.item.description}
                  </motion.p>
                  <motion.span
                    layoutId={`price-${active.category}-${active.item.name}-${id}`}
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white w-max"
                  >
                    ${active.item.price}
                  </motion.span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      ))}
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
