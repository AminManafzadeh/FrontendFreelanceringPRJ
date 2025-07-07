import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategory from "../../hooks/useCategory";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProjects from "./useEditProjects";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditIdExist = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditIdExist) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline || "");

  const { categories } = useCategory();
  const { isCreating, createProject } = useCreateProject();
  const { editProject } = useEditProjects();

  const onSubmit = (data) => {
    console.log(data);
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditIdExist) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <TextField
        type="text"
        label="نام پروژه"
        name="title"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نا معتبر است",
          },
        }}
      />
      <TextField
        type="text"
        label="توضیحات"
        name="description"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "طول عنوان نا معتبر است",
          },
        }}
      />
      <TextField
        type="number"
        label="بودجه"
        name="budget"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "بودجه ضروری است",
        }}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        options={categories}
        register={register}
        required
      />
      <div>
        <label className="block mb-2 text-secondary-700">تگ</label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          classNames={{
            input: "bg-secondary-100 focus:outline-none px-2 py-1",
            tag: "bg-primary-100 text-secondary-800 px-2 py-1 rounded-full mr-1",
            tagContainer: "flex flex-wrap gap-2 mt-2",
          }}
          placeHolder="تگ‌ها را وارد کنید..."
        />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین پروژه" />
      <div>
        {isCreating ? (
          <Loading width="4rem" height="4rem" />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
