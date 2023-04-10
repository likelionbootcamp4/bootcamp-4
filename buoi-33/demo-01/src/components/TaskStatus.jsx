import { useState } from "react";

const TaskStatus = () => {
  const [checked, setChecked] = useState(false);
  function handleInputChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          checked={checked}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleInputChange}
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          style={{
            color: checked ? "green" : "black",
          }}
        >
          Clean room {checked && "(Done)"}
        </label>
      </div>
    </div>
  );
};

export default TaskStatus;
