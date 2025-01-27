export default function TodoDetailPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1 className="text-center">Todo {params.id}</h1>
    </main>
  );
}
