import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalsTable({ proposals }) {
  console.log(proposals);

  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {proposals?.map((proposal, index) => {
          return (
            <ProposalRow key={proposal.id} index={index} proposal={proposal} />
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
