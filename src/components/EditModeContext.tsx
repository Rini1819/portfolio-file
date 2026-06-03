import React, { createContext, useContext, useState, useEffect } from "react";

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  getEditedText: (key: string, defaultValue: string) => string;
  setEditedText: (key: string, newValue: string) => void;
  resetAllToDefault: () => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export const useEditMode = () => {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error("useEditMode must be used within an EditModeProvider");
  }
  return context;
};

export const EditModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editedTexts, setEditedTexts] = useState<Record<string, string>>({});

  // Load from localStorage on mounts
  useEffect(() => {
    try {
      const saved = localStorage.getItem("rini_edited_texts");
      if (saved) {
        setEditedTexts(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load edited texts from localStorage", e);
    }
  }, []);

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const getEditedText = (key: string, defaultValue: string): string => {
    return key in editedTexts ? editedTexts[key] : defaultValue;
  };

  const setEditedText = (key: string, newValue: string) => {
    const updated = { ...editedTexts, [key]: newValue };
    setEditedTexts(updated);
    try {
      localStorage.setItem("rini_edited_texts", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save edited texts to localStorage", e);
    }
  };

  const resetAllToDefault = () => {
    setEditedTexts({});
    try {
      localStorage.removeItem("rini_edited_texts");
    } catch (e) {
      console.error("Failed to clear localStorage", e);
    }
  };

  return (
    <EditModeContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        getEditedText,
        setEditedText,
        resetAllToDefault,
      }}
    >
      {children}
    </EditModeContext.Provider>
  );
};
