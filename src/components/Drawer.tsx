import closeIcon from "../assets/icons/close.png";
import Logo from "./Logo";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-b-grey-secondary p-4">
          <Logo />
          <button onClick={onClose} className="p-2">
            <img
              src={closeIcon}
              alt="Close menu"
              className="w-4 h-4 object-contain"
            />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
