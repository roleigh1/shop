import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs({ detailsItem }) {
  const location = useLocation();
  const path = location.pathname.split("/");

  const finalPath = path[path.length - 1];
  const name = detailsItem?.name || "Loading...";

  let breadCrumbArr = [];

  if (finalPath === "bestsellerDetails") {
    breadCrumbArr = [
      { label: "Home", to: "/" },
      { label: name }
    ];
  } else {
    breadCrumbArr = [
      { label: "Home", to: "/" },
      { label: "Shop", to: "/Shop" },
      { label: name }
    ];
  }




  return (
    <nav aria-label="breadcrumb" className="w-full">
      <ol className="flex w-full flex-wrap items-center rounded-md px-4 py-2">
        {breadCrumbArr.map((item, index) => (
          <li key={index} className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300">
            {index === 0 ? (
              <Link to={item.to}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-slate-800 hover:text-slate-500 transition-colors duration-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </Link>
            ) : item.to ? (
              <Link className="text-slate-500 hover:text-slate-800" to={item.to}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < breadCrumbArr.length - 1 && (
              <span className="pointer-events-none mx-2 text-slate-800">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );

}