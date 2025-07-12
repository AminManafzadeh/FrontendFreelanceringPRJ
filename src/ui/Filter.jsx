import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (vlue) => {
    searchParams.set(filterField, vlue);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs   ">
      <span>وضعیت :</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 px-1 rounded-lg">
        {options?.map((item) => {
          const isActive = item.value === currFilter;
          return (
            <button
              onClick={() => handleClick(item.value)}
              className={`whitespace-nowrap rounded-md px-4 py-2.5 font-bold transition-all duration-300 ${
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
