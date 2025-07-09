import { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonListResponse, PokemonListItem } from '../types/pokemon';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'; // Import Head component
import Pikachu from "../../public/pikachu.svg"

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonListItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemons(response.data.results);
        setFilteredPokemons(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, pokemons]);

  const getPokemonId = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  // Pagination logic
  const totalPokemons = filteredPokemons.length;
  const totalPages = Math.ceil(totalPokemons / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPokemons = filteredPokemons.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  return (
    <div className="container mx-auto p-6">
      <Head>
        <title>Pokémon Explorer - Home</title>
        <link rel="icon" href="/Pokémon_logo.svg" />
        <meta name="description" content="Explore and search for Pokémon with Pokémon Explorer" />
      </Head>
      <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-600">Pokémon Explorer</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mx-auto p-3 mb-6 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
      />
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg">
          Total Pokémon: {totalPokemons} | Total Pages: {totalPages} | Current Page: {currentPage}
        </div>
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2 text-lg">Items per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="p-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            {[10, 20, 30, 40, 50].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedPokemons.map((pokemon) => (
          <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`}
                alt={pokemon.name}
                width={120}
                height={120}
                className="mx-auto"
              />
              <h2 className="text-xl font-semibold capitalize text-center text-gray-800">{pokemon.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400 hover:bg-blue-700 transition"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400 hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}