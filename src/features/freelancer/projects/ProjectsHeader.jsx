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
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="font-bold text-lg">لیست پروژه ها</h1>
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
  );
}

export default ProjectsHeader;
