import React, { useState } from 'react'
import "./ToggleDemo.css"

function ToggleDemo() {

    const [visible, setVisibility] = useState(false);

    function changeVisibility(){
        setVisibility(!visible);
    }

    return (
        <>
            <button data-testid="toggle-btn" onClick={changeVisibility}>Toggle</button>

            {
                <div id='content' data-testid="content" style={{
                    display: visible ? "block" : "none"
                }}>
                        <h2>visible div</h2>
                </div>
            }
            <div>test</div>
        </>
    )
}

export default ToggleDemo