import React, { useState } from "react";

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

  const handleFormChange = (event) => {
    setFormVals((prevFormVals) => ({
      ...prevFormVals,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <form className="w-3/4 mx-auto my-8 py-12 px-16 shadow-lg rounded-md border-solid border-slate-200 border-2 bg-white">
        <div className="input-container">
          <label className="add-store-input-label" htmlFor="store-name">
            Store Name
          </label>
          <input
            className="add-store-inputs"
            id="store-name"
            placeholder="Name"
            name="name"
            value={formVals.name}
            onChange={handleFormChange}
          />
        </div>

        <div className="input-container">
          <label className="add-store-input-label" htmlFor="store-address">
            Store Address
          </label>
          <input
            className="add-store-inputs"
            id="store-address"
            placeholder="Street Address"
            name="address.street"
            value={formVals.address.street}
            onChange={handleFormChange}
          />
        </div>

        <div className="input-container flex justify-between">
          <div className="grow">
            <label className="add-store-input-label" htmlFor="store-city">
              City
            </label>
            <input
              className="add-store-inputs grow"
              id="store-city"
              placeholder="City"
              name="address.city"
              value={formVals.address.city}
              onChange={handleFormChange}
            />
          </div>

          <div className="w-32 mx-8">
            <label className="add-store-input-label add-city-input" htmlFor="store-state">
              State
            </label>
            <input
              className="add-store-inputs"
              id="store-state"
              placeholder="State"
              name="address.state"
              value={formVals.address.state}
              onChange={handleFormChange}
            />
          </div>

          <div>
            <label className="add-store-input-label" htmlFor="store-zip">
              Zip
            </label>
            <input
              className="add-store-inputs "
              id="store-zip"
              placeholder="Zip"
              name="address.zip"
              value={formVals.address.zip}
              onChange={handleFormChange}
            />
          </div>
        </div>

        <div className="input-container">
          <label className="add-store-input-label" htmlFor="store-description">
            Description
          </label>
          <textarea
            className="add-store-inputs"
            id="store-description"
            placeholder="Description"
            name="description"
            value={formVals.description}
            onChange={handleFormChange}
          />
        </div>

        <div className="input-container">
          <label className="add-store-input-label" htmlFor="store-image">
            Image
          </label>
          <input
            className="add-store-inputs mb-6"
            id="store-image"
            placeholder="Image"
            name="image"
            value={formVals.image}
            onChange={handleFormChange}
          />
        </div>

        <button className="block w-full py-3 px-4 rounded-md font-bold text-white bg-emerald-600 shadow-md hover:bg-green-500 active:opacity-70 active:text-gray-300 ">
          Submit Store
        </button>
      </form>
    </div>
  );
};

export default AddStorePage;
