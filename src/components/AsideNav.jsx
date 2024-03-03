import React from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function AsideNav({ name, menuItems }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="text-[#1a4480] border-[#1a4480] hover:bg-[#1a4480] hover:text-white"
          style={{ borderColor: "#1a4480" }}
        >
          {name}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Navigation menu">
        {menuItems &&
          menuItems.map((item, index) => (
            <DropdownItem key={index}>
              <Link href={item.href}>{item.label}</Link>
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
}
