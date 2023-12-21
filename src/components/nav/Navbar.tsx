import { HamburgerMenuIcon, MoonIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Heading, Tooltip, Avatar } from "@radix-ui/themes";
import { useContext } from "react";
import { SidebarContext } from "./contexts/SidebarContext";
import { SidebarContextType } from "types.type";


export const Navbar = () => {
  const { isExpanded, setIsExpanded } = useContext(
    SidebarContext
  ) as SidebarContextType;
  return (
    <Flex id="nav" justify="between" align="center" className="p-1 px-2">
      <span>
        <div className={`${isExpanded ? "hidden" : "lg:hidden"}`}>
          <IconButton onClick={() => setIsExpanded(true)}>
            <HamburgerMenuIcon width="20" height="20" />
          </IconButton>
        </div>
      </span>

      <a href="">
        <Flex justify="between" align="center" id="brand-logo" gap="2">
          <IconButton>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </IconButton>

          <Heading>Keepit</Heading>
        </Flex>
      </a>
      <Flex gap="4" justify="between" align="center">
        <Tooltip content="light">
          <IconButton variant="outline">
            <MoonIcon width="18" height="18" />
          </IconButton>
        </Tooltip>

        <Avatar
          radius="medium"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
      </Flex>
    </Flex>
  );
};
