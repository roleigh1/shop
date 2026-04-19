import { useState, useEffect } from "react";
import Searchdrawer from "./SearchDrawer";
export default function SearchBar() {


    const [open, setOpen] = useState(false);
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const searchRequest = async () => {
            try {
                const response = await fetch("http://localhost:4242/api/searchItem", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query: search
                    })
                });

                const data = await response.json();

                setResult(data);
                console.log(data)
            } catch (error) {
                console.error("Error searching for Product", error);
            }
        };
        if (search.length > 0) {
            setTimeout(() => {
                searchRequest()
            }, 300);

            setOpen(true);
        }

    }, [search])

    useEffect(() => {
        if (search.length === 0) {
            setOpen(false);
        }
    }, [search])
    return (
        <div>
            <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                    type="text"
                    placeholder="Search products"
                />
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            </div>
            {open && (
                <div className="absolute top-full left-0 w-full z-50">
                    <Searchdrawer result={result} />
                </div>
            )}
        </div>
    )
}