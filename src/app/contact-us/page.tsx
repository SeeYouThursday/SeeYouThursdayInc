import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { Spacer } from '@nextui-org/spacer';
import { LetsConnect } from '@/components/ContactForm/ContactHeadings';

const ContactUs = () => {
  return (
    <section className="flex flex-col bg-[url('/contact/purple-bg.webp')] bg-no-repeat bg-cover h-full">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center p-2">Get in Touch</h1>
      <p className="italic text-center">
        Reach out, and let&apos;s create a universe of possibilities together!
      </p>
      <div className="flex justify-center m-4">
        {/* Form and Form Heading */}
        <div className="flex md:flex-row flex-col items-start md:justify-evenly p-3 px-3 mx-4 my-10 border-2 border-[#C1C2C6]/5 rounded-[10px] bg-[#B1B4BF]/5 h-auto md:h-[500px]">
          {/* Form Heading */}
          <div className="flex-col flex sm:h-[27px] md:h-[55px] max-w-[339px] px-3">
            <LetsConnect />
            {/* Form */}
            <div className="max-h-[333px] md:max-h-[667px] flex justify-center items-center">
              <ContactForm location="contact-page" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-balance text-center">
            <Image
              src="/contact/astro.webp"
              width={500}
              height={500}
              quality={100}
              alt="contact image"
              className="sm:max-w-[181px] md:max-w-[450px] h-auto hidden md:block px-3 rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
