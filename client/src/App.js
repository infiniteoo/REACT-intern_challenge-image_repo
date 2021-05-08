import React, { useState } from "react";
import FileUpload from "./components/FilesUpload";
import ShowPics from "./components/ShowPics";

const App = () => {
  const [allPics, setAllPics] = useState([]);

  return (
    <div>
      <FileUpload allPics={allPics} setAllPics={setAllPics} />
      {allPics.length > 0 ? (
        <ShowPics allPics={allPics} setAllPics={setAllPics} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default App;
