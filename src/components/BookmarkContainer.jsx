import React from 'react';

export default function BookmarkContainer({
    label,
    bookmarks
}) {
    return <div className="bookmark-container">
        <div className="header-container">
            <input type="text" defaultValue={label} className="label-input" />

            {/* <input type="button" value="+"/> */}
        </div>

        <div>
            {bookmarks.map(bm =>
                <div>{bm.label}</div>
            )}
        </div>
    </div>
}