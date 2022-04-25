import { render,screen } from "@testing-library/react"
import App from './App'


test('everything is running fine',()=>{
    render (<App/>);
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

})