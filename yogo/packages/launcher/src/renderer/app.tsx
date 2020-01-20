import React, { useCallback } from "react";
import { useConfiguredDawlets } from './hooks/dawlets'
import { Button, Typography } from '@material-ui/core'
import { DawletList } from './components/DawletList'
import { fetchAvailableDawlets } from "common-utils";

// Very very bad.
const availableDawlets = fetchAvailableDawlets()

const App = () => {
  const { configuredDawlets, checkDawlet } = useConfiguredDawlets(availableDawlets)
  console.log('configured dawlets', configuredDawlets)

  const bootDawlets = useCallback(() => {
    const enabledDawlets = Object.values(configuredDawlets).filter(dawlet => dawlet.checked)
    console.log('enabled dawlets', enabledDawlets)
    // TODOs:
    // 1. filter for localized dawlets
    // 2. spawn local dawlets
    // 3. boot server
    // 4. show server url
  }, [configuredDawlets])

  return (
    <div>
      <Typography variant="h1">Dawlet Launcher</Typography>
      <DawletList configuredDawlets={configuredDawlets} checkDawlet={checkDawlet} />
      <Button variant="contained" color="primary" onClick={bootDawlets}>Launch</Button>
    </div>
  );
};

export default App;
