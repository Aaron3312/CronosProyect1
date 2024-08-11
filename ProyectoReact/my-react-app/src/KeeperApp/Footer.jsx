import { useState } from 'react'

let year = new Date().getFullYear();

function footer() {
    return (
        <footer>
            <p>© {year} Keeper App</p>
        </footer>
    );
}

export default footer;