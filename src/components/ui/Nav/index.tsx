import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="bg-slate-900">
      <Image
        height={100}
        width={100}
        quality={100}
        src="/Purple-SeeYouThursday.png"
        alt="SeeYouThursday"
        className="p-3 rounded-sm"
      />
    </nav>
  );
};

export default Nav;
