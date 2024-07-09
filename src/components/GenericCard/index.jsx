"use client";
import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const GenericCard = ({ fields, item, onUpdate, onDelete }) => {
  const { handleCardClick } = useGlobalContext();

  return (
    <div className="card cursor-pointer" onClick={() => handleCardClick(item)}>
      {fields.map((field) => (
        <div key={field.name} className="card-field">
          <strong>{field.label}:</strong> {item[field.name]}
        </div>
      ))}
      <div className="card-actions">
        <button
          className="update-button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the card click event
            onUpdate(item);
          }}
        >
          Update
        </button>
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the card click event
            onDelete(item);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GenericCard;
