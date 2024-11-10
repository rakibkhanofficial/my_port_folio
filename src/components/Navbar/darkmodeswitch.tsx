import React, { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { VisuallyHidden, type SwitchProps, useSwitch } from "@nextui-org/react";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

export const DarkModeSwitch = (props: SwitchProps) => {
  const { setTheme, resolvedTheme } = useNextTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { Component, slots, getBaseProps, getInputProps, getWrapperProps } =
    useSwitch({
      ...props,
      isSelected: isDarkMode,
    });

  useEffect(() => {
    // Update the dark mode state based on the current theme
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const handleThemeChange = (isSelected: boolean) => {
    const newTheme = isSelected ? "dark" : "light";
    setTheme(newTheme);
    setIsDarkMode(isSelected);
  };

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <label>{isDarkMode ? "Dark" : "Light"}</label>
        <input
          {...getInputProps()}
          checked={isDarkMode}
          onChange={(e) => handleThemeChange(e.target.checked)}
        />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            "h-8 w-8",
            "flex items-center justify-center",
            // "rounded-lg bg-default-700 text-white hover:bg-default-700",
          ],
        })}
      >
        {isDarkMode ? <MoonIcon fontSize={20} /> : <SunIcon fontSize={20} />}
      </div>
    </Component>
  );
};
