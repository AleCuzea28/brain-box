import React from "react";

import { VscDebugStart } from "react-icons/vsc";
import { IoStatsChart } from "react-icons/io5";
import { RiQuestionnaireLine } from "react-icons/ri";
import { RiProfileLine } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { text: "start quiz", path: ".", icon: <VscDebugStart /> },
  { text: "stats", path: "stats", icon: <IoStatsChart /> },
  { text: "add question", path: "add-question", icon: <RiQuestionnaireLine /> },
  { text: "profile", path: "profile", icon: <RiProfileLine /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;
