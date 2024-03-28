'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import Skeleton from '@mui/material/Skeleton';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CocktailsPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const { data, error } = useSWR(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        fetcher
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const searchResults = data?.drinks || [];
    const isLoading = !error && !data;

    return (
        <main>
            <header className="site-header site-menu-header">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12 mx-auto">
                            <h1 className="text-white">Our Menus</h1>

                            <strong className="text-white">Perfect for all Breakfast, Lunch and Dinner</strong>
                        </div>

                    </div>
                </div>

                <div className="overlay"></div>
            </header>



            <input
                type="text"
                placeholder="Search for a cocktail..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full md:w-1/2 lg:w-1/8 mx-auto block p-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {isLoading ? (
                    Array.from({ length: 6 }, (_, index) => (
                        <div key={index} className="mb-5 space-y-2">
                            <Skeleton variant="text" width={210} height={28} />
                            <Skeleton variant="rectangular" width={210} height={118} />
                        </div>
                    ))
                ) : (
                    searchResults.map((cocktail: any) => (
                        <div key={cocktail.idDrink} className="mb-5 space-y-2">
                            <h3 className="text-lg font-bold">{cocktail.strDrink}</h3>
                            <Image
                                src={cocktail.strDrinkThumb}
                                alt={cocktail.strDrink}
                                width={1000}
                                height={1000}
                                className="w-1/4"
                                layout="responsive"
                            />
                        </div>
                    ))
                )}
            </div>
        </main>
    );
};

export default CocktailsPage;
