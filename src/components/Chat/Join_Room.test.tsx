import { render,screen } from "@testing-library/react"
import Join_room from "./Join_Room";



test('everything is running fine',()=>{
    render (<Join_room/>);
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

})