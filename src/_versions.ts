export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '3.0.0',
    name: 'odamex',
    versionDate: '2025-11-20T17:20:09.250Z',
    gitCommitHash: 'c32b80c',
    versionLong: '3.0.0-c32b80c',
};
export default versions;
