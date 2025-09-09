declare module "react-fitty" {
    import { ComponentType, ReactNode } from "react";
  
    export interface FittyProps {
      /**
       * The minimum font size in pixels
       * @default 12
       */
      minSize?: number;
  
      /**
       * The maximum font size in pixels
       * @default 100
       */
      maxSize?: number;
  
      /**
       * Allow text to wrap into multiple lines
       * @default false
       */
      multiLine?: boolean;
  
      /**
       * Observe DOM mutations to refit automatically
       * @default true
       */
      observeMutations?: boolean;
  
      children?: ReactNode;
    }
  
    const Fitty: ComponentType<FittyProps>;
  
    // support both styles of import
    export { Fitty as ReactFitty };
    export default Fitty;
  }
  