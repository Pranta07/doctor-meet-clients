import { render,screen } from "@testing-library/react"
import PharmecyHome from "./PharmecyHome";



test('everything is running fine',()=>{
    render (<PharmecyHome/>);
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

})