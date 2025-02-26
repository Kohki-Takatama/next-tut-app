/* /components/Button/Button.tsx */
import styles from './Button.module.css';

const PokemonData = ({
  data,
}: Readonly<{
  data: { id: string; name: string; type: string };
}>) => {
  return (
    <>
      <h3>ID</h3>
      <p>{data.id}</p>
      <h3>Name</h3>
      <p>{data.name}</p>
      <h3>Type</h3>
      <p>{data.type}</p>
    </>
  );
};

export default PokemonData;
