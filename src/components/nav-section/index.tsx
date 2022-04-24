import { matchPath } from "react-router-dom";

// ----------------------------------------------------------------------

export { default as NavSectionVertical } from "./vertical/index";

export function isExternalLink(path: any) {
  return path.includes("http");
}

export function getActive(path: any, pathname: any) {
  return path ? !!matchPath({ path, end: false }, pathname) : false;
}
