interface IFPSCounter {
    /** The device's current FPS, to get a realtime reading get this value from a `setInterval()` function.
     *
     * ### Example:
     * ```typescript
     * const fpscounter = new FPSCounter();
     *
     * // Log the current FPS to the console every 500ms.
     * setInterval(() => {
     *  console.log(`The current FPS is ${fpscounter.fps}FPS`)
     * }, 500);
     * // Example log could be: 'The current FPS is 60FPS'
     * ```
     */
    fps: number;
}
export default IFPSCounter;
