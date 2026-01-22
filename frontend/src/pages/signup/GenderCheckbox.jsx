const GenderCheckBox = () => {
  return (
    <div className="flex gap-6">
      {/* Male */}
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text text-gray-300">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio radio-primary"
          />
        </label>
      </div>

      {/* Female */}
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text text-gray-300">Female</span>
          <input
            type="radio"
            name="gender"
            className="radio radio-primary"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
