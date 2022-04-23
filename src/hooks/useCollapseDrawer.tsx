import { useContext } from "react";
import { CollapseDrawerContext } from "../contexts/CollapseDrawerContext.tsx";

// ----------------------------------------------------------------------

const useCollapseDrawer = () => useContext(CollapseDrawerContext);

export default useCollapseDrawer;
