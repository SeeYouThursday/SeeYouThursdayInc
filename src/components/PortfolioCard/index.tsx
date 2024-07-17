import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  Accordion,
  AccordionItem,
} from '@nextui-org/react';
import { ProductProps } from '@/util/types';

const PortfolioCard = ({
  title,
  description,
  type,
  stack,
  img,
  link,
}: ProductProps) => {
  return (
    <div className="bg-slate-900 rounded-xl py-4 px-4 flex items-center shadow-2xl m-5 h-full vollkorn flex-col md:flex-row">
      {/* Circle with Title, Type, and Description */}
      <div className="bg-[#E8F2F3] h-56 w-56 rounded-xl md:rounded-full text-center m-2 flex justify-center items-center flex-col hover:hue-rotate-180">
        <h2 className="text-4xl text-[#F05331] font-semibold m-2">{title}</h2>
        <h3 className="text-black font-semibold text-lg">{type}</h3>
        <p className="text-black m-1 p-1">{description}</p>
      </div>
      {/* Image and Stack */}
      <div className="flex justify-center flex-col items-center">
        <h4 className="bg-[#F05331] text-white mb-4 rounded-2xl px-4 py-2">
          Stack: {stack}
        </h4>
        <figure>
          <a href={link} target="blank" title="iball">
            <Image
              src={img}
              height={400}
              width={400}
              quality={100}
              alt={title}
              className="h-auto w-auto p-1 border-slate-600"
            />
            {/* img */}
          </a>
        </figure>{' '}
        {/* <h4 className="bg-[#F05331] text-white m-2 rounded-2xl px-4 py-2">
          {stack}
        </h4> */}
      </div>
    </div>
  );
};

export default PortfolioCard;

// have variable size for example of site

// dropdowns or accordions

{
  /* <>
<Card className="w-3/4 flex justify-center">
  <CardHeader className="poppins-extrabold text-5xl">{title}</CardHeader>
  <Image src={img} height={200} width={200} alt={title} />
  {description}
  <div className="grid grid-cols-2">
    <CardBody className="m-3 w-11/12">
      <Accordion className="bg-blue-100 p-4 rounded-md w-full">
        <AccordionItem
          key="1"
          textValue="Objectives:"
          title="Objectives:"
        >
          {objective}
        </AccordionItem>
        <AccordionItem key="2" title="Strategy:">
          Strategy:
          {strategy}
        </AccordionItem>
        <AccordionItem key="3" title="Results:">
          Results:
          {results}
        </AccordionItem>
      </Accordion>
    </CardBody>
   <Image
      src="/iball247/iball-screenshot.png"
      height={200}
      width={200}
      alt="iball full page screenshot"
      className=""
    /> 
  </div>
</Card>
</> */
}
