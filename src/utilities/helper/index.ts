import { lazy } from "react";

export const LazyLoad = (param: string) => lazy(() => import(param));
