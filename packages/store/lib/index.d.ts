type VoidFn = () => void;
type AnyFn = (...args: unknown[]) => unknown;
type OneAction<V> = V | ((val: V) => V);
type ObjUpdater<Obj> = (obj: Obj) => Partial<Obj>;
type Setter<Obj> = {
    <K extends keyof Obj>(key: K, oneAction: OneAction<Obj[K]>): void;
    (obj: Partial<Obj>): void;
    (objUpdater: ObjUpdater<Obj>): void;
};
export type Store<Obj> = Obj & Setter<Obj>;
declare let run: (fn: VoidFn) => void;
type Middleware = <T>({ store }: {
    store: Store<T>;
}) => (next: AnyFn) => AnyFn;
declare const resso: {
    <Obj extends Record<string, unknown>>(obj: Obj): Store<Obj>;
    config({ batch }: {
        batch: typeof run;
    }): void;
    applyMiddlewares(middlewares: Middleware[]): void;
};
export default resso;
