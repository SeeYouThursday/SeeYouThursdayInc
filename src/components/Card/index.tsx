import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  Accordion,
  AccordionItem,
} from '@nextui-org/react';

type ProductProps = {
  title: string;
  description: string;
  objective: string;
  strategy: string;
  results: string;
  img: string;
};

const PortfolioCard = ({
  title,
  description,
  objective,
  strategy,
  results,
  img,
}: ProductProps) => {
  return (
    <>
      <Card className="grid grid-cols-2 w-96">
        <div className="">
          <CardHeader>{title}</CardHeader>
          {description}
          <Accordion className="w-40 bg-blue-700 m-4 p-4 rounded-md">
            <AccordionItem key="1" textValue="Objectives:" title="Objectives:">
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
        </div>
        <Image src={img} height={200} width={200} alt={title} />
      </Card>
    </>
  );
};

export default PortfolioCard;

// have variable size for example of site

// dropdowns or accordions
