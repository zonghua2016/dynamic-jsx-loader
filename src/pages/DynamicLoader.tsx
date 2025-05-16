import { useParams } from "react-router-dom";
import RemoteComponent from "./RemoteComponent";

export default function RemoteComponentViaBlob() {
  const { id } = useParams();
  return (
    <div>
      {/* <RemoteComponent url="http://localhost:3000/public/x2h.jsx" /> */}
      <RemoteComponent url={`https://play.wot.360.cn/${id}.jsx`} />
    </div>
  );
}
