const CabinsHeader = () => {
    return (
        <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-medium text-gray-600">All cabins</h2>
            <div className="sorting-container flex items-center gap-6">
                <div className="discount-sorting-container bg-white flex items-center gap-3 p-1 shadow rounded-[5px]">
                    <button className=" font-medium text-gray-700 cursor-pointer p-1 transition-colors">All</button>
                    <button className=" font-medium text-gray-700 cursor-pointer p-1 transition-colors">No discount</button>
                    <button className=" font-medium text-gray-700 cursor-pointer p-1 transition-colors">With discount</button>
                </div>
                <div>
                    <select name="" id="" className="p-2 border-none -outline-offset-1 bg-white shadow rounded-[5px] active:outline-violet-400 focus:outline-violet-400 ">
                        <option value="">Sort by name (A-Z)</option>
                        <option value="">Sort by name (Z-A)</option>
                        <option value="">Sort by price (low first)</option>
                        <option value="">Sort by price (high first)</option>
                        <option value="">Sort by capacity (low first)</option>
                        <option value="">Sort by capacity (high first)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CabinsHeader;