import React from "react";

import * as Icons from "../src/index";

function App() {
  function mapIcons() {
    return Object.keys(Icons).map(function(key, index) {
      const Icon = Icons[key];

      return <Icon key={index} />;
    });
  }

  return mapIcons();
}

export default App;
