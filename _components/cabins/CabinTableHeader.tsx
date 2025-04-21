const CabinTableHeader = () => {
    return (
        <header className="cabin-table-header grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] p-3">
            <div></div>
            <div className="uppercase font-medium text-gray-600">Cabins</div>
            <div className="uppercase font-medium text-gray-600">Capacity</div>
            <div className="uppercase font-medium text-gray-600">Price</div>
            <div className="uppercase font-medium text-gray-600">Discount</div>
            <div></div>
        </header>
    );
};

export default CabinTableHeader;