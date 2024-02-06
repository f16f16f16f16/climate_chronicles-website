import React from "react";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./acmeLogo";

export default function Navibar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
  { name: "Home", path: "/" },
  { name: "Category", path: "/category" },
  { name: "Check Status", path: "/status" },
  { name: "About Us", path: "/aboutus" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo/> */}
          <a className="font-bold text-inherit" href="/">Climate Chronicles</a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="category">
            Category
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="status">
            Check Status
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="aboutus">
          About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="contact" >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
