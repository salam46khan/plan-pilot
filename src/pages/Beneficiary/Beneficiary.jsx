import { useState } from "react";
import BeneficiarItem from "../../components/BeneficiarItem";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Beneficiary = () => {
    const axiosPublic = useAxiosPublic();

    const [benef, setBenef] = useState([]);
    axiosPublic.get('/benefited')
        .then(data=> {
            // console.log(data.data);
            setBenef(data.data)
        })

    return (
        <div className="py-10 px-3 bg-slate-100">
            <div className="container mx-auto">
                <h2 className="text-4xl text-center font-titleText mb-3">Who will be Beneficiar</h2>
                <div className="flex justify-center gap-5 flex-wrap">
                    {
                        benef.map(item => <BeneficiarItem item={item} key={item.id}></BeneficiarItem>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Beneficiary;