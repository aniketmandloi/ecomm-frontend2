import React from "react";

// Adjust this for Vite's image imports
import coffeeLong1 from "/public/LongImages/coffeeLong1.jpg";
import coffeeLong2 from "/public/LongImages/coffeeLong2.jpg";
import coffeeLong3 from "/public/LongImages/coffeeLong3.jpg";
import coffeeLong4 from "/public/LongImages/coffeeLong4.jpg";
import coffeeLong5 from "/public/LongImages/coffeeLong5.jpg";
// import coffeeLong6 from "/public/coffeeLong6.jpg";
import coffeeLong7 from "/public/LongImages/coffeeLong7.jpg";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel"; // Adjust path as per Vite setup

interface CoffeeCard {
  category: string;
  title: string;
  src: string;
  content: JSX.Element;
}

export function CoffeeCarouselDemo(): JSX.Element {
  const cards = coffeeData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h3 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore Our Coffee Collection.
      </h3>
      <div className="relative max-w-[calc(100%+4rem)] overflow-hidden">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

interface CoffeeContentProps {
  title: string;
  description: string;
  imageSrc: string;
}

const CoffeeContent: React.FC<CoffeeContentProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <img
        src={imageSrc}
        alt={title}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const coffeeData: CoffeeCard[] = [
  {
    category: "Coffee",
    title: "Brewed Coffee Perfection",
    src: coffeeLong1,
    content: (
      <CoffeeContent
        title="Brewed Coffee Perfection"
        description="Experience the rich aroma and flavor of our classic brewed coffee."
        imageSrc={coffeeLong1}
      />
    ),
  },
  {
    category: "Mugs",
    title: "Stylish Coffee Mugs",
    src: coffeeLong2,
    content: (
      <CoffeeContent
        title="Stylish Coffee Mugs"
        description="Add a touch of elegance to your coffee time with our exclusive mug collection."
        imageSrc={coffeeLong2}
      />
    ),
  },
  {
    category: "Chocolate",
    title: "Coffee Bars with a Twist",
    src: coffeeLong3,
    content: (
      <CoffeeContent
        title="Coffee Bars with a Twist"
        description="Indulge in our coffee-infused chocolate bars, perfect for a quick treat."
        imageSrc={coffeeLong3}
      />
    ),
  },
  {
    category: "Coffee Beans",
    title: "Premium Coffee Beans",
    src: coffeeLong4,
    content: (
      <CoffeeContent
        title="Premium Coffee Beans"
        description="Handpicked coffee beans for a superior brewing experience."
        imageSrc={coffeeLong4}
      />
    ),
  },
  {
    category: "Specialty Drinks",
    title: "Caramel Latte Bliss",
    src: coffeeLong5,
    content: (
      <CoffeeContent
        title="Caramel Latte Bliss"
        description="Sweet, creamy caramel latte made with love for coffee lovers."
        imageSrc={coffeeLong5}
      />
    ),
  },
  {
    category: "Specialty Drinks",
    title: "Caramel Latte Bliss",
    src: coffeeLong4,
    content: (
      <CoffeeContent
        title="Caramel Latte Bliss"
        description="Sweet, creamy caramel latte made with love for coffee lovers."
        imageSrc={coffeeLong4}
      />
    ),
  },
  {
    category: "Specialty Drinks",
    title: "Caramel Latte Bliss",
    src: coffeeLong7,
    content: (
      <CoffeeContent
        title="Caramel Latte Bliss"
        description="Sweet, creamy caramel latte made with love for coffee lovers."
        imageSrc={coffeeLong7}
      />
    ),
  },
];
