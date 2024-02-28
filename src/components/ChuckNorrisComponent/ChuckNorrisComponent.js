import './ChuckNorrisComponent.css'
import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

export default function ChuckNorrisComponent() {
    console.log("ChuckNorrisComponent");

    const [joke, setJoke] = useState(null);
    // const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch("https://api.chucknorris.io/jokes/categories");

    function getJoke() {
        console.log("getJoke");
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => response.json())
            .then((data) => setJoke(data.value));
    }

    // function getCategories() {
    //     console.log("getCategories");
    //     // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    //     fetch("https://api.chucknorris.io/jokes/categories")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCategories(data);
    //             setSelectedCategory(data[0]);
    //         });
    // }

    useEffect(() => {
        // getCategories();
        getJoke();
    }, []); // componentDidMount (empty array)

    useEffect(() => {
        console.log("useEffect - loading, selectedCategory", loading, selectedCategory);
        if (selectedCategory && loading) {
            setLoading(true);
            fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
                .then((response) => response.json())
                .then((data) => {
                    setJoke(data.value);
                    setLoading(false);
                });
        }
    }, [loading, selectedCategory]);

    function handleButton() {
        console.log("handleButton");
        setLoading(true);
    }
    function handleSelect(e) {
        console.log("handleSelect", e.target.value);
        setSelectedCategory(e.target.value);
    }

    return (
        <>
            <div>
                <p>ChuckNorrisComponent works</p>

                {categoriesError ? <p>Categories Error: {categoriesError.message}</p> : null}
                {categoriesLoading ? <p>Categories Loading...</p> : null}

                <p>Select category:
                    <select onChange={handleSelect}>
                        { categories ? categories.map((category, index) => <option key={category}>{ category }</option>) : <option>Loading...</option> }
                    </select>

                    <button onClick={handleButton}>Get random joke from category</button>
                </p>

                <p>{joke ? joke : "Loading 1..."}</p>
                { joke ? <p>{joke}</p> : <p>Loading 2...</p> }
            </div>
        </>
    );
}
