import { useRef } from "react";
import { Download, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

interface DeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  embedUrl: string;
}

const DeckModal = ({ isOpen, onClose, title, embedUrl }: DeckModalProps) => {
  const returnFocus = useRef<HTMLElement | null>(null);
  const isImage = /\.(jpe?g|png|webp|gif)(\?|$)/i.test(embedUrl);
  return (
    <Dialog open={isOpen} onOpenChange={open => { if (!open) onClose(); }}>
      <DialogContent
        className="document-modal"
        onOpenAutoFocus={() => { returnFocus.current = document.activeElement as HTMLElement; }}
        onCloseAutoFocus={event => { event.preventDefault(); returnFocus.current?.focus(); }}
      >
        <div className="document-header">
          <p className="eyebrow">A CLOSER LOOK</p>
          <DialogTitle className="document-title">{title}</DialogTitle>
          <DialogDescription>Explore the document below, or open the original in a new tab.</DialogDescription>
        </div>
        <div className={`document-viewer ${isImage ? "is-image" : ""}`}>
          {isImage ? <img src={embedUrl} alt={title} /> : <iframe src={embedUrl} title={title} />}
        </div>
        <div className="document-footer">
          <span>Yose Elvis Saputra · Portfolio</span>
          <div><a href={embedUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Open original</a><a href={embedUrl} download><Download size={15} /> Download</a></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeckModal;
