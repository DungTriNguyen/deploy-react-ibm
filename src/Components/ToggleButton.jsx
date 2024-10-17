import UseToggle from "./UseToggle";
function ToggleButton() {
  const [isToggle, toggle] = UseToggle(false);
  return (
    <div>
      <h1>Toggle Button</h1>
      <button onClick={toggle}>{isToggle ? "ON" : "OFF"}</button>
    </div>
  );
}

export default ToggleButton;
