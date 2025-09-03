import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import englishToPersianNumber from "../../utils/englishToPersianNumber";

function Stats({ proposals }) {
  const numOfProposals = proposals?.length ?? 0;
  const acceptedProposals = proposals?.filter((p) => p.status === 2) ?? [];
  const balance = acceptedProposals.reduce(
    (acc, curr) => acc + (curr.price ?? 0),
    0
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <Stat
        icon={
          <HiOutlineViewGrid className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        }
        title="درخواست ها"
        value={numOfProposals}
        color="blue"
      />
      <Stat
        icon={
          <HiCurrencyDollar className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        }
        title="درخواست های قبول شده"
        value={acceptedProposals.length}
        color="green"
      />
      <Stat
        icon={
          <HiCollection className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        }
        title="کیف پول"
        value={englishToPersianNumber(balance)}
        color="orange"
      />
    </div>
  );
}

export default Stats;
