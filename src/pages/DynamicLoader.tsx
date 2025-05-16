// import React from "react";
import RemoteComponent from "./RemoteComponent";

export default function RemoteComponentViaBlob() {
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
      <RemoteComponent url="http://localhost:3000/public/x2h.jsx" />

      {/* <LoadRemoteComponent
        urls={["https://play.wot.360.cn/ai-components.js"]}
        name="AIComponents.Button"
      ></LoadRemoteComponent> */}

      {/* <LoadRemoteComponent
        urls={[
          "https://cdnjs.cloudflare.com/ajax/libs/antd/5.16.2/antd.min.js",
        ]}
        name="antd.FloatButton"
        options={{
          props: {
            type: "step-forward",
            // loading: true,
          },
          externals: {
            react: {
              import: React,
              export: "React",
            },
            "react-dom": {
              import: ReactDOM,
              export: "ReactDOM",
            },
            dayjs: {
              import: dayjs,
              export: "dayjs",
            },
          },
        }}
      >
        按钮文字11
      </LoadRemoteComponent> */}
      {/* {Comp ? <Comp /> : "组件加载中..."} */}
    </div>
  );
}
