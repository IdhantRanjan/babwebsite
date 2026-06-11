export const generateUniqueName = (): string => {
    return `user-${Math.random().toString(36).slice(2, 8)}`;
};
