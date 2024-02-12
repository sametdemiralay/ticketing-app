import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
      <h1>HELLO {process.env.MONGODB_URI}</h1>
    </div>
  );
};

export default Dashboard;
