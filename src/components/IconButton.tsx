type IconButtonProps = {
  onClick: () => void;
  iconSrc: string;
  alt?: string;
  className?: string;
};

export default function IconButton({
  onClick,
  iconSrc,
  alt = "icon",
  className = "",
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus:outline-none transition-transform active:scale-95 ${className}`}
    >
      <img src={iconSrc} alt={alt} className="w-6 h-6 object-contain" />
    </button>
  );
}
