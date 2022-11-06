import { trpc } from "../utils/trpc";

const TrpcExample = () => {
  const { data } = trpc.bcit.getAll.useQuery();
  return <div>{data ? data[0]?.email : null}</div>;
};

export default TrpcExample;
