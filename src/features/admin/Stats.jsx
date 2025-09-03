import Stat from "../../ui/Stat";
import { CiUser } from "react-icons/ci";
import { IoIosGitPullRequest } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <Stat
        icon={<CiUser className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />}
        title="کاربران"
        value={users.length}
        color="orange"
      />
      <Stat
        icon={
          <IoIosGitPullRequest className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        }
        title="درخواست ها"
        value={proposals.length}
        color="blue"
      />
      <Stat
        icon={
          <GoProjectRoadmap className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        }
        title="پروژه ها"
        value={projects.length}
        color="green"
      />
    </div>
  );
}

export default Stats;
