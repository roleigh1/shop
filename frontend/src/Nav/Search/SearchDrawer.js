export default function Searchdrawer({ result }) {

    return (
        <div className="absolute w-[100%] justify-center flex items-center">
            <div className="w-[100%] h-[20rem] bg-[#f3f4f6]">
                <ul>
                    {result.map((item) => (
                        <div key={item.id}>
                            <hr />
                            <li>{item.name}</li>
                        </div>
                    ))}
                    {result.length === 0 && (
                        <span>Product not found</span>
                    )}
                    <hr />
                </ul>
            </div>
        </div>
    )
}