import { useState } from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSave = () => {
    onUpdate(product.id, updatedProduct);
    setIsEditing(false);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 border-2 border-red-600 w-full max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-900">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={updatedProduct.title}
            onChange={handleEditChange}
            className="border-b-2 border-gray-300 focus:border-red-500 outline-none w-full"
          />
          <input
            type="text"
            name="price"
            value={updatedProduct.price}
            onChange={handleEditChange}
            className="border-b-2 border-gray-300 focus:border-red-500 outline-none w-full mt-2"
          />
          <textarea
            name="description"
            value={updatedProduct.description}
            onChange={handleEditChange}
            className="border-b-2 border-gray-300 focus:border-red-500 outline-none w-full mt-2"
          />
          <input
            type="text"
            name="category"
            value={updatedProduct.category}
            onChange={handleEditChange}
            className="border-b-2 border-gray-300 focus:border-red-500 outline-none w-full mt-2"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white p-2 rounded-md mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white p-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <img
            src={product.image}
            alt={product.title}
            className=" h-48 object-cover rounded-lg mb-4"
          />
          <h1 className="text-2xl font-bold text-red-700 mb-2">
            {product.title}
          </h1>
          <div className="flex items-center mb-2">
            <AiFillStar className="text-yellow-500" />
            <p className="text-gray-700 ml-1">{product.rating.rate} / 5</p>
          </div>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-gray-500 text-sm">
            {showFullDescription
              ? product.description
              : `${product.description.substring(0, 100)}...`}
            {product.description.length > 100 && (
              <span
                onClick={toggleDescription}
                className="text-red-600 cursor-pointer ml-2"
              >
                {showFullDescription ? "See Less" : "See More"}
              </span>
            )}
          </p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white p-2 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Add PropTypes validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ProductCard;
