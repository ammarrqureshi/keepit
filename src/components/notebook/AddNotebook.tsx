import { Pencil2Icon, Cross1Icon } from "@radix-ui/react-icons";
import {
  Dialog,
  Tooltip,
  Button,
  Flex,
  TextField,
  TextArea,
  IconButton,
  Text,
} from "@radix-ui/themes";
import React from "react";

export const AddNotebook = () => {
  return (
    <Dialog.Root>
      <Tooltip content="Add New Notebook">
        <Dialog.Trigger>
          <Button
            style={{ position: "fixed", bottom: "1rem", right: "1rem" }}
            variant="solid"
            className=""
          >
            <Pencil2Icon width="20" height="20" />
            Add Notebook{" "}
          </Button>
        </Dialog.Trigger>
      </Tooltip>
      <Dialog.Content className="relative" size="4">
        <Flex direction="column" gap="4">
          <Dialog.Title size="7">Add Notebook</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Add a new notebook to your notes
          </Dialog.Description>{" "}
          <label>
            <Text as="div" size="3" mb="1" weight="bold">
              Title
            </Text>
            <TextField.Input
              variant="surface"
              size="3"
              placeholder="Notebook title..."
            />{" "}
          </label>
          <label>
            <Text as="div" size="3" mb="1" weight="bold">
              Description
            </Text>
            <TextArea
              variant="surface"
              size="3"
              placeholder="Write something here..."
            />{" "}
          </label>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button size="3" variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="3">Add Notebook</Button>
            </Dialog.Close>
          </Flex>
        </Flex>
        <Dialog.Close>
          <IconButton
            className="absolute top-3 right-3"
            variant="ghost"
            color="gray"
          >
            <Cross1Icon width="18" height="18" />
          </IconButton>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};
