import RemoteComponent from "./RemoteComponent";

export default function RemoteComponentViaBlob() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("uri");
  console.log(1111, id);

  return (
    <div>
      {/* <RemoteComponent url="http://localhost:3000/public/x2h.jsx" /> */}
      <RemoteComponent url={`https://play.wot.360.cn/${id}.jsx`} />
    </div>
  );
}
