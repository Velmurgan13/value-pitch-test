import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUser } from "../../actions/users";
import Header from "../Header";
import Footer from "../Footer";

const CreateUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  country: Yup.string().required("Required"),
  avatar: Yup.string(),
  dateOfBirth: Yup.date().max(new Date()).required("Required"),
});

function CreateUser() {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  let { newUser } = useSelector((state) => state.createUser);

  if (newUser && newUser._id) {
    alert("Successfully added new user");
    newUser = null;
    window.location = "/user-management";
  }

  function convertFileToBase64(event) {
    const file = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setAvatar(reader.result);
    };

    reader.onerror = function () {};

    return event;
  }

  return (
    <>
      <Header />
      <div className="flex w-full h-full flex-col items-center justify-items-center pb-8 bg-[#f7f8fa]">
        <div className="flex flex-col md:w-4/12 w-11/12">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              address: "",
              country: "USA",
              dateOfBirth: "",
              avatar: "",
            }}
            validationSchema={CreateUserSchema}
            onSubmit={(values) => {
              values.avatar = avatar || "";

              dispatch(createUser(values));
            }}
          >
            {({ errors, touched }) => (
              <div className="w-full flex flex-col bg-white rounded-lg shadow-lg md:mt-20 mt-5 items-center py-10">
                <div className="text-center mb-10">
                  <h1 className="text-5xl font-bold mb-3">Create User</h1>
                </div>
                <div className="flex flex-col w-10/12">
                  <Form className="flex flex-col w-full">
                    <div className="flex flex-row w-full mb-3">
                      <div className="flex flex-col w-6/12 mr-3">
                        <Field
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          className="px-3 py-4 border border-gray-300 rounded-lg w-full"
                        />
                        <span className="text-sm font-bold pb-2 text-red-600">
                          <ErrorMessage name="firstName" />
                        </span>
                      </div>
                      <div className="flex flex-col w-6/12">
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          className="px-3 py-4 border border-gray-300 rounded-lg w-full"
                        />
                        <span className="text-sm font-bold pb-2 text-red-600">
                          <ErrorMessage name="lastName" />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col mb-3">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="px-3 py-4 border border-gray-300 rounded-lg mb-3 w-full"
                      />
                      <span className="text-sm font-bold pb-2 text-red-600">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
                    <div className="flex flex-row mb-3">
                      <div className="flex flex-col mr-3">
                        <label htmlFor="dateOfBirth" className="ml-2">
                          Date of birth
                        </label>
                        <Field
                          type="date"
                          name="dateOfBirth"
                          className="px-3 py-4 border border-gray-300 rounded-lg w-full"
                        />

                        <span className="text-sm font-bold pb-2 text-red-600">
                          <ErrorMessage name="dateOfBirth" />
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="avatar" className="ml-2">
                          Upload profile picture
                        </label>
                        <Field
                          type="file"
                          name="avatar"
                          onChange={(e) => convertFileToBase64(e)}
                          className="px-3 py-4 border border-gray-300 rounded-lg w-full"
                        />

                        <span className="text-sm font-bold pb-2 text-red-600">
                          <ErrorMessage name="avatar" />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col mb-3">
                      <Field
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="px-3 py-4 border border-gray-300 rounded-lg mb-3 w-full"
                      />
                      <span className="text-sm font-bold pb-2 text-red-600">
                        <ErrorMessage name="address" />
                      </span>
                    </div>
                    <div className="flex flex-col mb-3">
                      <label htmlFor="country" className="ml-2">
                        Select a country
                      </label>
                      <Field
                        as="select"
                        name="country"
                        className="border border-gray-400 px-2 py-3"
                      >
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                      </Field>

                      <span className="text-sm font-bold pb-2 text-red-600">
                        <ErrorMessage name="country" />
                      </span>
                    </div>
                    <Field
                      type="submit"
                      value="Create User"
                      className="px-3 py-4 border bg-primary rounded-lg mb-3 w-full text-white font-bold cursor-pointer"
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

export default CreateUser;
