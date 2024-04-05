'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
    // console.log("param", param);
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    // console.log("genre", genre);

    return (
        <div>
        <Link 
        className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500' : "" }`}
        href={`/?genre=${param}`}>{title}</Link>
        </div>
    );
}
