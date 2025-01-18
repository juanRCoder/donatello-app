import { Button } from "@mui/material";

type BtnProps = {
  type: "button" | "submit";
  variant: "contained" | "text" | "outlined"
  bg?: string,
  color?: string,
  py?: string;
  px?: string;
  p?: string;
  m?: string;
  mx?: string;
  my?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  hoverbg?: string;
  hoverColor?: string;
  rippleColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function BtnCustom({ type, variant, bg, color, py, px, p, m, mx, my, display, alignItems, justifyContent, gap, height, border, borderRadius, hoverbg, hoverColor, rippleColor, onClick, children }: BtnProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      sx={{
        border: border,
        borderRadius: borderRadius,
        backgroundColor: bg,
        color: color,
        py: py,
        px: px,
        p: p,
        m: m,
        mx: mx,
        my: my,
        display: display || "flex",
        alignItems: alignItems,
        justifyContent: justifyContent,
        gap: gap,
        textTransform: 'none',
        height: height,
        "&:hover": {
          backgroundColor: hoverbg,
          color: hoverColor,
        },
        "& .MuiTouchRipple-root": {
          color: rippleColor
        }
      }}
    >
      {children}
    </Button>
  )
}
