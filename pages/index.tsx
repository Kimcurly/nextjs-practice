import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Homepage!</h1>
      <ul>
        <li>
          <Link href="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="clients">To Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
