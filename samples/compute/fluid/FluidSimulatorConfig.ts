export type FluidSimulatorConfig = {
    GROUP_SIZE: number;
    XMIN: number;
    XMAX: number;
    YMIN: number;
    YMAX: number;
    ZMIN: number;
    ZMAX: number;
    scaleV: number;
    scale: number;
    gridSizeX: number;
    gridSizeY: number;
    gridSizeZ: number;
    gridResolutionX: number;
    gridResolutionY: number;
    gridResolutionZ: number;
    initDensity: number;
    NUM: number;
    dispatchNUM: number;
    GRIDNUM: number;
    dispatchGRID: number;
    CELLNUM: number;
    dispatchCELL: number;
    maxDensity: number;
    timeStep: number;
    PRESSURE_JACOBI_ITERATIONS: number;
    flipness: number;
};
