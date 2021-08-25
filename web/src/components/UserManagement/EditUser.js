import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { getUserById } from "../../actions/users";

const EditUserSchema = Yup.object().shape({
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
  avatar: Yup.array().min(1, "Please select a profile picture").nullable(),
  dateOfBirth: Yup.date().max(new Date()).required("Required"),
});

function EditUser(props) {
  const dispatch = useDispatch();
  const userId = props.match.params._id;
  const { user } = useSelector((state) => state.getUserById);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  if (!user) {
    return "Loading...";
  }

  return (
    <div className="flex w-full h-full flex-col items-center justify-items-center pb-8 bg-[#f7f8fa]">
      <div className="flex flex-col md:w-4/12 w-11/12">
        <Formik
          initialValues={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address: user.address,
            country: user.country,
            dateOfBirth: user.dateOfBirth
              ? moment(user.dateOfBirth).format("YYYY/MM/DD")
              : "",
            avatar: "",
          }}
          validationSchema={EditUserSchema}
          onSubmit={(values) => {
            alert(`Sign up successful!\n\n${JSON.stringify(values, null, 3)}`);
          }}
        >
          {({ errors, touched }) => (
            <div className="w-full flex flex-col bg-white rounded-lg shadow-lg md:mt-20 mt-5 items-center py-10">
              <div className="text-center mb-10">
                <h1 className="text-5xl font-bold mb-3">Edit User</h1>
              </div>
              <div className="flex flex-col w-10/12">
                <Form className="flex flex-col w-full">
                  <div className="flex flex-row w-full mb-3">
                    <div className="flex flex-col w-6/12">
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
                    <div className="flex flex-col">
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
                    value="Edit User"
                    className="px-3 py-4 border bg-primary rounded-lg mb-3 w-full text-white font-bold cursor-pointer"
                  />
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditUser;
