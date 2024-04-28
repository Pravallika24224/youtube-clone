import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState("light");
	useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root").classList.add("dark");
    } else {
      document.getElementById("root").classList.remove("dark");
    }
  }, [theme]);
	return {
		theme,
		setTheme
	};
}

export default useTheme