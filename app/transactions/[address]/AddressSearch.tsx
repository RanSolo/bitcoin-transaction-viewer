'use client'
 
import { useQueryState } from 'nuqs'
 
function AddressSearch() {
  const [address, setAddress] = useQueryState('address')
  return (
    <>
      <input  placeholder="<BTC Address Here>"  value={address || ''} onChange={e => setAddress(e.target.value)} />
      <button onClick={() => setAddress(null)}>Clear</button>
    </>
  )
}
export default AddressSearch;
