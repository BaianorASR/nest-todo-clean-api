export type ReplaceType<T, R> = Omit<T, keyof R> & R;
