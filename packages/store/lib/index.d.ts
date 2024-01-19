type VoidFn = () => void;
type OneAction<V> = V | ((val: V) => V);
type ObjUpdater<Obj> = (obj: Obj) => Partial<Obj>;
export type Setter<Obj> = {
    <K extends keyof Obj>(key: K, oneAction: OneAction<Obj[K]>): void;
    (obj: Partial<Obj>): void;
    (objUpdater: ObjUpdater<Obj>): void;
};
export type Store<Obj> = Obj & Setter<Obj>;
declare let run: (fn: VoidFn) => void;
type SetFn<T> = (params: {
    key: keyof T;
    val: unknown;
    type?: string;
    payload?: unknown;
}) => void;
type NextFn<T> = (next: SetFn<T>) => SetFn<T>;
type GetStateFn<K> = () => K;
export type Middleware = <T>(params: {
    getState: GetStateFn<unknown>;
    dispatch: SetFn<T>;
}) => NextFn<T>;
export type ReducerFn<T> = (store: Store<T>, action: {
    type: string;
    payload?: unknown;
}) => T;
export declare function compose<T>(...funcs: NextFn<T>[]): NextFn<T> | ((arg: any) => any);
declare const resso: {
    <Obj extends Record<string, unknown>>(obj: Obj): Store<Obj>;
    config({ batch }: {
        batch: typeof run;
    }): void;
    applyMiddlewares<T>(middlewares: Middleware[], reducer?: ReducerFn<T> | undefined): void;
};
export default resso;
