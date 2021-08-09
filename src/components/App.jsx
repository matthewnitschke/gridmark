import React, {useState} from 'react';

import ConfigEditor from './ConfigEditor';

import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

import '../styles/grid.scss';
import GridView from './GridView';

export default function App() {
    const [isEditorVisible, setIsEditorVisible] = useState(false);

    return <>
        <button 
            className="toggle-editor-button" 
            onClick={() => setIsEditorVisible(!isEditorVisible)}>
            Edit
        </button>
        { isEditorVisible && <ConfigEditor /> }
        { !isEditorVisible && <GridView />}
    </>
}