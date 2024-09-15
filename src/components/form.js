import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    param1: '',
    param2: '',
    param3: '',
    param4: '',
    param5: '',
    param6: '',
    range1: 0,
    range2: 0,
    range3: 0,
  });

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
    navigate("/result");
  };

  return (
    <div className="w-4/5 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Aluminium Properties</h2>
      <form onSubmit={handleSubmit}>
        {/* First row of fields */}
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="param1">
              Chemical Composition
            </label>
            <input
              type="text"
              id="param1"
              name="param1"
              value={formData.param1}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter field"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="param2">
              Casting Temperature
            </label>
            <input
              type="text"
              id="param2"
              name="param2"
              value={formData.param2}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter field"
            />
          </div>
        </div>

        {/* Second row of fields */}
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="param3">
              Casting Speed
            </label>
            <input
              type="text"
              id="param3"
              name="param3"
              value={formData.param3}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter field"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="param4">
              Emulsion Temperature and pressure at rolling mill
            </label>
            <input
              type="text"
              id="param4"
              name="param4"
              value={formData.param4}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter field"
            />
          </div>
        </div>

        {/* Third row of fields */}
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="param5">
            Cooling Water Temperature 
            </label>
            <input
              type="text"
              id="param5"
              name="param5"
              value={formData.param5}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter field"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="param6">
             Rod quench water pressure.
            </label>
            <input
              type="text"
              id="param6"
              name="param6"
              value={formData.param6}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter field"
            />
          </div>
        </div>

        {/* Fourth row of fields */}
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="range1">
              Emulsion Concentration
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
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="range2">
              Pressure at Rolling Mill
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
        </div>

        {/* Fifth row of fields */}
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="range3">
              Casting Speed
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

        <button
          type="submit"
          className="w-full bg-red-950 text-white py-3 px-4 rounded-lg shadow-md hover:bg-black transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
