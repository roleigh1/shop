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
    <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
      {breadCrumbArr.map((item, index) => {
        const isLast = index === breadCrumbArr.length - 1;

        return (
          <span key={index}>
            {!isLast && item.to ? (
              <Link to={item.to} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}

            {!isLast && " > "}
          </span>
        );
      })}
    </nav>
  );
}