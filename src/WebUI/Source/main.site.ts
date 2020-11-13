if (process.env.NODE_ENV === "devlopment" && module.hot) {
    module.hot.accept();
}

import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons/faAlignLeft";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons/faAlignCenter";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons/faAlignRight";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons/faAlignJustify";
import { faBold } from "@fortawesome/free-solid-svg-icons/faBold";
import { faItalic } from "@fortawesome/free-solid-svg-icons/faItalic";
import { faUnderline } from "@fortawesome/free-solid-svg-icons/faUnderline";
import { faListOl } from "@fortawesome/free-solid-svg-icons/faListOl";
import { faListUl } from "@fortawesome/free-solid-svg-icons/faListUl";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faStrikethrough } from "@fortawesome/free-solid-svg-icons/faStrikethrough";
import { faRemoveFormat } from "@fortawesome/free-solid-svg-icons/faRemoveFormat";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

library.add(
    faEdit,
    faSearch,
    faUser,
    faAngleRight,
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAlignJustify,
    faBold,
    faItalic,
    faUnderline,
    faListOl,
    faListUl,
    faLink,
    faImage,
    faStrikethrough,
    faRemoveFormat,
    faComment,
    faChevronRight,
    faChevronLeft
);
dom.watch();
require("lazysizes");

import("./pages/login-partial/login.partial");
import("./components/main/header-nav/header.component");