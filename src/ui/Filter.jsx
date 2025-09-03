import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (vlue) => {
    searchParams.set(filterField, vlue);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-x-2 text-xs">
      <span className="font-medium text-secondary-700 whitespace-nowrap">
        وضعیت :
      </span>
      <div className="flex items-center gap-x-1 sm:gap-x-2 border border-secondary-100 bg-secondary-0 p-1 rounded-lg overflow-x-auto">
        {options?.map((item) => {
          const isActive = item.value === currFilter;
          return (
            <button
              onClick={() => handleClick(item.value)}
              className={`whitespace-nowrap rounded-md px-2 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                isActive
                  ? "bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
              key={item.value}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
