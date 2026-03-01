import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


export default function NewBestsellerItem({item}) {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="mb-5 h-[23rem] max-w-sm overflow-hidden  rounded  shadow-lg">
            <div
              className="image-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="m-auto mt-1 h-48 w-52 object-contain"
                style={{
                  backgroundImage: `url(${
                    isHovered ? item.secondImage : item.firstImage
                  })`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                alt="Sunset in the mountains"
              ></div>
              <Link to={`/details/${item.id}/bestsellerDetails`}>
                <svg
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon "
                  fill="#747474"
                >
                  <path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" />
                </svg>
              </Link>
            </div>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">{item.name}</div>
              <p className="text-base text-gray-700">{item.type}</p>
            </div>
            <div className="relative bottom-5">
              <span className="mb-3 mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                {parseFloat(item.price).toFixed(2)}/{item.unit}
              </span>
            </div>
          </div>
  );
}

