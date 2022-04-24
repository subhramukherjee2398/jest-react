import {fireEvent, render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../Login'

describe("Test th elogin component",()=>{
     test("render login form have two buttons",async()=>{
         render(<Login/>)
         const buttonList = await screen.findAllByRole("button");
         console.log(buttonList);
         expect(buttonList).toHaveLength(2)
     })

     test("email input field should accept email",()=>{
         render(<Login/>)
         const email = screen.getByPlaceholderText("Enter your email..");
         userEvent.type(email,"xvb");
         expect(email.value).not.toMatch("subhramukherjee@gmail.com");
     })

     test("passport input should  type password ", () => {
        render(<Login />);
        const password = screen.getByPlaceholderText("Enter your password..");
        expect(password).toHaveAttribute("type", "password");
      });

      
})