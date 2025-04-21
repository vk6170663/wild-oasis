import CabinsHeader from "@/_components/cabins/CabinsHeader";
import CabinsTable from "@/_components/cabins/CabinsTable";

const CabinsPage = () => {
    return (
        <div className="bg-gray-50 py-8 px-12 ">
            <CabinsHeader />
            <CabinsTable />
        </div>
    );
};

export default CabinsPage;