/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

















// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Api = () => {
//   const [query, setQuery] = useState("");
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const searchBooks = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${query}`
//       );
//       setBooks(response.data.items);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (query.trim() !== "") {
//       searchBooks();
//     } else {
//       setBooks([]);
//     }
//   }, [query]);

//   return (
//     <div>
//       <h1>Book Search</h1>
//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for books..."
//         />
//         {loading && <p>Loading...</p>}
//       </div>
//       <ul>
//         {books?.map((book) => (
//           <li key={book.id}>
//             <h3>{book.volumeInfo.title}</h3>
//             {book.volumeInfo.authors && (
//               <p>Authors: {book.volumeInfo.authors.join(", ")}</p>
//             )}
//             {book.volumeInfo.description && (
//               <p>Description: {book.volumeInfo.description}</p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Api;
