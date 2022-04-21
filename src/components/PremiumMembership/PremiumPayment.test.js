import { render,screen } from "@testing-library/react"
import PremiumPayment from "./PremiumPayment"


test('everything is running fine',()=>{
    render (<PremiumPayment/>);
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

})