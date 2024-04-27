import { Field, useFormik } from "formik";
import { registerSchema } from "schemas";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseApiUrl } from "store/constant";
import profileImageHolder from "../../assets/register-profile-custom-image.jpg";
import "./loginPage.css";
function Register() {
  const navigate = useNavigate();
  // navigate('/about', { replace: true });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    occupation: "",
    location: "",
    picture: null,
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values, action) => {
      try {
        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("occupation", values.occupation);
        formData.append("location", values.location);
        formData.append("picture", values.picture);
        console.log(formData);
        const response = await axios.post(
          baseApiUrl + "/auth/register",
          formData,
        );
        action.resetForm();
        navigate("/", { replace: true });
      } catch (error) {
        console.log(error);
      }
    },
  });
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
              <h1 className="text-4xl font-bold text-[#110f3e] tracking-wider">
                Social X
              </h1>
            </div>
            <div className=" bg-inherit absolute bottom-0 w-full px-4 py-8 flex items-center justify-center gap-6">
              <Link
                type="button"
                className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]  "
              >
                About
              </Link>
              <Link
                type="button"
                className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]"
              >
                Pravicy
              </Link>
              <Link
                type="button"
                className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]"
              >
                Terms of usage
              </Link>
              <Link
                type="button"
                className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* right side form */}
          <div className="shadow-md px-8 py-10 w-full flex flex-col items-center justify-center relative bg-[#ffff]">
            <h1 className="text-center text-2xl mb-10 text-[#110f3e] font-semibold tracking-wide">
              Sign up
            </h1>
            <form className="grid grid-cols-2 gap-x-4" onSubmit={handleSubmit}>
              <div className=" col-span-2 w-full flex flex-col items-center justify-center mb-8">
                <label
                  htmlFor="profile-picture"
                  className="mb-4 w-24 aspect-square overflow-hidden rounded-full"
                >
                  <img
                    src={
                      values.picture
                        ? URL.createObjectURL(values.picture)
                        : profileImageHolder
                    }
                    alt="profile-image"
                    className="w-full shadow-xl object-fill"
                  />
                </label>
                <input
                  type="file"
                  name="picture"
                  id="profile-picture"
                  hidden
                  onChange={(e) => {
                    setFieldValue("picture", e.target.files[0]);
                  }}
                  onBlur={handleBlur}
                />
                {/* <Field type="file" name="picture" id='profile-picture' accept="image/*" /> */}
                <p className="text-red-500 text-sm">
                  {errors.picture && touched.picture && errors.picture}
                </p>
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  name="firstName"
                  className="px-3 border-b-2 outline-none min-w w-full"
                  value={values.firstName}
                  placeholder="First name"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-500 text-sm">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  name="lastName"
                  className="px-3 border-b-2 outline-none min-w w-full"
                  value={values.lastName}
                  placeholder="Last name"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-500 text-sm">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  name="email"
                  className="px-3 border-b-2 outline-none min-w w-full"
                  value={values.email}
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-500 text-sm">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="mb-8">
                <input
                  type="password"
                  name="password"
                  className="px-3 border-b-2 outline-none min-w w-full"
                  value={values.password}
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-500 text-sm">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  name="occupation"
                  className="px-3 border-b-2 outline-none min-w w-full"
                  value={values.occupation}
                  placeholder="Occupation"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-500 text-sm">
                  {errors.occupation && touched.occupation && errors.occupation}
                </p>
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  name="location"
                  className="px-3 border-b-2 outline-none min-w w-full"
                  value={values.location}
                  placeholder="Location"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-500 text-sm">
                  {errors.location && touched.location && errors.location}
                </p>
              </div>
              <button
                type="submit"
                className="px-4 py-2 w-40 bg-[#8df9e5] text-white rounded-md hover:bg-[#58a597]"
              >
                Sign up
              </button>
            </form>
            <div className="mt-6">
              <a href="#" className="text-gray-500">
                Forgot your password?
              </a>
            </div>
            <div className="mt-6 text-center text-gray-600">
              Don't have an account?{" "}
              <Link to="/" className="text-blue-500">
                Log in{" "}
              </Link>
            </div>
            <div className=" bg-inherit absolute bottom-2 w-full flex items-center justify-center gap-6 sm:hidden">
              <Link
                type="button"
                className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]  "
              >
                About
              </Link>
              <Link
                type="button"
                className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]"
              >
                Pravicy
              </Link>
              <Link
                type="button"
                className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]"
              >
                Terms of usage
              </Link>
              <Link
                type="button"
                className="px-4 py-2 text-sm text-[#1f2690] hover:text-[#095c6a]"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
