import React from 'react';
type Props = {
    background?:boolean
    children: React.ReactNode
}

function Section({background,children}: Props) {
    return (
        <section className={`h-svh ${background && "bg-cover bg-center bg-[url('/bread4.webp')]"}`}>
            {children}
        </section>
    );
}

export default Section;
