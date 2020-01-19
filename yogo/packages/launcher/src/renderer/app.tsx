import React, { useEffect, useState } from "react";
import { fetchAvailableDawlets } from "common-utils";

const App = () => {
  const [dawlets, setDawlets] = useState<Array<string>>([]);

  useEffect(() => {
    const availableDawlets = fetchAvailableDawlets();
    setDawlets(availableDawlets);
  }, []);

  return (
    <div>
      <h1>Dawlet Launcher</h1>
      <ul>
        {dawlets.map(dawlet => (
          <li>{dawlet}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
