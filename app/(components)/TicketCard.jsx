import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
//   function formatTimestamp(timestamp) {
//     const options = {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     };

//     const date = new Date(timestamp);
//     const formattedDate = date.toLocaleString("en-US", options);

//     return formattedDate;
//   }

//   const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        {/* <PriorityDisplay priority={ticket.priority} /> */}
        <PriorityDisplay priority={3} />
        <div className="ml-auto">
          {/* <DeleteBlock id={ticket._id} /> */}
          <DeleteBlock id={123} />
        </div>
      </div>
      <Link href={`/TicketPage/${123}`} style={{ display: "contents" }}>
        {/* <h4 className="mb-1">{ticket.title}</h4> */}
        <h4 className="mb-1">Ticket Title</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        {/* <p className="whitespace-pre-wrap">{ticket.description}</p> */}
        <p className="whitespace-pre-wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quia accusamus doloremque, harum saepe culpa?</p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            {/* <p className="text-xs  my-1">{createdDateTime}</p> */}
            <p className="text-xs  my-1">08/31/23 10:43PM</p>
            {/* <ProgressDisplay progress={ticket.progress} /> */}
            <ProgressDisplay progress={75} />
          </div>
          <div className="ml-auto  flex items-end">
            {/* <StatusDisplay status={ticket.status} /> */}
            <StatusDisplay status={"done"} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;