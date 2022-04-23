import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext.tsx";

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;
