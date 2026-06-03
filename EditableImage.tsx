import React, { useState, useRef } from "react";
import { useEditMode } from "./EditModeContext";
import { Upload, Link2, RotateCcw, Image as ImageIcon, X } from "lucide-react";

interface EditableImageProps {
  id: string;
  defaultImage: string;
  className?: string;
  alt?: string;
}

export default function EditableImage({ id, defaultImage, className = "", alt = "Campaign image" }: EditableImageProps) {
  const { isEditMode, getEditedText, setEditedText } = useEditMode();
  const currentImage = getEditedText(id, defaultImage);

  const [showEditor, setShowEditor] = useState(false);
  const [manualPath, setManualPath] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setEditedText(id, reader.result); // Base64 representation
          setShowEditor(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleManualPathSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualPath.trim()) {
      setEditedText(id, manualPath.trim());
      setShowEditor(false);
    }
  };

  const handleReset = () => {
    setEditedText(id, defaultImage);
    setShowEditor(false);
  };

  // Drag and drop events
  const [isDragging, setIsDragging] = useState(false);
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setEditedText(id, reader.result);
          setShowEditor(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isEditMode) {
    return (
      <img
        src={currentImage}
        alt={alt}
        referrerPolicy="no-referrer"
        className={className}
      />
    );
  }

  return (
    <div className="relative group/editable-image h-full w-full">
      {/* Current Preview or Placeholder */}
      {currentImage ? (
        <img
          src={currentImage}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`${className} border border-dashed border-crimson-400`}
        />
      ) : (
        <div className="w-full h-full min-h-[160px] flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-6 text-gray-400">
          <ImageIcon className="w-8 h-8 mb-2 stroke-1" />
          <p className="font-sans text-xs">No image selected</p>
        </div>
      )}

      {/* Pencil/Edit Overlay Button */}
      <button
        onClick={() => {
          setManualPath(currentImage.startsWith("data:") ? "" : currentImage);
          setShowEditor(!showEditor);
        }}
        type="button"
        className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/75 hover:bg-black/90 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md transition-all backdrop-blur-xs opacity-90 group-hover/editable-image:opacity-100 z-40 cursor-pointer"
        title="Edit Image Source"
      >
        <Upload className="w-3 h-3" />
        <span>Change Image</span>
      </button>

      {/* Floating Settings Panel */}
      {showEditor && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-4 flex flex-col justify-between rounded-xl overflow-y-auto animate-fade-in z-50 shadow-2xl border border-gray-150">
          <div className="flex items-center justify-between mb-2">
            <h5 className="font-sans font-bold text-[10px] uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5 text-crimson-600" />
              <span>Configure Asset Source</span>
            </h5>
            <button
              onClick={() => setShowEditor(false)}
              className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3 flex-grow flex flex-col justify-center">
            {/* Drag and Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all duration-150 flex flex-col items-center justify-center ${
                isDragging
                  ? "border-crimson-600 bg-crimson-50/20 text-crimson-900"
                  : "border-gray-200 hover:border-crimson-400 bg-gray-50/50 hover:bg-gray-50 text-gray-500"
              }`}
            >
              <Upload className="w-5 h-5 text-gray-400 mb-1 group-hover:text-crimson-500" />
              <p className="font-sans font-bold text-[10px] uppercase tracking-wider text-gray-700">
                Upload local file
              </p>
              <p className="font-sans text-[9px] text-gray-400 mt-0.5">
                Drag & drop or click to pick (converts to inline base64)
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="h-[1px] bg-gray-150 flex-grow" />
              <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest leading-none">OR</span>
              <div className="h-[1px] bg-gray-150 flex-grow" />
            </div>

            {/* Manual Path / URL Form */}
            <form onSubmit={handleManualPathSave} className="space-y-1.5">
              <label className="block font-sans font-semibold text-[9px] uppercase tracking-wider text-gray-500">
                Asset Relative Path or External Web URL
              </label>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={manualPath}
                  onChange={(e) => setManualPath(e.target.value)}
                  placeholder="e.g. /my-campaign-banner.jpg or https://..."
                  className="w-full font-mono text-[10px] border border-gray-250 bg-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-crimson-500"
                />
                <button
                  type="submit"
                  className="bg-gray-900 hover:bg-black text-white px-3.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors shrink-0"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>

          <div className="border-t border-gray-100 pt-2.5 mt-2 flex items-center justify-between">
            <button
              onClick={handleReset}
              type="button"
              className="flex items-center gap-1 font-sans text-[9px] font-bold uppercase tracking-widest text-gray-500 hover:text-crimson-700 transition-colors"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Reset to Default</span>
            </button>
            <span className="font-mono text-[8px] text-gray-400">
              Changes auto-save instantly
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
