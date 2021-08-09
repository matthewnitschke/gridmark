
import GridLayout from 'react-grid-layout';
import GridCell from './GridCell';

export default function GridView() {
    let layout;
    let config;
    try {
        layout = JSON.parse(window.localStorage.getItem('gridmark-layout') ?? '[]')
        config = JSON.parse(window.localStorage.getItem('gridmark-config') ?? '{}');
    } catch(e) {
        return 'Invalid Config';
    }

    return  <GridLayout 
        layout={layout} 
        cols={24} 
        rowHeight={30} 
        width={1200} 
        onLayoutChange={(l) => window.localStorage.setItem('gridmark-layout', JSON.stringify(l))}
    >
        {Object.entries(config).map(([key, value]) => 
            <div key={key} className="grid-container">
                <GridCell {...value} />
            </div>
        )}
    </GridLayout>
}