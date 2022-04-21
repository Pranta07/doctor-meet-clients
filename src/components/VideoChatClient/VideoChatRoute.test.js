import { render,screen } from "@testing-library/react"
import VideoChatRoute from "./VideoChatRoute";
test('everything is running fine',()=>{
    render (<VideoChatRoute/>);
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

})