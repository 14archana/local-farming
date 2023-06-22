
import React from 'react'
import loginSignupImage from "../assest/login.jpg"
function SignUp() {
  return (
    <div className='p-3 md:p-4'>
    <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
      <div className='w-20 overflow-hidden'>
        <img src={loginSignupImage} className='w-full'/>
      </div>

    </div>
    
    </div>

  )
}
export default SignUp
//second code
// import React from "react";
// import { Form, Input, Button } from "antd";
// import { Link } from "react-router-dom";
// import "./SignUp.css"; // Import the CSS file for Register component

// const rules = [
//   {
//     required: true,
//     message: "required",
//   },
// ];

// export default function SignUp() {
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };

//   return (
//     <div className="SignUp-container">
//       <div className="SignUp-header">
//         <h1 className="SignUp-title">
//           FRESH CART
//           <span className="SignUp-subtitle">SignUp</span>
//         </h1>
        
//         </div>
//  <Form layout='vertical'
//  onFinish={onFinish}>
//    <Form.Item 
//    label='Name' name='name' rules={rules}>
//      <Input placeholder='Name'/> 
//   </Form.Item> <Form.Item 
//    label='Email' name='email' rules={rules}>
//      <Input placeholder='Email'/> 
//   </Form.Item>
//   <Form.Item 
//    label='Password' name='Password'rules={rules} >
//      <Input type ='password' placeholder='Password'/> 
//   </Form.Item>
//   <Button type= 'primary' htmlType='submit'block className='mt-2'>SignUp</Button>
//   <div Classname="mt-5 text-center">
//    <span className='text-grey-500'>
//     Already have an account? <Link to="/Login"className='text-primary'> Login</Link>
//    </span>
//    </div>


//  </Form>

//    </div>
//   );
// }

