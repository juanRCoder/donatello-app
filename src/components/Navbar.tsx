import { Typography } from "@mui/material";

export default function Navbar() {
  return (
    <section className="outline outline-1 min-w-[185px] min-h-screen bg-[#121212] px-5 py-[15px]">
      <Typography component="h1" sx={{fontSize: "28px", fontWeight: "600"}} className="outline outline-1 pb-5">
        Donatello
      </Typography>
    </section>
  )
}

