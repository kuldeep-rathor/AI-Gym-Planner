import { SignInButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <SignInButton>Sign In </SignInButton>
    </div>
  );
};

export default HomePage;
