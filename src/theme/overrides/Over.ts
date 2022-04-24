import Lists from "./List";
import Paper from "./Paper";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return Object.assign(Lists(theme), Paper(theme));
}
