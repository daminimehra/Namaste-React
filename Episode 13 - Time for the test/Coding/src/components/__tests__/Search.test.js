import { render } from "@testing-library/react"
import Body from "../Body"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(data);
        }
    })
})
 
it(" should render the body component", ()=>{

    render(<Body/>);

})