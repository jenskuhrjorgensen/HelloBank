export class NormalizerUtils {
    // Transform ObjectsById to array
    static normalizedObjectToArray(obj: any) {
        return Object.keys(obj)
            .map((key) => obj[key])
    }
}
