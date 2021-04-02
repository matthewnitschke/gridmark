import React, {useState} from 'react';

import GridLayout from 'react-grid-layout';
import BookmarkContainer from './BookmarkContainer';

import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

import '../styles/grid.scss';

export default function App() {

    const [layout, setLayout] = useState([
        {i: 'a', x: 0, y: 0, w: 1, h: 3},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ]);

    const [items, setItems] = useState({
        'a': { label: 'heyy', bookmarks: [{ label: 'asdf'}] },
        'b': { label: 'suhh' },
        'c': { label: 'erm' },
    })

    return <>
        <GridLayout layout={layout} cols={12} rowHeight={30} width={1200}>
            {Object.entries(items).map(([key, value]) => 
                <div key={key} className="grid-container">
                    <BookmarkContainer {...value} />
                </div>
            )}
        </GridLayout>
        <input type="button" value="+" />
    </>
}