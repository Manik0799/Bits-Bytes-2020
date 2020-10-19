import React from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
function CategoriesDropDown() {
  return (
    <>
      <UncontrolledDropdown>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="secondary"
          data-toggle="dropdown"
          id="dropdownMenuButton"
          style={{
            border: "none",
            backgroundColor: "inherit",
            color: "#9a9a9a",
          }}
        >
          <i className="fa fa-list-alt" />
          <span> </span>
          Categories
        </DropdownToggle>
        <DropdownMenu aria-labelledby="dropdownMenuButton">
          <DropdownItem
            href="/travel-places"
            // onClick={(e) => e.preventDefault()}
          >
            Travel & Places
          </DropdownItem>
          <DropdownItem
            href="/fashion-style"
            // onClick={(e) => e.preventDefault()}
          >
            Fashion & Style
          </DropdownItem>
          <DropdownItem
            href="/art"
            // onClick={(e) => e.preventDefault()}
          >
            Art
          </DropdownItem>
          <DropdownItem
            href="/entertainment"
            // onClick={(e) => e.preventDefault()}
          >
            Entertainment
          </DropdownItem>
          <DropdownItem
            href="/current-affairs"
            // onClick={(e) => e.preventDefault()}
          >
            Current Affairs
          </DropdownItem>

          <DropdownItem
            href="/health-fitness"
            // onClick={(e) => e.preventDefault()}
          >
            Heath & Fitness
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default CategoriesDropDown;
