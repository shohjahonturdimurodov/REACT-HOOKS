import React from 'react'

export default function Main({toggle}) {
    return (
        <>
            <p>Hello from Context</p>
            <button onClick={toggle} className="success">Show Alert</button>
        </>
    )
}
