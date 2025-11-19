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
    versionDate: '2025-11-19T17:40:55.458Z',
    gitCommitHash: 'd208069',
    versionLong: '3.0.0-d208069',
};
export default versions;
