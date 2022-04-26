import { render,screen } from "@testing-library/react"
import PayAppointmentFee from "./PayAppointmentFee";



test('everything is running fine',()=>{
    render (<PayAppointmentFee/>);
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

})