import React from 'react';
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/">About Me</Link>
            <Link href="/Languages">Languages and Frameworks</Link>
            <Link href="/Projects">Projects</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Contact">Contact Me</Link>
        </div>
    )
}