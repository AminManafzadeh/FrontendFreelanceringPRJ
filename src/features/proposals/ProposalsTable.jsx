import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

function ProposalsTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading width="4rem" height="4rem" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>

      <Table.Body>
        {proposals?.map((proposal, index) => {
          return (
            <ProposalRow key={proposal._id} index={index} proposal={proposal} />
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
