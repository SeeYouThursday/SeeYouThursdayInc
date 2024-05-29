import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="bg-black">
      <Image
        height={50}
        width={50}
        quality={100}
        src="/SeeYouThursday.png"
        alt="SeeYouThursday"
        className="p-3 rounded-sm"
      />
    </nav>
  );
};

export default Nav;
