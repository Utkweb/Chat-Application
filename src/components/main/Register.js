import React from "react";
import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./Register.css";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  // const [isLoading, setLoading] = useState(false);

  // const handleNavigation = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     // Perform navigation or route change here
  //     setLoading(false);
  //   }, 5000); // Delay in milliseconds (2 seconds in this example)
  // };

  const userForm = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  // 2. Create a function for form submission
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Success");
      // Swal.fire({
      //   title: "Success",
      //   text: "User added successfully😁👍",
      //   icon: "success",
      // });
      toast.success("Registered Successfully!");
      navigate("/login");
    } else {
      console.log("Something went wrong");
      Swal.fire({
        title: "Error",
        text: "Something went wrong😔",
        icon: "error",
      });
    }
  };
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  return (
    <div className="container box1">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="card border-0 mbox">
            <div className="p-4">
              <h4>Create Account</h4>
              <Formik
                initialValues={userForm}
                onSubmit={userSubmit}
                validationSchema={SignupSchema}
              >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 gx-4">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label" htmlFor="firstname">
                            First Name
                          </label>
                          <div className="form-control-wrap">
                            <input
                              type="text"
                              className="form-control"
                              id="firstname"
                              placeholder="First Name"
                              onChange={handleChange}
                              value={values.firstname}
                              aria-describedby={
                                touched.firstname ? errors.firstname : ""
                              }
                              error={
                                errors.firstname && touched.firstname
                                  ? "true"
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label" htmlFor="lastname">
                            Last Name
                          </label>
                          <div className="form-control-wrap">
                            <input
                              type="text"
                              className="form-control"
                              id="lastname"
                              placeholder="Last Name"
                              onChange={handleChange}
                              value={values.lastname}
                              aria-describedby={
                                touched.lastname ? errors.lastname : ""
                              }
                              error={
                                errors.lastname && touched.lastname
                                  ? "true"
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* <!-- Email input --> */}
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label" htmlFor="email-address">
                            Email Address
                          </label>
                          <div className="form-control-wrap">
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="youremail@example.com"
                              onChange={handleChange}
                              value={values.email}
                              aria-describedby={
                                touched.email ? errors.email : ""
                              }
                              error={
                                errors.email && touched.email
                                  ? "true"
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* <!-- Password input --> */}
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <div className="form-control-wrap">
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Password"
                              onChange={handleChange}
                              value={values.password}
                              aria-describedby={
                                touched.password ? errors.password : ""
                              }
                              error={
                                errors.password && touched.password
                                  ? "true"
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* <!-- Checkbox --> */}
                      {/* <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="muteFor"
                      id="privacy-term-agree"
                    />
                    <label class="form-check-label" for="privacy-term-agree">
                      {" "}
                      I agree with <a href="#">privacy policy &amp; terms</a>
                    </label>
                  </div>
                </div> */}
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                          // onClick={handleNavigation}
                          // disabled={isLoading}
                        >
                          Account Register
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            <div className="p-4 border-top border-light">
              <div className="row justify-content-center">
                <div className="col-9">
                  <h6 className="tyn-title-overline text-center pb-1">
                    Or Signup With
                  </h6>
                  <div className="d-flex gap gap-3">
                    <div className="flex-grow-1">
                      <button className="btn btn-light w-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-google"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                        </svg>
                        <span>&nbsp;Google</span>
                      </button>
                    </div>
                    <div className="flex-grow-1">
                      <button className="btn btn-light w-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                        </svg>
                        <span>&nbsp;Facebook</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="small">
              Already have an account? <NavLink to="/Login">Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
