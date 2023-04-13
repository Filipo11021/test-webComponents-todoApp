import { observable } from "../shared/utils/observable";

export const todosObservable = observable<{ task: string }>();
