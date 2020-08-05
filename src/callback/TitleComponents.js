import React from 'react'

function TitleComponents() {
    console.log("Render Title");
    return (
        <h1>
            userCallback Hook
        </h1>
    )
}

export default React.memo(TitleComponents);
