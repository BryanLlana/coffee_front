import { useRef, useState } from "react";

const useBoolean = (initial = false) => {
  const [active, setActive] = useState(initial);

  const actions = useRef({
    on: () => setActive(true),
    off: () => setActive(false),
    toggle: () => setActive((s) => !s),
    set: setActive,
  });

  return { active, ...actions.current };
};

export default useBoolean;
export type UseBoolean = ReturnType<typeof useBoolean>;
