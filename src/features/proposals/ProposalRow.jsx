import Table from "../../ui/Table";
import englishToPersianNumber from "../../utils/englishToPersianNumber";
import truncateText from "../../utils/truncateText";

const statusContainer = [
  {
    className: "badge--danger",
    label: "رد شده",
  },

  {
    className: "badge--secondary",
    label: "در انتظار تایید ",
  },
  {
    className: "badge--success",
    label: "تایید شده",
  },
];

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal?.description, 15)}</td>
      <td>{englishToPersianNumber(proposal?.duration)} روز</td>
      <td>{englishToPersianNumber(proposal?.price)} تومان</td>
      <td>
        <span className={`badge ${statusContainer[status].className}`}>
          {statusContainer[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
