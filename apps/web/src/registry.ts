import { lazy } from "solid-js";
import type { Block } from "./types";

const registry: Block[] = [
  {
    name: "Github Star",
    description:
      "See all your Github stars evolution over time on one repository",
    Component: lazy(() => import("./github/StarBlock")),
    Setup: lazy(() => import("./github/SearchRepoForm")),
  },
  {
    name: "Github Issue",
    description:
      "See how  many issues are open at the moment on one repository",
    Component: lazy(() => import("./github/OpenIssueBlock")),
    Setup: lazy(() => import("./github/SearchRepoForm")),
  },
  {
    name: "Github PR",
    description: "See how  many PR are open at the moment on one reposirory",
    Component: lazy(() => import("./github/OpenPullRequestBlock")),
    Setup: lazy(() => import("./github/SearchRepoForm")),
  },
  {
    name: "NPM Download",
    description: "All NPM downloads informations",
    Component: lazy(() => import("./npm/DownloadBlock")),
    Setup: lazy(() => import("./github/SearchRepoForm")),
  },
];

export default registry;
