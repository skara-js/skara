// Skara.js Type Definitions

export interface VNode {
  tag: string | Function;
  props: Record<string, any>;
  children: (VNode | string | number)[];
}

export interface SkaraState<T> {
  get(): T;
  set(value: T): void;
  subscribe(callback: (value: T) => void): () => void;
}

export function h(
  tag: string | Function,
  props?: Record<string, any> | null,
  ...children: (VNode | string | number | (VNode | string | number)[])[]
): VNode;

export function createState<T>(initialValue: T): SkaraState<T>;

export function mount(
  componentFn: () => VNode,
  container: HTMLElement
): () => void;