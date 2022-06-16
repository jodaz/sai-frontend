export const phoneFormat = value => {
    if (!value) return value;

    const onlyNums = value.replace(/[^\d]/g, "");
    if (onlyNums.length <= 3) return onlyNums;
    if (onlyNums.length <= 7)
        return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
        
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6,10)}`;
};

export const identityCardFormat = value => {
    if (!value) return value;

    if (value.length <= 8) {
        const onlyNums = value.replace(/[^\d]/g, "");
        if (onlyNums.length <= 8) return onlyNums;
    }
};