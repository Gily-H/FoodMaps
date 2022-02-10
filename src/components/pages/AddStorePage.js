import React, { useState } from "react";
import { formatStringInput, isFormattedZip } from "../../utils/string-utils";

const AddStorePage = () => {
  const [formVals, setFormVals] = useState({
    name: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    description: "",
    image: "",
  });

  const handleFormValOnChange = (event) => {
    if (!formVals.hasOwnProperty(event.target.name)) return;
    setFormVals((prevFormVals) => ({
      ...prevFormVals,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNestedFormValOnChange = (event) => {
    if (!formVals.address.hasOwnProperty(event.target.name)) return;
    setFormVals((prevFormVals) => ({
      ...prevFormVals,
      address: {
        ...prevFormVals.address,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(formVals);
  };

  const validateForm = () => {
    const { name, address, description, image } = formVals;

    // validation name

    // validation address

    // validation city

    // validation zip

    // validate image url
  };

  const formatFormValues = (values) => {
    const { name, address, description, image } = values;
    const formattedValues = {}

    formattedValues["name"] = formatStringInput(name)
    formattedValues["description"] = formatStringInput(description)
    
  }

  return (
    <div className="max-w-screen-md mx-auto">
      <form
        className="m-4 pb-12 shadow-lg rounded-md border bg-white"
        onSubmit={handleFormSubmit}>
        <h2 className="text-center mb-4 p-6 rounded-t-md text-3xl font-bold text-white bg-green-800">
          Add Store Form
        </h2>
        <div className="px-16">
          <div className="required-field italic mb-5">
            * <span className="text-sm text-gray-700">required field</span>
          </div>

          <div className="input-container">
            <label className="add-store-input-label" htmlFor="store-name">
              Store Name<span className="required-field">*</span>
            </label>
            <input
              className="add-store-input-field"
              id="store-name"
              type="text"
              placeholder="Name"
              name="name"
              value={formVals.name}
              onChange={handleFormValOnChange}
              required
            />
          </div>

          <div className="input-container">
            <label className="add-store-input-label" htmlFor="store-address">
              Store Address<span className="required-field">*</span>
            </label>
            <input
              className="add-store-input-field"
              id="store-address"
              type="text"
              placeholder="Street Address"
              name="street"
              value={formVals.address.street}
              onChange={handleNestedFormValOnChange}
              required
            />
          </div>

          <div className="input-container flex justify-between">
            <div className="grow">
              <label className="add-store-input-label" htmlFor="store-city">
                City<span className="required-field">*</span>
              </label>
              <input
                className="add-store-input-field grow"
                id="store-city"
                type="text"
                placeholder="City"
                name="city"
                value={formVals.address.city}
                onChange={handleNestedFormValOnChange}
                required
              />
            </div>

            <div className="w-32 mx-8">
              <label
                className="add-store-input-label add-city-input"
                htmlFor="store-state">
                State<span className="required-field">*</span>
              </label>
              <input
                className="add-store-input-field disabled:bg-gray-300"
                id="store-state"
                type="text"
                placeholder="State"
                name="state"
                value="New York"
                disabled
                required
              />
            </div>

            <div>
              <label className="add-store-input-label" htmlFor="store-zip">
                Zip<span className="required-field">*</span>
              </label>
              <input
                className="add-store-input-field"
                type="text"
                id="store-zip"
                placeholder="Zip"
                name="zip"
                value={formVals.address.zip}
                onChange={handleNestedFormValOnChange}
                required
              />
            </div>
          </div>

          <div className="input-container">
            <label className="add-store-input-label" htmlFor="store-image">
              Image
            </label>
            <input
              className="add-store-input-field"
              id="store-image"
              type="text"
              placeholder="Image"
              name="image"
              value={formVals.image}
              onChange={handleFormValOnChange}
            />
          </div>

          <div className="input-container">
            <label className="add-store-input-label" htmlFor="store-description">
              Description
            </label>
            <textarea
              className="add-store-input-field mb-6"
              id="store-description"
              type="text"
              placeholder="Description"
              name="description"
              value={formVals.description}
              onChange={handleFormValOnChange}
            />
          </div>

          <button className="block w-full py-3 px-4 rounded-md font-bold text-white bg-emerald-600 shadow-md hover:opacity-70 active:bg-emerald-700 active:text-gray-300 ">
            Submit Store
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStorePage;
