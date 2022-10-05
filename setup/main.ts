import { defineAppSetup } from "@slidev/types";
import { isPrintMode } from "@slidev/client/logic/nav";

export default defineAppSetup(({ app }) => {
  const baseMotionDirective = app.directive("motion")!;
  const newMotionDirective = {};
  for (const [k, fn] of Object.entries(baseMotionDirective)) {
    newMotionDirective[k] = (...args) => {
      if (isPrintMode.value) {
        return;
      }
      fn(...args);
    };
  }
  app.directive("motion-x", newMotionDirective);
});
