import { useRouter } from "next/router";

const ClientsProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Project of Given Client</h1>
    </div>
  );
};

export default ClientsProjectPage;
