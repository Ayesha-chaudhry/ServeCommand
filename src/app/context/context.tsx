import { ReactNode, createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface MyContextProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  phoneNumber: string,
  setPhoneNumber: Dispatch<SetStateAction<string>>,

}

const initialContext: MyContextProps = {
  step: 0,
  setStep: () => {},
  username: "",
  setUsername: () => {},
  phoneNumber: "",
  setPhoneNumber: () => {},
};

export const MyContext = createContext<MyContextProps>(initialContext);

interface ContextProps {
  children: ReactNode;
}

export default function Context({ children }: ContextProps) {
  const [step, setStep] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <MyContext.Provider value={{ step, setStep, username, setUsername, phoneNumber, setPhoneNumber }}>
      {children}
    </MyContext.Provider>
  );
}

export const Contextvalue = () => useContext(MyContext);


