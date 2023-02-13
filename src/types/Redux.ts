export interface Action<T, P extends unknown = undefined> {
    payload: P extends infer Q ? Q : undefined;
    type: T;
};

export interface TWithLoading<T> {
    data: T;
    isLoading?: boolean;
};