import React, { useRef, useEffect } from "react";
import { useEditMode } from "./EditModeContext";
import { Pencil } from "lucide-react";

interface EditableProps {
  id: string;
  defaultText: string;
  className?: string;
  component?: "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "p";
}

export default function Editable({ id, defaultText, className = "", component = "span" }: EditableProps) {
  const { isEditMode, getEditedText, setEditedText } = useEditMode();
  const textVal = getEditedText(id, defaultText);
  const elementRef = useRef<HTMLElement>(null);

  // Sync ref text with value when textVal changes (e.g. after reset)
  useEffect(() => {
    if (elementRef.current && elementRef.current.innerText !== textVal) {
      elementRef.current.innerText = textVal;
    }
  }, [textVal]);

  const handleBlur = () => {
    if (elementRef.current) {
      const cleanText = elementRef.current.innerText.trim();
      setEditedText(id, cleanText || defaultText);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" && !e.shiftKey && component !== "div" && component !== "p") {
      e.preventDefault();
      elementRef.current?.blur();
    }
  };

  const Tag = component;

  if (!isEditMode) {
    return <Tag className={className}>{textVal}</Tag>;
  }

  return (
    <Tag
      ref={elementRef as any}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} cursor-text border-b-2 border-dashed border-crimson-405/60 focus:outline-none focus:border-crimson-600 focus:bg-crimson-50/20 px-1 rounded transition-all duration-150 inline-block relative group/editable`}
      title="Click to live-edit this text"
    >
      {textVal}
      {/* Tiny floating hover pencil indicator */}
      <span className="absolute -top-3.5 -right-3.5 hidden group-hover/editable:flex items-center gap-1 bg-crimson-600 text-white text-[8px] font-mono font-bold px-1.5 py-0.5 rounded shadow pointer-events-none uppercase tracking-widest z-50">
        <Pencil className="w-2 h-2 text-white" />
        <span>Edit</span>
      </span>
    </Tag>
  );
}
