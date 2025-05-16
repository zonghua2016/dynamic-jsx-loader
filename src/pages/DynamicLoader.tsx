// import React from "react";
import { useParams } from "react-router-dom";
import RemoteComponent from "./RemoteComponent";

export default function RemoteComponentViaBlob() {
  const { id } = useParams();
  
  // const [Comp, setComp] = useState<React.FC | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("http://localhost:3000/public/x2h1.jsx");
  //     const code = await res.text();
  //     const blob = new Blob([code], { type: "text/javascript" });
  //     const blobUrl = URL.createObjectURL(blob);
  //     try {
  //       const module = await import(/* @vite-ignore */ blobUrl);
  //       console.log(222222);
  //       if (module.default) {
  //         setComp(() => module.default);
  //       } else {
  //         console.error("No default export found in module");
  //       }
  //       return () => URL.revokeObjectURL(blobUrl);
  //     } catch (err) {
  //       console.error("加载远程组件失败:", err);
  //     }
  //   })();
  // }, []);

  return (
    <div>
      {/* <RemoteComponent url="http://localhost:3000/public/x2h.jsx" /> */}
      <RemoteComponent url={`https://play.wot.360.cn/${id}.jsx`} />
    </div>
  );
}
