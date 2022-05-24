import { useEffect, useState } from "react"
import { useAppSelector } from "../redux/store";

export default function usePremiumMembershipStatus() {
    const { user } = useAppSelector((state) => state.user);
    const [premiumMemberDetails, setPrimiumMemberDetails] = useState({});
    const [premiumMemberId, setPrimiumMemberId] = useState('');
    const [premiumMemberCategory, setPremiumMemberCategory] = useState('');
    const [premiumMembershipStatus, setPremiumMembershipStatus] = useState(false);
    useEffect(() => {
        
            fetch(`http://floating-basin-02241.herokuapp.com/premiumMembers/single?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if(data){
                    setPremiumMembershipStatus(true)
                    setPrimiumMemberDetails(data);
                    setPremiumMemberCategory(data.categoryName);
                    setPrimiumMemberId(data._id);
                }
                

            })
        
       
    }, [user])
    return{
        premiumMemberDetails,premiumMemberId,premiumMemberCategory,premiumMembershipStatus
    }
}