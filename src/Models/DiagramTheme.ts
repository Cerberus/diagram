export interface DiagramTheme {
  snappingGridSize?:number;
  node: {
    width: number;
    height: number;
    nameSize: number;
    typeSize: number;
    spacing: {
      x: number;
      y: number;
    };
  };
  description: {
    width: number;
    height: number;
    triangleWidth: number;
    triangleHeight: number;
  };
  port: {
    width: number;
  };
  link: {
    strokeWidth: number;
    cornerRadius: number;
    defaultCenterPoint: number;
  };
  menu: {
    width: number;
    maxHeight: number;
    category: {
      height: number;
      textSize: number;
    };
    spacing: {
      x: number;
      y: number;
    };
  };
  colors: {
    background: string;
    minimap: {
      alpha: number;
      background: string;
      visibleArea: string;
      borders: string;
      node: string;
    }
    menu: {
      background: string;
      hover: string;
      text: string;
    };
    description: {
      background: string;
      text: string;
    };
    node: {
      background: string;
      selected: string;
      name: string;
      type: string;
      types: Record<string, string>;
    };
    port: {
      background: string;
      backgroundActive: string;
      button: string;
    };
    link: {
      main: string;
      active: string;
    };
  };
}