"use client";
import { useRouter } from "next/router";
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Ensure items is an array
  const [filteredItems, setFilteredItems] = useState([]); // Ensure filteredItems is an array
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cuartos, setCuartos] = useState([]);
  const [dormitorios, setDormitorios] = useState([]);

  const fetchCuartos = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/cuarto/list/");
      const data = await response.json();
      setCuartos(data);
    } catch (error) {
      console.error("Error fetching cuartos:", error);
    }
  };

  const fetchDormitorios = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/dormitorio/list/"
      );
      const data = await response.json();
      setDormitorios(data);
    } catch (error) {
      console.error("Error fetching cuartos:", error);
    }
  };

  useEffect(() => {
    fetchCuartos();
  }, []);

  useEffect(() => {
    fetchDormitorios();
  }, []);

  const fetchItems = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data); // Ensure data is an array
      setFilteredItems(data); // Ensure data is an array
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSuccess = (url) => {
    fetchItems(url);
  };

  //Ya esta funcion puede ser reutilizada para cualquier delete
  const handleDeleteItem = async (url, redirectUrl) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Delete Success");
      handleSuccess(redirectUrl); // Ensure the list is refreshed after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  //Ya esta funcion puede ser reutilizada para cualquier update
  const handleUpdateItem = async (url, redirectUrl, values) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Update Success:", data);
      handleSuccess(redirectUrl); // Ensure the list is refreshed after update
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleSearch = (searchTerm, fields) => {
    const filtered = items.filter((item) =>
      fields.some((field) => {
        const fieldValue = item[field];
        if (typeof fieldValue === "string" || typeof fieldValue === "number") {
          return fieldValue
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }
        return false;
      })
    );
    setFilteredItems(filtered);
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setIsUpdateModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedItem(null);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedItem(null);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsDetailModalOpen(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        items,
        filteredItems,
        isDeleteModalOpen,
        isUpdateModalOpen,
        isDetailModalOpen,
        selectedItem,
        cuartos,
        dormitorios,
        handleDeleteClick,
        handleUpdateClick,
        handleCardClick,
        handleCloseUpdateModal,
        handleCloseDeleteModal,
        handleCloseDetailModal,
        handleDeleteItem,
        handleUpdateItem,
        handleSearch,
        handleSuccess,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
