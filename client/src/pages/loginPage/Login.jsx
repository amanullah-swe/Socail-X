import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { loginSchema } from "schemas";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "fearures/auth/authSlice";
import { baseApiUrl } from "store/constant";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async () => {
      try {
        console.log(values);
        const response = await axios.post(`${baseApiUrl}/auth/login`, values);
        dispatch(setLogin({ user: response.data.user, token: response.data.token }));
        navigate('/home');
      } catch (error) {
        console.log(error);
      }



    }
  })
  return (
    <div className="flex justify-center min-h-screen w-[100vw] bg-[#ffff] shadow-2xl">
      <div className="flex items-center justify-center h-full bg-[#ffff] max-w-[100rem] w-full">
        <div className="grid grid-cols-2 h-screen w-full max-sm:grid-cols-1">
          {/* left side design */}
          <div className="bg-[#e6e6f0] flex items-center justify-center relative max-sm:hidden rounded-2xl overflow-hidden">
            {/* background design elements */}
            <div className=" w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-[#070946] to-[#1f2690] absolute top-[-6vw] right-[-6vw] shadow-xl"></div>
            <div className=" w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-[#fda5b1] to-[#ffbdb5] absolute top-[-9vw] right-[9vw] shadow-xl"></div>
            <div className=" w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-[#095c6a] to-[#07a2b8] absolute bottom-[20%] left-[-10vw] shadow-xl"></div>
            <div className="text-center space-y-8 text-white px-8">
              <h1 className="text-4xl font-bold text-[#110f3e] tracking-wider">Social X</h1>
            </div>
            <div className=" bg-inherit absolute bottom-0 w-full px-4 py-8 flex items-center justify-center gap-6">
              <Link type="button" className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]  ">
                About
              </Link>
              <Link type="button" className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]">
                Pravicy
              </Link>
              <Link type="button" className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]">
                Terms of usage
              </Link>
              <Link type="button" className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]">
                FAQ
              </Link>
            </div>
          </div>

          {/* right side form */}
          <div className="shadow-md px-8 py-10 w-full flex flex-col items-center justify-center relative bg-[#ffff]">
            <h1 className="text-center text-2xl mb-6 text-[#110f3e] font-semibold tracking-wide">Log in</h1>
            <form action="#" onSubmit={handleSubmit} className="w-fit">
              <div className="mb-10">
                <input
                  type="email"
                  id="email"
                  className="px-3 border-b-2 outline-none"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-14">
                <input
                  type="password"
                  id="password"
                  className="px-3 border-b-2 outline-none"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button type="submit" className="px-4 py-2 w-40 bg-[#8df9e5] text-white rounded-md hover:bg-[#58a597]">
                Log in
              </button>
            </form>
            <div className="mt-6">
              <a href="#" className="text-gray-500">Forgot your password?</a>
            </div>
            <div className="mt-6 text-center text-gray-600">
              Don't have an account? <Link to="/sign-up" className="text-blue-500">Sign up</Link>
            </div>
            <div className=" bg-inherit absolute bottom-0 w-full px-4 py-8 flex items-center justify-center gap-6 sm:hidden">
              <Link type="button" className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]  ">
                About
              </Link>
              <Link type="button" className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]">
                Pravicy
              </Link>
              <Link type="button" className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]">
                Terms of usage
              </Link>
              <Link type="button" className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
