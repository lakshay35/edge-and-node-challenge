export const formatGRTValue = (value: string | number) => {
  if (typeof value === 'string') {
    return (Number(value) / Math.pow(10, 18)).toFixed(2)
  }

  return ((value as number) / Math.pow(10, 18)).toFixed(2)
}
