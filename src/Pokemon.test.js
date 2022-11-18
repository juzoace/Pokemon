import { render,screen, waitFor } from "@testing-library/react";
import Details from './Components/Details';
import * as constants from './constant';

jest.mock('./constant')

describe('Pokemon list', ()=>{
    beforeEach(()=>jest.clearAllMocks())
    it('should return the details of a pokemon', async()=>{
        constants.getPokemon.mockResolvedValue({
            result:[{name:"pokeman"}]
        });
        render(<Details/>); 
        await waitFor(()=>{
            screen.getByText("pokeman")
        })
    })

    it('should render error message when api fails', async()=>{
        constants.getPokemon.mockRejectedValue({

        });
        render(<Details/>);
        await waitFor(()=>{
            screen.getByText("Unable to get response")
        })
    })
})