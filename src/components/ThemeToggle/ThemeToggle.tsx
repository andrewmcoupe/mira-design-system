import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <Button onClick={handleSetTheme} variant={"ghost"}>
        {theme === "light" ? "Dark theme" : "Light theme"}
      </Button>
    </div>
  );
};

export default ThemeChanger;
