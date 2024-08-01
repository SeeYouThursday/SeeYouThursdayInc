import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { ProductProps } from "@/lib/util/types/product";
const PortfolioCard = ({
  id,
  title,
  href,
  description,
  shortDescrip,
  img_url,
  icon_url,
  stack,
  createdAt,
  updatedAt,
}: ProductProps) => {
  return (
    <div className="bg-slate-900 rounded-xl py-4 px-4 flex items-center shadow-2xl m-5 h-full vollkorn flex-col md:flex-row">
      {/* Circle with Title, Type, and Description */}
      <div className="bg-[#E8F2F3] h-56 w-56 rounded-xl md:rounded-full text-center m-2 flex justify-center items-center flex-col hover:hue-rotate-180">
        <h2 className="text-4xl text-[#F05331] font-semibold m-2">{title}</h2>
        <h3 className="text-black font-semibold text-lg">{shortDescrip}</h3>
        <p className="text-black m-1 p-1">{description}</p>
      </div>
      {/* Image and Stack */}
      <div className="flex justify-center flex-col items-center">
        <h4 className="bg-[#F05331] text-white mb-4 rounded-2xl px-4 py-2">
          Stack: {stack}
        </h4>
        <figure>
          <a href={href} target="blank" title="iball">
            <Image
              src={img_url}
              height={400}
              width={400}
              quality={100}
              alt={title}
              className="h-auto w-auto p-1 border-slate-600"
            />
            {/* img */}
          </a>
        </figure>
      </div>
    </div>
  );
};

export default PortfolioCard;
