import { getCabins } from "@/services/apiCabins";
import Image from "next/image";

const CabinTableBody = async () => {

    const cabins = await getCabins();
    console.log(cabins);

    return (
        <div className="cabin-table-body">
            <section className="bg-white pt-1">
                {cabins.map((cabinItem, i) =>
                    <div key={i} role="row" className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-4  px-8 py-4">
                        <Image src={cabinItem.image} width="600" height="600" className="w-[6.4rem]  aspect-[3/2] object-cover object-center scale-150 -translate-x-2.5" alt="Cabin Image" />
                        <div className="font-semibold">{cabinItem.name}</div>
                        <div className="font-normal text-gray-600">Fits up to {cabinItem.maxCapacity} guests</div>
                        <div className="font-semibold">${cabinItem.regularPrice}</div>
                        <span>{cabinItem.discount || "-"}</span>
                        <div>
                            <div className="flex justify-end items-center">
                                <button className="cursor-pointer">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </section>
        </div>
    );
};

export default CabinTableBody;