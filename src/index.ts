import { RandomNumberGenerator } from '@h4v0c/rng';

let _rng: RandomNumberGenerator | undefined = undefined;
let _src_string: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const uid = (length: number = 16): string => {
    if (_rng === undefined) {
        _rng = new RandomNumberGenerator();
        _src_string = _rng.shuffle(_src_string) as string;
    }

    const uuid: Array<string> = [];

    while (uuid.length < length) uuid.push(_rng.choose(_src_string));

    return uuid.join('');
}
