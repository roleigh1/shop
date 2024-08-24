import React ,{useState} from "react";
import PropTypes from "prop-types";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import CheckIcon from '@mui/icons-material/Check';
export default function NewBestsellerItem({ item }) {

    const [highlight, setHighlight] = useState(false);
    const handleAddToCart = () => {
        
    }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-[13rem] h-[12rem] mt-4"
        src={item.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">
            {item.type}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {item.price}
        </span>
        <Button
                onClick={handleAddToCart}
                className="mt-4 w-32 h-10 "
                sx={{ whiteSpace: 'nowrap' }}
                startDecorator={highlight ? <CheckIcon/> : <Add />}
              >
                {highlight ? "Added!" : "Add to cart"}
              </Button>
      </div>
    </div>
  );
}
NewBestsellerItem.propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  };