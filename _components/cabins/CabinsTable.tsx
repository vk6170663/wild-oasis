import CabinTableBody from "./CabinTableBody";
import CabinTableHeader from "./CabinTableHeader";

const CabinsTable = () => {
    return (
        <div className="border-2 border-gray-100">
            <CabinTableHeader />
            <CabinTableBody />
        </div>
    );
};

export default CabinsTable;