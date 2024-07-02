"use client";
import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteClick = (itemId) => {
    setSelectedItemId(itemId);
    setIsDeleteModalOpen(true);
  };

  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setIsUpdateModalOpen(true);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsDetailModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedItemId(null);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedItem(null);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = (itemId) => {
    console.log(`Deleting item with ID: ${itemId}`);
    handleCloseDeleteModal();
  };

  const handleConfirmUpdate = (updatedItem) => {
    console.log(`Updating item:`, updatedItem);
    handleCloseUpdateModal();
  };

  return (
    <GlobalContext.Provider
      value={{
        isDeleteModalOpen,
        isUpdateModalOpen,
        isDetailModalOpen,
        selectedItemId,
        selectedItem,
        handleDeleteClick,
        handleUpdateClick,
        handleCardClick,
        handleCloseDeleteModal,
        handleCloseUpdateModal,
        handleCloseDetailModal,
        handleConfirmDelete,
        handleConfirmUpdate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
