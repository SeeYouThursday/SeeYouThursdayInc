import Image from 'next/image';
import { getAllProducts } from '@/lib/actions';
import {
  Card,
  CardHeader,
  CardBody,
  Accordion,
  AccordionItem,
  Link,
} from '@nextui-org/react';
import { ProductProps } from '@/lib/util/types/product';

// const PortfolioCard = ({
//   id,
//   title,
//   href,
//   description,
//   shortDescrip,
//   img_url,
//   icon_url,
//   stack,
//   createdAt,
//   updatedAt,
// }: ProductProps) => {
//   return (
//     <div className="bg-slate-900 rounded-xl py-4 px-4 flex items-center shadow-2xl m-5 h-full vollkorn flex-col md:flex-row">
//       {/* Circle with Title, Type, and Description */}
//       <div className="bg-[#E8F2F3] h-56 w-56 rounded-xl md:rounded-full text-center m-2 flex justify-center items-center flex-col hover:hue-rotate-180">
//         <h2 className="text-4xl text-[#F05331] font-semibold m-2">{title}</h2>
//         <h3 className="text-black font-semibold text-lg">{shortDescrip}</h3>
//         <p className="text-black m-1 p-1">{description}</p>
//       </div>
//       {/* Image and Stack */}
//       <div className="flex justify-center flex-col items-center">
//         <h4 className="bg-[#F05331] text-white mb-4 rounded-2xl px-4 py-2">
//           Stack: {stack}
//         </h4>
//         <figure>
//           <a href={href} target="blank" title="iball">
//             <Image
//               src={img_url ?? ''}
//               height={400}
//               width={400}
//               quality={100}
//               alt={title}
//               className="h-auto w-auto p-1 border-slate-600"
//             />
//             {/* img */}
//           </a>
//         </figure>
//       </div>
//     </div>
//   );
// };

// export default PortfolioCard;

export const WorkCards = async ({ location }: { location: string }) => {
  if (location === 'landing') {
    const work = '';
  }

  // const projects = await getAllProducts();

  return (
    <div className="flex justify-center items-start flex-wrap">
      {/* {projects.map((project) => { */}
      {/* return ( */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 m-3 lg:mx-auto"
        key={'project.id'}
      >
        {/* Giant Picture - leftside */}
        <Image
          alt={'project.title'}
          className="rounded-lg my-3 lg:max-h-[80svh] max-h-72 h-auto w-auto mx-auto py-5 bg-gradient-to-br from-sky-300 from-20% to-white"
          width={779}
          height={579}
          quality={100}
          src={'/iball247/work-card2.png'}
        />
        {/* Heading, Description, Stack (Dev Tools), View Project Link*/}
        <div className="ms-3 text-white flex flex-col justify-between">
          <div>
            {/* Heading */}
            <h2 className="py-2 mb-10 font-bold text-2xl text-primary-100">
              iBall 247
            </h2>
            {/* Description */}
            <p className="text-balance">
              iBall247 is a premier basketball training company dedicated to
              elevating players&apos; skills and performance. Offering
              personalized coaching and advanced training programs, iBall247
              focuses on developing technical proficiency, physical fitness, and
              mental toughness to help athletes reach their full potential.
            </p>
          </div>
          {/* Dev Tools */}
          <div className="mt-3">
            <h3 className="font-bold text-primary-100">DEVELOPMENT TOOLS</h3>
            <ul className="list-disc ms-5">
              <li>React</li>
              <li>Next.js</li>
              <li>Shopify CMS</li>
              <li>Node.js</li>
            </ul>
          </div>
          {/* {project.stack.map((tech) => (
                <p key={tech}>{tech}</p>
              ))} */}
          {/* View Project Link */}
          <Link
            href="https://www.iball247.com"
            className="my-3"
            color="success"
          >
            Link to iBall247
          </Link>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};
