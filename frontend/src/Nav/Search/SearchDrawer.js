import { Link } from "react-router-dom";

export default function Searchdrawer({ result }) {
    return (
        <div className="w-full flex h-full bg-[#f3f4f6] flex-col justify-center items-center">

            <ul className="pt-5 pb-5 flex flex-col gap-2">
                {result.length > 0 ? (
                    result.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={`/details/${item.id}/productsDetails`}
                                className="flex items-center justify-between pl-3 pr-3 border rounded w-[20rem] hover:shadow-lg text-black"
                                aria-label={`View details for ${item.name}`}
                            >
                                <div className="flex items-center gap-2">
                                    <img
                                        src={item.firstImage}
                                        alt={item.name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                    <span>{item.name}</span>
                                </div>

                                <img
                                    width="25"
                                    height="25"
                                    src="https://img.icons8.com/ios/50/forward--v1.png"
                                    alt="" // dekorativ
                                />
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className="border rounded w-[24rem] flex justify-center p-3 text-center">
                        <span>
                            No results found.
                            <br />
                            Please try a different search term.
                        </span>
                    </li>
                )}
            </ul>

            <div className="w-full px-5 pb-5">
                <Link to="/FAQ">
                    <div className="flex flex-col items-center hover:shadow-[0_8px_10px_-6px_rgba(0,0,0,0.3)] h-[4.9rem]">

                        <hr className="w-full border-gray-300" />

                 
                            <h2 className="text-sm">F.A.Q</h2>
               

                        <hr className="w-full border-gray-300" />

                    </div>
                </Link>
            </div>

        </div>
    );
}