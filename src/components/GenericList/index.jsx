import React from "react";

const GenericList = ({ fields, data }) => {
  return (
    <div className="list-container">
      {data.map((item, index) => (
        <div key={index} className="list-item">
          {fields.map((field) => (
            <div key={field.name} className="list-field">
              <strong>{field.label}:</strong> {item[field.name]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GenericList;
