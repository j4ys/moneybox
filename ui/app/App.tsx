import authService from "./services/firebase/auth.service";
import React from "react";
import { Button } from "../components/ui/button";
import MoneyBoxImage from "./images/money-box-image.svg";
import { EnvelopeOpenIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "./providers/theme.provider";

function App() {
  const { theme, setTheme } = useTheme();
  const ThemeIcon = theme === "light" ? SunIcon : MoonIcon;
  const handleGoogleLogin = async () => {
    try {
      const response = await authService.SignInWithGooglePopup();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="h-20 px-5 w-full flex flex-row justify-between">
        <div className="flex self-center">MoneyBox</div>
        <Button
          className="self-center"
          variant="ghost"
          size="icon"
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          <ThemeIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col md:flex-row grow justify-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-row justify-center my-20 mx-8">
            <p className="text-[50px] self-center">
              Start Your Budgeting Journey...
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Button className="self-center" onClick={handleGoogleLogin}>
              <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
              Login With Google
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-4 flex flex-col justify-center order-first md:order-last items-center">
          <img src={MoneyBoxImage} className="max-w-prose w-full h-auto" />
          <div className="text-xs self-center">
            <a
              className="underline"
              href="https://www.freepik.com/free-vector/save-money-banner-with-isometric-glass-jars_28998042.htm#fromView=search&term=moneybox&page=1&position=41&track=sph&regularType=vector"
            >
              Image by upklyak
            </a>{" "}
            on Freepik
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
