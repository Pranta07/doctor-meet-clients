import Lists from "./List.tsx";
import Paper from "./Paper.tsx";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(Lists(theme), Paper(theme));
}
