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
  objective,
  strategy,
  results,
  img,
}: ProductProps) => {
  return (
    <>
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
    </>
  );
};

export default PortfolioCard;

// have variable size for example of site

// dropdowns or accordions
