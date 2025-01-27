import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main>
      <h1 className="text-center">My Profile</h1>
      <Link href={'/'}>Home</Link>
    </main>
  );
}
