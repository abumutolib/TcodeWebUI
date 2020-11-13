if (process.env.NODE_ENV === "devlopment" && module.hot) {
    module.hot.accept();
}

import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

library.add(
    faEdit,
    faSearch,
    faUser,
    faAngleRight
);
dom.watch();
require("lazysizes");

import("./components/tutorial/header/header.component");