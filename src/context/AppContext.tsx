// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

// type AppContextType = {
//   list:
//     | { firstName: string; lastName: string; age: number; email: string }[]
//     | [];

//   setList: React.Dispatch<
//     React.SetStateAction<
//       { firstName: string; lastName: string; age: number; email: string }[] | []
//     >
//   >;

//   register: any;

//   handleSubmit: (
//     callback: SubmitHandler<FormData>
//   ) => (e: React.BaseSyntheticEvent) => Promise<void>;

//   onSubmit: any;

//   errors: any;

//   reset: () => void;
// };

// type FormData = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email: string;
// };

// const AppContext = createContext<AppContextType | undefined>(undefined);

// export const AppContextProvider = ({ children }: { children: ReactNode }) => {
//   const [list, setList] = useState<
//     { firstName: string; lastName: string; age: number; email: string }[] | []
//   >([]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormData>({
//     mode: "onTouched",
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     setList([...list, data]);
//     reset();
//   };

//   return (
//     <AppContext.Provider
//       value={{ list, setList, register, handleSubmit, errors, reset, onSubmit }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (context === undefined) {
//     throw new Error("useMyContext must be used within a MyProvider");
//   }
//   return context;
// };

import React, { createContext, useContext, useState, ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type AppContextType = {
  list:
    | { firstName: string; lastName: string; age: number; email: string }[]
    | [];
  setList: React.Dispatch<
    React.SetStateAction<
      { firstName: string; lastName: string; age: number; email: string }[] | []
    >
  >;
  register: any;
  handleSubmit: (
    callback: SubmitHandler<FormData>
  ) => (e: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: any;
  onEdit: (index: number) => void;
  onSaveEdit: SubmitHandler<FormData>;
  errors: any;
  reset: () => void;
  isEditing: boolean;
  editIndex: number | null;
};

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<
    { firstName: string; lastName: string; age: number; email: string }[] | []
  >([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setList([...list, data]);
    reset();
  };

  const onEdit = (index: number) => {
    setEditIndex(index);
    const item = list[index];
    setValue("firstName", item.firstName);
    setValue("lastName", item.lastName);
    setValue("age", item.age);
    setValue("email", item.email);
  };

  const onSaveEdit: SubmitHandler<FormData> = (data) => {
    if (editIndex !== null) {
      const newList = [...list];
      newList[editIndex] = data;
      setList(newList);
      setEditIndex(null);
      reset();
    }
  };

  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        register,
        handleSubmit,
        errors,
        reset,
        onSubmit,
        onEdit,
        onSaveEdit,
        isEditing: editIndex !== null,
        editIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
