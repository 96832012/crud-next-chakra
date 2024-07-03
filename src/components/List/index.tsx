import React from "react";
import {
  List as ChakraList,
  ListItem as ChakraListItem,
} from "@chakra-ui/react";
import Button from "../Button";
import { useAppContext } from "@/context/AppContext";

const List = () => {
  const { list, onEdit } = useAppContext();

  if (!list || list.length === 0) {
    return <p className="text-gray-500">No data to display</p>;
  }

  return (
    <ChakraList className="space-y-3">
      {list.map((el, index) => (
        <ChakraListItem
          key={index}
          className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
        >
          <span>
            {el.firstName} {el.lastName} {el.age} {el.email}
          </span>
          <div className="flex space-x-2">
            <Button text="Edit" onClick={() => onEdit(index)} />
          </div>
        </ChakraListItem>
      ))}
    </ChakraList>
  );
};

export default List;
