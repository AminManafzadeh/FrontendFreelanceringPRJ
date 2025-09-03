import useCategory from "../../../hooks/useCategory";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  { value: "earliest", label: "قدیمی ترین" },
  { value: "latest", label: "جدید ترین" },
];

const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategory();

  return (
    <div className="space-y-4 lg:space-y-0">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <h1 className="font-bold text-lg sm:text-xl text-secondary-700 mb-4">
          لیست پروژه ها
        </h1>

        {/* Mobile Filters - Stacked */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Filter filterField="status" options={statusOptions} />
            </div>
            <div className="flex-1">
              <FilterDropDown
                filterField="category"
                options={[
                  { value: "All", label: "دسته بندی (همه)" },
                  ...transformedCategories,
                ]}
              />
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <FilterDropDown filterField="sort" options={sortOptions} />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:items-center lg:justify-between text-secondary-700">
        <h1 className="font-bold text-xl">لیست پروژه ها</h1>
        <div className="font-semibold flex items-center gap-x-4">
          <Filter filterField="status" options={statusOptions} />

          <FilterDropDown
            filterField="category"
            options={[
              { value: "All", label: "دسته بندی (همه)" },
              ...transformedCategories,
            ]}
          />

          <FilterDropDown filterField="sort" options={sortOptions} />
        </div>
      </div>
    </div>
  );
}

export default ProjectsHeader;
