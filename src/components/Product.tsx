import { useMemo, useState, type ChangeEvent } from "react"

const ProductPage = () => {
  const [searchItem, setSearchItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const fixedPrize = 100;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Searching item:", e.target.value);
    setSearchItem(e.target.value);
  };

  const calculatePrize = (quantity: number) => {
    console.log("total prize :", quantity * fixedPrize);
    return quantity * fixedPrize;
  };

  const totalPrize = useMemo(() => {
    return calculatePrize(quantity)
  }, [quantity]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Product Page</h1>
      <div className="flex flex-col gap-8">
        <input className="border-2 border-solid rounded-md"
          value={searchItem} onChange={(e) => handleSearch(e)} />
        <div className="flex gap-4 text-lg font-bold">
          <span> Quantity : {quantity}</span>
          <span>Prize : {totalPrize}</span>
        </div>
        <button className="px-4 py-2 border-2 border-solid rounded-md bg-blue-500 text-white cursor-pointer"
          onClick={() => setQuantity((prev) => prev + 1)}>Add Item</button>
      </div>
    </div>
  );
};

export default ProductPage;

