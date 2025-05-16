import React, { useEffect, useState, type JSXElementConstructor } from "react";
import * as ReactDOM from "react-dom";
import * as Lucide from "lucide-react";
import * as FramerMotion from "framer-motion";
import * as Babel from "@babel/standalone";

// 💡 所有允许注入的模块
const GLOBAL_SCOPE = {
  React,
  ReactDOM,
  Lucide,
  FramerMotion,
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

      // 🔍 提取变量名：找出所有疑似用到的符号（简单词法分析）
      const usedVars = [...compiled!.matchAll(/\b([A-Z][a-zA-Z0-9_]*)\b/g)]
        .map((m) => m[1])
        .filter((name, index, self) => self.indexOf(name) === index); // 去重

      // 💡 构造参数名、参数值
      const args = [...usedVars, "exports"];
      const values = [
        ...usedVars.map((name) => {
          // 从全局模块中自动查找，如 React.useState、Lucide.MapPin
          for (const scope of Object.values(GLOBAL_SCOPE)) {
            if (name in scope) return (scope as Record<string, unknown>)[name] as unknown;
          }
          return undefined;
        }),
        {},
      ];

      try {
        const fn = new Function(...args, compiled!);
        fn(...values);
        setComponent(() => (values[values.length - 1] as { default: JSXElementConstructor<unknown> }).default);
      } catch (err) {
        console.error("组件执行失败:", err);
      }
    }

    loadRemoteComponent();
  }, [url]);

  return Component ? <Component /> : <div>远程组件加载中...</div>;
}
