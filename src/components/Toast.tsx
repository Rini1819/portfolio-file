import React, { useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle, X, Sparkles, Bell } from "lucide-react";

export interface ToastItem {
  id: string;
  message: string;
  type?: "success" | "info" | "error";
  duration?: number;
}

interface ToastProps {
  key?: React.Key;
  toast: ToastItem;
  onClose: (id: string) => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  const typeStyles = {
    success: {
      bg: "bg-white",
      border: "border-gray-150",
      accentLine: "bg-emerald-500",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
    },
    error: {
      bg: "bg-white",
      border: "border-gray-150",
      accentLine: "bg-rose-500",
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50",
    },
    info: {
      bg: "bg-white",
      border: "border-gray-150",
      accentLine: "bg-blue-500",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
    },
  };

  const style = typeStyles[toast.type || "success"];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative flex items-center gap-3.5 max-w-sm w-full bg-white border ${style.border} rounded-xl p-4 shadow-lg pointer-events-auto overflow-hidden`}
    >
      {/* Accent side color bar */}
      <div className={`absolute top-0 left-0 bottom-0 w-1 ${style.accentLine}`} />

      {/* Hero Icon */}
      <div className={`h-8 w-8 rounded-lg ${style.iconBg} ${style.iconColor} flex items-center justify-center shrink-0`}>
        {toast.type === "error" ? (
          <Bell className="w-4.5 h-4.5" />
        ) : (
          <CheckCircle className="w-4.5 h-4.5" />
        )}
      </div>

      {/* Text Info */}
      <div className="flex-grow space-y-0.5 pr-2">
        <div className="flex items-center gap-1 font-sans font-extrabold text-[10px] text-gray-900 uppercase tracking-widest leading-none">
          {toast.type === "success" ? (
            <>
              <Sparkles className="w-3 h-3 text-crimson-600 animate-pulse" />
              <span>Direct Connect SUCCESS</span>
            </>
          ) : (
            <span>Notice</span>
          )}
        </div>
        <p className="font-sans text-[11px] text-gray-600 leading-normal font-medium">
          {toast.message}
        </p>
      </div>

      {/* Close button */}
      <button
        onClick={() => onClose(toast.id)}
        className="text-gray-450 hover:text-gray-700 hover:bg-gray-50 rounded-lg p-1 transition-colors duration-150 shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
