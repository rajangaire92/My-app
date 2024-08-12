import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const Body = () => {
  const [data, setData] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const productResponse = await fetch("https://fakestoreapi.com/products");
      if (productResponse.ok) {
        const res = await productResponse.json();
        setData(res);
        console.log("Fetched Data:", res);
      }
    };
    fetchData();
  }, []);

  const handleAddProduct = (newProduct) => {
    const newProductWithId = {
      ...newProduct,
      id: 21, 
    };
    setData([...data, newProductWithId]);
    setShowAddForm(false);
    console.log("Updated Data with new Product:", [...data, newProductWithId]);
  };

  const handleDeleteProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setData(data.filter((product) => product.id !== id));
      console.log(
        "Updated Data after Deletion:",
        data.filter((product) => product.id !== id)
      );
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
    });

    if (res.ok) {
      const updatedData = data.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      );
      setData(updatedData);
      console.log("Updated Data after Edit:", updatedData);
    }
  };

  return (
    <>
      <div className="bg-red-700 text-red-700 h-20">h</div>
      <div className="mt-10 ml-5 mb-10 flex  text-red-700 text-5xl font-semibold">
        Available Products
      </div>
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="bg-red-500 text-white p-2 m-4 rounded-md"
      >
        {showAddForm ? "Close Form" : "Add New Item"}
      </button>

      {showAddForm && <AddProductForm onAdd={handleAddProduct} />}

      <ProductList
        products={data}
        onDelete={handleDeleteProduct}
        onUpdate={handleUpdateProduct}
      />
    </>
  );
};

export default Body;
