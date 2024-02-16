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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./icons.js";
import { AcmeLogo } from "./acmeLogo";

export default function NaviBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "Check Status", path: "/status" },
    { name: "About Us", path: "/aboutus" },
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar style={{ backgroundColor: '#1A3257' }} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          {/* <AcmeLogo/> */}
          <Link className="font-bold text-foreground text-white" href="/">
            Climate Chronicles
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-medium text-foreground text-white p-0 bg-transparent data-[hover=true]:bg-transparent "
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Category
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] text-foreground"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="all"
              description="All"
              startContent={icons.scale}
              href="/category"
            >
              All
            </DropdownItem>
            <DropdownItem
              key="air"
              description="Air"
              startContent={icons.activity}
              href="/category/air"
            >
              Air
            </DropdownItem>
            <DropdownItem
              key="earth"
              description="Earth"
              startContent={icons.flash}
              href="/category/earth"
            >
              Earth
            </DropdownItem>
            <DropdownItem
              key="water"
              description="Water"
              startContent={icons.server}
              href="/category/water"
            >
              Water
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link className="text-white" href="/status">
            Check Status
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/aboutus">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/contact">
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
