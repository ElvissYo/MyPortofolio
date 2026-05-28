import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  embedUrl: string;
}

const DeckModal = ({ isOpen, onClose, title, embedUrl }: DeckModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="glass-card relative z-10 w-full max-w-5xl glow-border"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <button onClick={onClose} className="magnetic-link text-muted-foreground hover:text-foreground p-1">
                <X size={20} />
              </button>
            </div>
            <div className="p-2">
              <iframe
                src={embedUrl}
                className="w-full rounded-lg"
                style={{ height: "70vh" }}
                allowFullScreen
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeckModal;
