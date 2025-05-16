import React, { useEffect, useState, type JSXElementConstructor } from "react";
import * as ReactDOM from "react-dom";
import * as Lucide from "lucide-react";
import * as FramerMotion from "framer-motion";
import * as Babel from "@babel/standalone";

const GLOBAL_SCOPE: Record<string, unknown> = {
  React,
  ReactDOM,
  Lucide: { ...Lucide },
  FramerMotion: { ...FramerMotion },
  ...React,
  ...Lucide,
  ...FramerMotion,
};


export default function RemoteComponentLoader({ url }: { url: string }) {
  const [Component, setComponent] = useState<JSXElementConstructor<unknown>>();

  useEffect(() => {
    async function loadRemoteComponent() {
      const res = await fetch(url);
      let rawCode = await res.text();

      // ✂️ 去除 import/export
      rawCode = rawCode
        .replace(/^import[^;]+;?/gm, "")
        .replace(/export\s+default/, "exports.default =");

      // 🌀 使用 Babel 编译 JSX
      const compiled = Babel.transform(rawCode, {
        presets: ["react"],
      }).code;

      const usedVars = [...compiled!.matchAll(/\b([A-Za-z_][a-zA-Z0-9_]*)\b/g)]
        .map((m) => m[1])
        .filter(
          (name, idx, self) =>
            !['true', 'false', 'return', 'if', 'else', 'function', 'const', 'let', 'var'].includes(name) &&
            self.indexOf(name) === idx
        );

      const sandbox: Record<string, unknown> = { exports: {} };

      for (const name of usedVars) {
        if (name in GLOBAL_SCOPE) {
          sandbox[name] = GLOBAL_SCOPE[name];
        }
      }

      try {
        const wrappedCode = `
          with (sandbox) {
            ${compiled}
            return exports.default;
          }
        `;
        const fn = new Function("sandbox", wrappedCode);
        const Component = fn(sandbox);
        setComponent(() => Component);
      } catch (err) {
        console.error("组件执行失败:", err);
      }
    }

    loadRemoteComponent();
  }, [url]);

  return Component ? <Component /> : <div>远程组件加载中...</div>;
}
