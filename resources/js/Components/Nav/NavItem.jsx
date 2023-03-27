import { Link } from "@inertiajs/react";
import React from "react";
import tw from "tailwind-styled-components"

export default function NavItem({ item }) {
    return (
        <Link href={route(item.href)} >
            <StyledLi>
                { item.text }
            </StyledLi>
        </Link>
    );
}

const StyledLi = tw.li`
    py-2
    px-4
    hover:bg-gray-200
    cursor-pointer
`
