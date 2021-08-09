import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

export default function ConfigEditor() {
    let value;
    try {
        value = window.localStorage.getItem('gridmark-config')
    } catch(e) {
        value = '{}'
    }
    
    return <AceEditor
        mode="json"
        defaultValue={value}
        theme="github"
        onChange={(v) => {
            window.localStorage.setItem('gridmark-config', v);
        }}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
    />
}