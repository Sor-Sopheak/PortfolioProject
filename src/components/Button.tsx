interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  size?: "base" | "xl" | "2xl";
  font?: "portfolio" | "navbar";
}

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "base",
  font = "portfolio",
}: ButtonProps) {
  const baseStyle =
    "cursor-pointer rounded-full px-6 py-2 font-normal shadow-xs transition-all duration-200 active:scale-95 text-center inline-block";

  const primaryStyle =
    "grey-secondary text-custom-white hover:text-green-primary hover:font-medium hover:grey-secondary/90 hover:shadow-lg";

  const secondaryStyle =
    "text-green-primary hover:text-text-white hover:font-bold hover:bg-green-primary/80 border border-green-primary";

  const chosenStyle = variant === "primary" ? primaryStyle : secondaryStyle;

  const sizeStyles = {
    base: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  const fontStyles = {
    portfolio: "font-portfolio",
    navbar: "font-navbar",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${chosenStyle} ${sizeStyles[size]} ${fontStyles[font]}`}
    >
      {label}
    </button>
  );
}
