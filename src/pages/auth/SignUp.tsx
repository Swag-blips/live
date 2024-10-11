import { SignUp as SignUpComponent } from "@clerk/clerk-react";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center">
      <SignUpComponent />
    </div>
  );
};

export default SignUp;
