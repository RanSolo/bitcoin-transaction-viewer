'use client'
 
import Link from 'next/link';
import { useQueryState } from 'nuqs'
import { FaSearch } from "react-icons/fa";
import {useRouter} from "next/navigation";
function AddressSearch() {
    const router = useRouter();

    const [address, setAddress] = useQueryState('address')
    return (
        <div className="flex items-center w-full">
            <input 
                className=" input-bordered input-lg mr-4 w-full" 
                placeholder="<BTC Address Here>"  
                value={address || ''} 
                onChange={e => {
                    setAddress(e.target.value)
                    router.push(`/transactions?address=${address}`)
                    }} 
                onKeyUp={
                    (e) => {
                        console.log('e', e);
                        
                            router.push(`/transactions?address=${address}`)
                    }  
                }
            />
            <button
                className="btn btn-ghost text-danger"
                onClick={() => setAddress('')}
            >
                X
            </button>
      
        </div>
    )
}
export default AddressSearch;
