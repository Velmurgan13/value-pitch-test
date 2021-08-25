import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import Header from "./Header";
import Footer from "./Footer";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
function SignIn() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);

  if (token) {
    localStorage.setItem("token", token);
    window.location = "/user-management";
  }

  const existingToken = localStorage.getItem("token");
  if (existingToken) {
    window.location = "/user-management";
  }

  return (
    <>
      <Header />
      <div className="flex w-full h-full flex-col items-center justify-items-center pb-8 bg-[#f7f8fa]">
        <div className="flex flex-col md:w-4/12 w-11/12">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SigninSchema}
            onSubmit={(values) => {
              dispatch(login(values.email, values.password));
            }}
          >
            {({ errors, touched }) => (
              <div className="w-full flex flex-col bg-white rounded-lg shadow-lg md:mt-20 mt-5 items-center py-10">
                <div className="text-center mb-10">
                  <h1 className="text-5xl font-bold mb-3">Sign In</h1>
                </div>
                <div className="flex flex-col w-10/12">
                  <Form className="flex flex-col items-center">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="px-3 py-4 border border-gray-300 rounded-lg mb-3 w-full"
                    />
                    <span className="text-sm font-bold pb-2 text-red-600">
                      <ErrorMessage name="email" />
                    </span>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="px-3 py-4 border border-gray-300 rounded-lg mb-3 w-full"
                    />
                    <span className="text-sm font-bold pb-2 text-red-600">
                      <ErrorMessage name="password" />
                    </span>
                    <Field
                      type="submit"
                      value="Click Here to Sign In"
                      className="px-3 py-4 border bg-primary rounded-lg mb-3 w-full text-white font-bold"
                    />
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
