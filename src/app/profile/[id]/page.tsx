import Link from 'next/link';

export default function UserDetailPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1 className="text-center">User {params.id} Profile</h1>
      <Link href={'/'}>Home</Link>
    </main>
  );
}
