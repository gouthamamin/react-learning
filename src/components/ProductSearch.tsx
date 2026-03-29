import { useMemo, useState, type ChangeEvent } from "react"
import SearchBar from "./Searchbar";


const ProductSearch = () => {
  const [searchItem, setSearchItem] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const fixedPrice = 100;
  console.log("Parent : Product page rendered");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Handle search function called:", e.target.value);
    setSearchItem(e.target.value);
  };

  const totalPrize = useMemo(() => {
    return quantity * fixedPrice;
  }, [quantity]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Product Page</h1>
      <div className="flex flex-col gap-8">
        <SearchBar searchItem={searchItem} handleSearch={handleSearch} />
        <div className="flex gap-4 text-lg font-bold">
          <span> Quantity : {quantity}</span>
          <span>Prize : {totalPrize}</span>
        </div>
        <button className="px-4 py-2 border-2 border-solid rounded-md bg-blue-500 text-white cursor-pointer"
          onClick={() => setQuantity((prev) => prev + 1)}>Add Item</button>
      </div>
    </div>
  )
};

export default ProductSearch;