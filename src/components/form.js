import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    param1: '',
    param2: '',
    param3: '',
    param4: '',
    range1: 0,
    range2: 0,
    range3: 0,
   
  });
  const submitHandler=()=>{
    navigate("/result");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Enter Parameters</h2>
      <form onSubmit={handleSubmit}>
        {/* First row of fields */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paparam">
              field1
            </label>
            <input
              type="text"
              id="param1"
              name="param1"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter field"
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="param2">
              field2
            </label>
            <input
              type="text"
              id="param2"
              name="param2"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter field"
            />
          </div>
        </div>

        {/* Second row of fields */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="param3">
              field3
            </label>
            <input
              type="number"
              id="param3"
              name="param3"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter field"
            />
          </div>
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="param4">
              field4
            </label>
            <input
              type="text"
              id="param4"
              name="param4"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter field"
            />
          </div>
        </div>

        {/* Range fields */}
        <div className="mb-4">
          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="range1">
                Range 1 (0-100)
              </label>
              <input
                type="range"
                id="range1"
                name="range1"
                min="0"
                max="100"
                value={formData.range1}
                onChange={handleChange}
                className="w-full"
              />
              <span className="text-gray-700">{formData.range1}</span>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="range2">
                Range 2 (0-100)
              </label>
              <input
                type="range"
                id="range2"
                name="range2"
                min="0"
                max="100"
                value={formData.range2}
                onChange={handleChange}
                className="w-full"
              />
              <span className="text-gray-700">{formData.range2}</span>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="range3">
                Range 3 (0-100)
              </label>
              <input
                type="range"
                id="range3"
                name="range3"
                min="0"
                max="100"
                value={formData.range3}
                onChange={handleChange}
                className="w-full"
              />
              <span className="text-gray-700">{formData.range3}</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
