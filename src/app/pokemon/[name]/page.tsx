type Props = {
  params: Promise<{ name: string }>;
};

export default async function PokemonPage({ params }: Props) {
  const pokemonName = (await params).name;
  let pokemonData: { name: string; id: string; imageUrl: string; type: string } | null = null;
  // 大文字入力に対応
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
  if (response.ok) {
    const responseJson = await response.json();
    // nameは先頭大文字
    pokemonData = {
      name: responseJson.name.charAt(0).toUpperCase() + responseJson.name.slice(1).toLowerCase(),
      id: responseJson.id,
      type: responseJson.types.map((e: { slot: number; type: { name: string; url: string } }) => e.type.name).join(' / '),
      imageUrl: responseJson.sprites.front_default,
    };
  }

  return (
    <>
      <h1>Pokémon Sercher</h1>
      <h2>Pokémon Name: {pokemonName}</h2>
      {pokemonData ? (
        <>
          <h3>ID</h3>
          <p>{pokemonData.id}</p>
          <h3>Name</h3>
          <p>{pokemonData.name}</p>
          <h3>Image</h3>
          <p>
            <img src={pokemonData.imageUrl} alt="Pokemon Image" />
          </p>
          <h3>Type</h3>
          <p>{pokemonData.type}</p>
        </>
      ) : (
        <p style={{ color: 'red' }}>The Pokémon with that name could not be found.</p>
      )}
    </>
  );
}
