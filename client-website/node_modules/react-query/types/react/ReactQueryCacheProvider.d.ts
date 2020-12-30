import React from 'react';
import { QueryCache } from '../core/queryCache';
export declare const queryCacheContext: React.Context<QueryCache>;
export declare const useQueryCache: () => QueryCache;
export interface ReactQueryCacheProviderProps {
    queryCache?: QueryCache;
}
export declare const ReactQueryCacheProvider: React.FC<ReactQueryCacheProviderProps>;
