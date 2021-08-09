import React from 'react';

export default function GridCell(props) {    
    return <div className="grid-cell">
        <div className="header-container">{props.label}</div>
        
        <div className="items-container">
            {props.items.map((el, i) => {
                let { origin } = new URL(el.url);
                let iconUrl = `https://s2.googleusercontent.com/s2/favicons?domain=${origin}`;

                return <div key={i} className="item" onClick={(e) => {
                    if (e.metaKey) {
                        window.open(el.url)
                    } else {
                        window.location = el.url
                    }
                }}>
                    <img src={iconUrl} />
                    {el.label}
                </div>
            })}
        </div>
    </div>
}