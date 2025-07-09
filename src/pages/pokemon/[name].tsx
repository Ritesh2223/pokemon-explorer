import { GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { Pokemon, PokemonListResponse } from '../../types/pokemon';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router'; // Import useRouter

interface PokemonDetailProps {
  pokemon: Pokemon;
}

export default function PokemonDetail({ pokemon }: PokemonDetailProps) {
  const router = useRouter(); // Initialize router

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-100 to-green-100 min-h-screen">
      <Head>
        <title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} - Pokémon Explorer</title>
        <meta name="description" content={`Details for ${pokemon.name} in Pokémon Explorer`} />
        <link rel="icon" href={pokemon.sprites.front_default} />
      </Head>
      <button
        onClick={() => router.back()} // Navigate back to previous page
        className="relative px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <h1 className="text-5xl font-extrabold capitalize text-center mb-8 text-blue-800">{pokemon.name}</h1>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={250}
          height={250}
          className="mb-6"
        />
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg"><strong>ID:</strong> {pokemon.id}</p>
              <p className="text-lg"><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
              <p className="text-lg"><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Stats</h3>
              {pokemon.stats.map(stat => (
                <p key={stat.stat.name} className="text-lg">
                  <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </p>
              ))}
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Moves</h3>
          <p className="text-lg">{pokemon.moves.slice(0, 5).map(m => m.move.name).join(', ')}...</p>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
  const paths = response.data.results.map(pokemon => ({
    params: { name: pokemon.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${params?.name}`);
  return {
    props: { pokemon: response.data },
  };
};