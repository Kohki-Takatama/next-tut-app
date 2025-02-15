import { Metadata } from 'next';
import Link from 'next/link';
import Button from '../components/Button/Button';

export const staticMetadata: Metadata = {
  title: 'My Profile',
  description: 'user own page',
};

export default function ProfilePage() {
  return (
    <main>
      <h1 className="text-center">My Profile</h1>
      <Link href={'/'}>Home</Link>
      <Button>Testing</Button>
    </main>
  );
}
