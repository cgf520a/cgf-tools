type VoidFn = () => void;
type OneAction<V> = V | ((val: V) => V);
type ObjUpdater<Obj> = (obj: Obj) => Partial<Obj>;
type Setter<Obj> = {
    <K extends keyof Obj>(key: K, oneAction: OneAction<Obj[K]>): void;
    (obj: Partial<Obj>): void;
    (objUpdater: ObjUpdater<Obj>): void;
};
export type Store<Obj> = Obj & Setter<Obj>;
declare let run: (fn: VoidFn) => void;
declare const resso: {
    <Obj extends Record<string, unknown>>(obj: Obj): Store<Obj>;
    config({ batch }: {
        batch: typeof run;
    }): void;
};
export default resso;
