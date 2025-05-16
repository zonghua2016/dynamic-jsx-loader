import React, { useEffect, useState } from "react";
import * as Babel from "@babel/standalone";

export default function DynamicLoader() {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const uri = new URLSearchParams(window.location.search).get("uri");

    if (!uri) {
      setError("未指定 uri 参数" as unknown as null);
      return;
    }


    fetch(uri)
      .then((res) => res.text())
      .then((code) => {
        try {
          const compiledCode = Babel.transform(code, {
            presets: ["react"],
          }).code;

          const exports = {};
          const module = { exports };
          const require = (name) => {
            switch (name) {
              case "react":
                return React;
              case "lucide-react":
                return require("lucide-react");
              case "framer-motion":
                return require("framer-motion");
              default:
                throw new Error(`不支持的模块: ${name}`);
            }
          };

          // 执行编译后的代码（作为模块）
          eval(
            `(function(require, module, exports){ ${compiledCode} })(require, module, exports);`
          );
          const ExportedComponent = module.exports.default;
          setComponent(() => ExportedComponent);
        } catch (err) {
          setError(`JSX 编译错误：${err.message}`);
        }
      })
      .catch((err) => {
        setError(`加载失败：${err.message}`);
      });
  }, []);

  if (error) return <div className="text-red-500">❌ {error}</div>;
  return Component ? (
    <Component />
  ) : (
    <div style={{ padding: 20 }}>⏳ 正在加载组件...</div>
  );
}
