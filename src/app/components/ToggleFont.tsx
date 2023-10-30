const ToggleFont = () => {
  return (
    <>
      <select name="cars" id="cars" className="text-2xl">
        <option value="volvo" className="text-2lg">
          Serif
        </option>
        <option value="saab" className="text-2lg">
          San-serif
        </option>
      </select>
      <span className="border border-slate-300 ml-4"></span>
    </>
  );
};

export default ToggleFont;
