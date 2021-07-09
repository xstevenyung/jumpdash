import type { Component } from "solid-js";
import { Show } from "solid-js/web";

export const SimpleMetricBlock: Component<{
  loading: boolean;
  title: string;
  value: () => string | number;
  uow: string;
}> = (props) => {
  return (
    <Show when={!props.loading}>
      <div class="rounded">
        <h4 class="text-lg font-thin text-gray-400">{props.title}</h4>

        <div class="flex gap-2 items-baseline">
          <span>
            <span class="text-4xl">{props.value()}</span>
            {/* <span class="text-2xl ml-0.5">k</span> */}
          </span>

          <span class="font-mono">{props.uow}</span>
        </div>
      </div>
    </Show>
  );
};