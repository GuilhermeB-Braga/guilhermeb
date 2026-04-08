import { PiTagLight } from "react-icons/pi";

interface ChipProps {
  text: string;
  icon?: boolean;
  style?: "default" | 'highlight' | 'primary';
  otherStyles?: string;
}

const chipStyles: {
  default: string;
  highlight: string;
  primary: string;
} = {
  default: "bg-background-light rounded-full border-border-custom",
  highlight: 'border-neutral-800 bg-neutral-200 text-neutral-700 rounded-full',
  primary: 'border-primary/20 bg-primary/10 text-primary/90 rounded-lg',
};

export default function Chip({ text, icon, otherStyles, style = 'highlight' }: ChipProps) {
  return (
    <span
      className={`
        border text-sm py-.25 px-2.5 font-medium
        flex gap-1 items-center justify-center capitalize
        
        
        ${chipStyles[style]}
        ${otherStyles}
      `}
    >
      {icon && <PiTagLight />}
      {text}
    </span>
  );
}
