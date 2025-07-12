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
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="درخواست ها"
        value={numOfProposals}
        color="blue"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="درخواست های قبول شده"
        value={acceptedProposals.length}
        color="green"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="کیف پول"
        value={englishToPersianNumber(balance)}
        color="orange"
      />
    </div>
  );
}

export default Stats;
