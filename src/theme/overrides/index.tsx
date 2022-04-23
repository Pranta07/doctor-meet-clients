//
import Fab from "./Fab.tsx";
import Card from "./Card.tsx";
import Chip from "./Chip.tsx";
import Tabs from "./Tabs.tsx";
import Menu from "./Menu.tsx";
import Link from "./Link.tsx";
import Lists from "./List.tsx";
import Table from "./Table.tsx";
import Alert from "./Alert.tsx";
import Badge from "./Badge.tsx";
import Paper from "./Paper.tsx";
import Input from "./Input.tsx";
import Radio from "./Radio.tsx";
import Drawer from "./Drawer.tsx";
import Dialog from "./Dialog.tsx";
import Avatar from "./Avatar.tsx";
import Rating from "./Rating.tsx";
import Slider from "./Slider.tsx";
import Button from "./Button.tsx";
import Switch from "./Switch.tsx";
import Select from "./Select.tsx";
import SvgIcon from "./SvgIcon.tsx";
import Tooltip from "./Tooltip.tsx";
import Popover from "./Popover.tsx";
import Stepper from "./Stepper.tsx";
import DataGrid from "./DataGrid.tsx";
import Skeleton from "./Skeleton.tsx";
import Backdrop from "./Backdrop.tsx";
import Progress from "./Progress.tsx";
import Timeline from "./Timeline.tsx";
import TreeView from "./TreeView.tsx";
import Checkbox from "./Checkbox.tsx";
import Accordion from "./Accordion.tsx";
import Typography from "./Typography.tsx";
import Pagination from "./Pagination.tsx";
import Breadcrumbs from "./Breadcrumbs.tsx";
import ButtonGroup from "./ButtonGroup.tsx";
import CssBaseline from "./CssBaseline.tsx";
import Autocomplete from "./Autocomplete.tsx";
import ToggleButton from "./ToggleButton.tsx";
import ControlLabel from "./ControlLabel.tsx";
import LoadingButton from "./LoadingButton.tsx";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Fab(theme),
    Tabs(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    Link(theme),
    Input(theme),
    Radio(theme),
    Badge(theme),
    Lists(theme),
    Table(theme),
    Paper(theme),
    Alert(theme),
    Switch(theme),
    Select(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),
    Checkbox(theme),
    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),
    TreeView(theme),
    Backdrop(theme),
    Progress(theme),
    Accordion(theme),
    Typography(theme),
    Pagination(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    CssBaseline(theme),
    Autocomplete(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}
