import { createContext, useState, useContext, ReactNode } from "react";

interface SharedStateContextProps {
  isInfo: boolean;
  setIsInfo: (value: boolean) => void;
  workoutDetails: { Title: string; NameArr: { [key: string]: string[] } };
  setWorkoutDetails: (details: {
    Title: string;
    NameArr: { [key: string]: string[] };
  }) => void;
  selectedTab: string | null;
  setSelectedTab: (title: string | null) => void;
}

const SharedStateContext = createContext<SharedStateContextProps | undefined>(
  undefined
);

export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
  const [isInfo, setIsInfo] = useState<boolean>(true);
  const [workoutDetails, setWorkoutDetails] = useState<{
    Title: string;
    NameArr: { [key: string]: string[] };
  }>({ Title: "", NameArr: {} });
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  return (
    <SharedStateContext.Provider
      value={{
        isInfo,
        setIsInfo,
        workoutDetails,
        setWorkoutDetails,
        selectedTab,
        setSelectedTab,
      }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = (): SharedStateContextProps => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};
