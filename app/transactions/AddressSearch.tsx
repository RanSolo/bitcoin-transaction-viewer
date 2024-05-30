"use client";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
function AddressSearch({ defaultAddress }: { defaultAddress: string }) {
  const router = useRouter();

  const [address, setAddress] = useQueryState("address");
  return (
    <div className="flex items-center w-full">
      <input
        className=" input-bordered input-lg mr-4 w-full"
        placeholder="<BTC Address Here>"
        value={address || defaultAddress || ""}
        onChange={e => {
          setAddress(e.target.value);
          router.push(`/transactions?address=${address}`);
        }}
        onKeyUp={e => {
          router.push(`/transactions?address=${address}`);
        }}
      />
      <button className="btn btn-ghost text-danger" onClick={() => setAddress("")}>
        X
      </button>
    </div>
  );
}
export default AddressSearch;
