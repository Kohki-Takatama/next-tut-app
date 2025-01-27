import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href={'/profile'}>Profile</Link>
    </div>
  );
};

export default Header;
