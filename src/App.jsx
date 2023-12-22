  import React, { useState } from "react";

  const App = () => {
    const [count, setCount] = useState(13);


   return (
    <>
      <p>Param : {count}</p>
    </>
   );
  };

  export default App;
