import React from "react";
import {
  Navbar,
  NavbarMenu,
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
import { Logo } from "./logo";
import { Logo2 } from "./logo2";

export default function NaviBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    // { name: "CATEGORY", path: "/category" },
    { name: "WEATHER", path: "/weather" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "NEWS", path: "/news" },
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
    <Navbar className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>
      <div className="hidden sm:flex xl:fixed xl:left-6">
        <Link href="/">
          <Logo2 />
        </Link>
      </div>
      <NavbarContent className="flex justify-between items-center w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black"
        />
        <NavbarItem className="basis-1/4 flex justify-center">
          <Link className="text-black font-bold " href="/">
            HOME
          </Link>
        </NavbarItem>

        <NavbarItem className="basis-1/4 flex justify-center">
          <Link
            className="hidden sm:flex text-black font-bold "
            href="/weather"
          >
            WEATHER
          </Link>
        </NavbarItem>

        <NavbarItem className="basis-1/4 flex justify-center">
          <Link className="hidden sm:flex text-black font-bold " href="/news">
            NEWS
          </Link>
        </NavbarItem>

        <Dropdown className="bg-blue-200 text-black">
          <NavbarItem className="basis-1/4 flex justify-center">
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent data-[hover=true]:bg-transparent text-black font-bold text-base hidden sm:flex"
                endContent={icons.chevron}
              >
                ABOUT US
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem href="/aboutus/team">Team members</DropdownItem>
            <DropdownItem href="/aboutus/advisor">Advisors</DropdownItem>
            <DropdownItem href="/aboutus/expert">Expert</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem className="basis-1/4 flex justify-center">
          <Link className="text-black font-bold " href="/contact">
            CONTACT US
          </Link>
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
