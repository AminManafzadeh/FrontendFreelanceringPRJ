import Stat from "../../ui/Stat";
import { CiUser } from "react-icons/ci";
import { IoIosGitPullRequest } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        icon={<CiUser className="w-20 h-20" />}
        title="کاربران"
        value={users.length}
        color="orange"
      />
      <Stat
        icon={<IoIosGitPullRequest className="w-20 h-20" />}
        title="درخواست ها"
        value={proposals.length}
        color="blue"
      />
      <Stat
        icon={<GoProjectRoadmap className="w-20 h-20" />}
        title="پروژه ها"
        value={projects.length}
        color="green"
      />
    </div>
  );
}

export default Stats;
