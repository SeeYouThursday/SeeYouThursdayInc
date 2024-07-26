import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { Spacer } from '@nextui-org/spacer';
{
  /* For when we ditch the modal */
}
{
  /* <div className="flex w-full items-center justify-evenly"> */
  /*  */
}
{
  /* </div> */
}

const ContactUs = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex md:flex-row flex-col md:items-center md:justify-around px-10 min-h-[70svh] w-8/12 border-2 border-blue-300 m-4 rounded-badge bg-slate-800">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center pt-5 pb-5 text-2xl lg:text-4xl text-cyan-50">
            Reach Out To Us!
          </h2>
          <p className="text-center italic">
            We will get back to you<br></br> before you know it!
          </p>
          <Image
            src="/SeeYouThursdayGlass.png"
            width={1000}
            height={1000}
            quality={100}
            alt="contact image"
            className="w-56 h-56 hidden md:block p-3 rounded-md "
          />
        </div>
        <div className="bg-[url('/contact-background1.webp')] bg-no-repeat bg-cover overflow-hidden m-3 rounded-box border-3">
          <div className="flex flex-col justify-center items-center text-white shadow-3xl p-3">
            <h3 className="">Let Us Help You!</h3>
            <ContactForm location="contact-page" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
