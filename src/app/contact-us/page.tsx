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
    <>
      <div className="flex items-center justify-evenly w-full px-10 min-h-[70svh]">
        <div className="w-3/12">
          <ContactForm location="contact-page" />
        </div>
        <Spacer x={4} />
        <Image
          src="/SeeYouThursdayGlass.png"
          width={1000}
          height={1000}
          quality={100}
          alt="contact image"
          className="w-36 h-36 p-3 rounded-md bg-[#B1B4BF]"
        />
      </div>
    </>
  );
};

export default ContactUs;
