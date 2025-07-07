import useToggleStatusProject from "../features/projects/useToggleStatusProject";
import ToggleStatus from "./ToggleStatus";
import Loading from "./Loading";

function ToggleProjectStatus({ project }) {
  const { isToggleStatus, toggleStatusProject } = useToggleStatusProject();

  const enabled = project?.status === "OPEN" ? true : false;

  const toggleHandler = () => {
    const status = project?.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleStatusProject({ id: project?._id, data: { status } });
  };

  return (
    <div className="w-[5rem]">
      {isToggleStatus ? (
        <Loading width="3rem" height="3rem" />
      ) : (
        <ToggleStatus
          enabled={enabled}
          onToggle={toggleHandler}
          project={project}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
