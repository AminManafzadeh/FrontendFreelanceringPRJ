import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ projects }) {
  const numOfProjects = projects?.length;
  const numOfAcceptedProjects = projects?.filter((p) => p.status === 2).length;
  const numOfProposals = projects?.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <Stat
        icon={
          <HiOutlineViewGrid className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        }
        title="پروژه ها"
        value={numOfProjects}
        color="blue"
      />
      <Stat
        icon={
          <HiCurrencyDollar className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        }
        title="پروژه های واگذاری شده"
        value={numOfAcceptedProjects}
        color="green"
      />
      <Stat
        icon={
          <HiCollection className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        }
        title="درخواست ها"
        value={numOfProposals}
        color="orange"
      />
    </div>
  );
}

export default Stats;
