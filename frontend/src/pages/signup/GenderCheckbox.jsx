const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex gap-6">
      {/* Male */}
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender == "Male" ? "selected" : ""}`}>
          <span className="label-text text-gray-300">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio radio-primary"
            checked = {selectedGender == "Male"}
            onChange= {() => onCheckBoxChange("Male")}
          />
        </label>
      </div>

      {/* Female */}
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender == "Female" ? "selected" : ""}`}>
          <span className="label-text text-gray-300">Female</span>
          <input
            type="radio"
            name="gender"
            className="radio radio-primary"
            checked = {selectedGender == "Female"}
            onChange= {() => onCheckBoxChange("Female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
