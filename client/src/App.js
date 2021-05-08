import React, {useState} from 'react'
import FileUpload from './components/FilesUpload'
import ShowPics from './components/ShowPics'


const App = () => {
    const [allPics, setAllPics] = useState([]);
    return (
        <div>
            <FileUpload allPics={allPics} setAllPics={setAllPics}/>
            <ShowPics allPics={allPics} setAllPics={setAllPics}/>
            
        </div>
    )
}

export default App
