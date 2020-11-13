if (process.env.NODE_ENV === "devlopment" && module.hot) {
    module.hot.accept();
}

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
//import { } from "@fortawesome/free-solid-svg-icons/"

library.add(
    faUser
);
dom.watch();
require("lazysizes");

import("./pages/account/account.page");