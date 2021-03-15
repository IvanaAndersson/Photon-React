import { useContext } from "react";
import { ThemeContext } from "../themeContext";

const ModeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section className="mode-toggler">
      <h3>Enable Dark Mode?</h3>
      <div className="toggle toggle--knob">
        <input
          type="checkbox"
          id="toggle--knob"
          className={`toggle--checkbox ${theme}-theme`}
          onClick={toggleTheme}
        />
        <label className="toggle--btn" htmlFor="toggle--knob">
          <span
            className="toggle--feature"
            data-label-on="on"
            data-label-off="off"
          ></span>
        </label>
      </div>
    </section>
  );
};

export default ModeToggler;
