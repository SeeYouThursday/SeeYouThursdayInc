import PortfolioCard from '@/components/PortfolioCard';
import { ProductProps } from '@/lib/util/types/product';
import { UpdateImgForm } from '@/components/ProductForms/img-form';
import { getAllProducts } from '@/lib/actions';
const Products = async () => {
  // const projects: ProductProps[] = [
  //   // {
  //   //   title: 'iBall247',
  //   //   description: 'Basketball Training Program and Merch Site.',
  //   //   type: 'E-commerce',
  //   //   stack: ['Shopify CMS', 'PushPress'],
  //   //   img: '/iball247/SYT-projects-laptop.png',
  //   //   link: 'https://www.iball247.com',
  //   // },
  //   // {
  //   //   title: 'Wizard of Pawz',
  //   //   description: 'Pet Grooming',
  //   //   type: 'Marketing',
  //   //   stack: 'Nextjs, Tailwind',
  //   //   img: '/PH-SYT-projects-laptop.png',
  //   //   link: 'https://www.wizardofpawz.co',
  //   // },
  // ];
  // const iball: ProductProps = {
  //   title: 'iBall247',
  //   description: 'Basketball Training Program and Merch Site.',
  //   type: 'E-commerce',
  //   stack: 'Shopify CMS, PushPress',
  //   img: '/iball247/SYT-projects-laptop.png',
  //   link: 'https://www.iball247.com',
  // };

  // const wizardPawz: ProductProps = {
  //   title: 'Wizard of Pawz',
  //   description: 'Pet Grooming',
  //   type: 'Marketing',
  //   stack: 'Nextjs, Tailwind',
  //   img: '/PH-SYT-projects-laptop.png',
  //   link: 'https://www.wizardofpawz.co',
  // };

  const projects = await getAllProducts();
  const projectTitles = projects.map((project) => project.title);

  return (
    <>
      <div className="flex justify-center items-center p-3 bg-gradient-to-br from-sky-300 to-indigo-600 flex-col md:flex-row">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
      <UpdateImgForm productTitle={projectTitles} />
    </>
  );
};

export default Products;
