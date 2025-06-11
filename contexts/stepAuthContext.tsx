import { createContext, useContext, useState, ReactNode } from "react";

type Step = "LOGIN" | "REGISTER";

type StepAuthContextType = {
  step: Step;
  setStep: (step: Step) => void;
};

const StepAuthContext = createContext<StepAuthContextType | null>(null);

export const StepAuthContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [step, setStep] = useState<Step>("LOGIN");

  return (
    <StepAuthContext.Provider value={{ step, setStep }}>
      {children}
    </StepAuthContext.Provider>
  );
};

export const useStepAuthContext = () => {
  const ctx = useContext(StepAuthContext);
  if (!ctx) {
    throw new Error(
      "useStepAuthContext must be used within a StepAuthContextProvider"
    );
  }
  return ctx;
};
