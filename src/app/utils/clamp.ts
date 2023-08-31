// app/utils/clamp.ts

export default function clamp(minimum: number, 
    value: number, 
    maximum: number)
{
    return Math.max(minimum, Math.min(value, maximum))
}