const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="space-y-2">
      <label className="label p-2">
        <span className="label-text text-sm sm:text-base text-gray-300 font-medium">
          Gender
        </span>
      </label>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Male Option */}
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            className="checkbox checkbox-sm sm:checkbox-md border-gray-600/50 
            checked:border-blue-500 [--chkbg:theme(colors.blue.600)] 
            [--chkfg:white] transition-all duration-200"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
          <span className="text-sm sm:text-base text-gray-300 group-hover:text-white 
          transition-colors duration-200">
            Male
          </span>
        </label>

        {/* Female Option */}
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            className="checkbox checkbox-sm sm:checkbox-md border-gray-600/50 
            checked:border-blue-500 [--chkbg:theme(colors.blue.600)] 
            [--chkfg:white] transition-all duration-200"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
          <span className="text-sm sm:text-base text-gray-300 group-hover:text-white 
          transition-colors duration-200">
            Female
          </span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;