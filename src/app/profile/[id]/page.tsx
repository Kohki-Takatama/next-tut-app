import { Metadata, ResolvedMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  return { title: id, description: `${id}'s profile page` };
}

export default async function UserDetailPage({ params }: Props) {
  return (
    <main>
      <h1 className="text-center">User {(await params).id} Profile</h1>
    </main>
  );
}
