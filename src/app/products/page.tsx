import { WorkCards } from '@/components/WorkCard';
import { getAllProducts } from '@/lib/actions';

const Products = async () => {
  // const wizardPawz: ProductProps = {
  //   title: 'Wizard of Pawz',
  //   description: 'Pet Grooming',
  //   type: 'Marketing',
  //   stack: 'Nextjs, Tailwind',
  //   img: '/PH-SYT-projects-laptop.png',
  //   link: 'https://www.wizardofpawz.co',
  // };

  // const projects = await getAllProducts();

  return (
    <>
      {/* <div className="flex justify-center items-center p-3 bg-gradient-to-br from-sky-300 to-indigo-600 flex-col md:flex-row">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div> */}
      <div className="flex justify-center">
        <WorkCards location="ourWork" />
      </div>
    </>
  );
};

export default Products;
