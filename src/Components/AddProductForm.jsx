import { useState } from "react";
import PropTypes from "prop-types";

const AddProductForm = ({ onAdd }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
    rating: { rate: "", count: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rate" || name === "count") {
      setNewProduct({
        ...newProduct,
        rating: { ...newProduct.rating, [name]: value },
      });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newProduct);
    setNewProduct({
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
      rating: { rate: "", count: "" },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Add New Product</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newProduct.title}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none mb-4"
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={newProduct.price}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none mb-4"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newProduct.description}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none mb-4"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newProduct.image}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none mb-4"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newProduct.category}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none mb-4"
      />
      <input
        type="text"
        name="rate"
        placeholder="Rating"
        value={newProduct.rating.rate}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none mb-4"
      />
      <input
        type="text"
        name="count"
        placeholder="Rating Count"
        value={newProduct.rating.count}
        onChange={handleChange}
        required
        className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none mb-4"
      />
      <button
        type="submit"
        className="bg-red-500 text-white p-2 rounded-md w-full"
      >
        Add Product
      </button>
    </form>
  );
};
AddProductForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddProductForm;
