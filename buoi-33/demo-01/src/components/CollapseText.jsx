const CollapseText = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
    </div>
  );
};

export default CollapseText;
