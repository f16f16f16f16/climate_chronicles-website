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
  Spacer,
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
import { Logo } from "./logo";

export default function NaviBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    // { name: "CATEGORY", path: "/category" },
    { name: "WEATHER", path: "/status" },
    { name: "ABOUT US", path: "/aboutus" },
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
    // <Navbar
    //   style={{ backgroundColor: "#1A3257" }}
    //   onMenuOpenChange={setIsMenuOpen}
    // >
    //   <NavbarContent>
    //     <NavbarMenuToggle
    //       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //       className="sm:hidden text-white"
    //     />
    //     <NavbarBrand>
    //       {/* <AcmeLogo/> */}
    //       {/* <Link
    //         className="font-bold text-foreground text-white text-lg"
    //         href="/"
    //       >
    //         <div className="flex flex-col">
    //           <span>Climate</span>
    //           <Spacer y={-5} />
    //           <span>Chronicles</span>
    //         </div>
    //       </Link> */}
    //       <Link
    //         className="text-white underline underline-offset-8"
    //         href="/"
    //       >
    //         HOME
    //       </Link>
    //     </NavbarBrand>
    //   </NavbarContent>

    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     {/* <Dropdown>
    //       <NavbarItem>
    //         <DropdownTrigger>
    //           <Button
    //             disableRipple
    //             className="text-medium text-foreground text-white p-0 underline underline-offset-8 bg-transparent data-[hover=true]:bg-transparent "
    //             endContent={icons.chevron}
    //             radius="sm"
    //             variant="light"
    //           >
    //             CATEGORY
    //           </Button>
    //         </DropdownTrigger>
    //       </NavbarItem>
    //       <DropdownMenu
    //         aria-label="ACME features"
    //         className="w-[340px] text-foreground"
    //         itemClasses={{
    //           base: "gap-4",
    //         }}
    //       >
    //         <DropdownItem
    //           key="all"
    //           description="All"
    //           startContent={icons.scale}
    //           href="/category"
    //         >
    //           All
    //         </DropdownItem>
    //         <DropdownItem
    //           key="air"
    //           description="Air"
    //           startContent={icons.activity}
    //           href="/category/air"
    //         >
    //           Air
    //         </DropdownItem>
    //         <DropdownItem
    //           key="earth"
    //           description="Earth"
    //           startContent={icons.flash}
    //           href="/category/earth"
    //         >
    //           Earth
    //         </DropdownItem>
    //         <DropdownItem
    //           key="water"
    //           description="Water"
    //           startContent={icons.server}
    //           href="/category/water"
    //         >
    //           Water
    //         </DropdownItem>
    //       </DropdownMenu>
    //     </Dropdown> */}

    //     <NavbarItem>
    //       <Link
    //         className="text-white underline underline-offset-8"
    //         href="/status"
    //       >
    //         WEATHER
    //       </Link>
    //     </NavbarItem>

    //     <NavbarItem>
    //       <Link
    //         className="text-white underline underline-offset-8"
    //         href="/aboutus"
    //       >
    //         ABOUT US
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <NavbarItem>
    //       <Link
    //         className="text-white underline underline-offset-8"
    //         href="/aboutus"
    //       >
    //         CONTACT US
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarMenu>
    //     {menuItems.map((item, index) => (
    //       <NavbarMenuItem key={`${item.name}-${index}`}>
    //         <Link
    //           color="foreground"
    //           className="w-full"
    //           href={item.path}
    //           size="lg"
    //         >
    //           {item.name}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>

    <Navbar className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>
      <div className="hidden sm:flex xl:fixed xl:left-6">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <NavbarContent className="flex justify-between items-center w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black"
        />
        <NavbarItem className="basis-1/4 flex justify-center">
          <Link className="text-black font-semibold " href="/">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem className="basis-1/4 flex justify-center">
          <Link
            className="hidden sm:flex text-black font-semibold "
            href="/status"
          >
            WEATHER
          </Link>
        </NavbarItem>

        <Dropdown className="bg-blue-200 text-black">
          <NavbarItem className="basis-1/4 flex justify-center">
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent data-[hover=true]:bg-transparent text-black font-semibold text-base hidden sm:flex"
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
            <DropdownItem href="/aboutus/specialist">Specialist</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem className="basis-1/4 flex justify-center">
          <Link className="text-black font-semibold " href="/contact">
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
