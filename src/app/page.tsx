// "use client";
// import Button from "@/components/Button";
// import { Input as ChakraInput } from "@chakra-ui/react";
// import List from "@/components/List";
// import { FormControl, FormErrorMessage } from "@chakra-ui/react";
// import { useAppContext } from "@/context/AppContext";

// export default function Home() {
//   const { register, handleSubmit, errors, onSubmit } = useAppContext();

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         className="bg-white p-8 rounded-lg shadow-lg space-y-4 w-full max-w-md"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           Please fill in the fields
//         </h1>

//         <FormControl isInvalid={!!errors.firstName}>
//           <ChakraInput
//             variant="flushed"
//             placeholder="First Name"
//             type="text"
//             {...register("firstName", { required: "This field is required" })}
//           />
//           <FormErrorMessage>
//             {errors.firstName && <span>{errors.firstName.message}</span>}
//           </FormErrorMessage>
//         </FormControl>

//         <FormControl isInvalid={!!errors.lastName}>
//           <ChakraInput
//             variant="flushed"
//             {...register("lastName", {
//               required: "This field is required",
//             })}
//             placeholder="Last Name"
//             type="text"
//           />
//           <FormErrorMessage>
//             {errors.lastName && <span>{errors.lastName.message}</span>}
//           </FormErrorMessage>
//         </FormControl>

//         <FormControl isInvalid={!!errors.age}>
//           <ChakraInput
//             variant="flushed"
//             {...register("age", {
//               required: "This field is required",
//             })}
//             placeholder="Age"
//             type="number"
//           />
//           <FormErrorMessage>
//             {errors.age && <span>{errors.age.message}</span>}
//           </FormErrorMessage>
//         </FormControl>

//         <FormControl isInvalid={!!errors.email}>
//           <ChakraInput
//             variant="flushed"
//             {...register("email", {
//               required: "This field is required",
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: "Invalid email address",
//               },
//             })}
//             placeholder="Email"
//             type="email"
//           />
//           <FormErrorMessage>
//             {errors.email && <span>{errors.email.message}</span>}
//           </FormErrorMessage>
//         </FormControl>

//         <Button text="Add" type="submit" />
//       </form>

//       <List />
//     </div>
//   );
// }

"use client";
import Button from "@/components/Button";
import { Input as ChakraInput } from "@chakra-ui/react";
import List from "@/components/List";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { register, handleSubmit, errors, onSubmit, onSaveEdit, isEditing } =
    useAppContext();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg space-y-4 w-full max-w-md"
        onSubmit={handleSubmit(isEditing ? onSaveEdit : onSubmit)}
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isEditing ? "Edit" : "Please fill in the fields"}
        </h1>

        <FormControl isInvalid={!!errors.firstName}>
          <ChakraInput
            variant="flushed"
            placeholder="First Name"
            type="text"
            {...register("firstName", { required: "This field is required" })}
          />
          <FormErrorMessage>
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.lastName}>
          <ChakraInput
            variant="flushed"
            {...register("lastName", {
              required: "This field is required",
            })}
            placeholder="Last Name"
            type="text"
          />
          <FormErrorMessage>
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.age}>
          <ChakraInput
            variant="flushed"
            {...register("age", {
              required: "This field is required",
            })}
            placeholder="Age"
            type="number"
          />
          <FormErrorMessage>
            {errors.age && <span>{errors.age.message}</span>}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <ChakraInput
            variant="flushed"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            type="email"
          />
          <FormErrorMessage>
            {errors.email && <span>{errors.email.message}</span>}
          </FormErrorMessage>
        </FormControl>

        <Button text={isEditing ? "Save" : "Add"} type="submit" />
      </form>

      <List />
    </div>
  );
}
