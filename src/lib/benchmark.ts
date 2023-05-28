import { useEffect, useState } from 'react';
import { onTTFB, onFCP } from 'web-vitals';

export const hostingTag = process.env.NODE_ENV === 'production' ? 'VERCEL' : 'DEV_SERVER';
export const humanHostingName = hostingTag === 'VERCEL' ? 'Vercel' : 'Dev Server';

interface Metrics {
  ttfb: number;
  fcp: number;
}

const getMetrics = async () => {
  const [ttfb, fcp] = await Promise.all([
    new Promise<number>((resolve) => {
      onTTFB((metric) => resolve(metric.value));
    }),
    new Promise<number>((resolve) => {
      onFCP((metric) => resolve(metric.value));
    }),
  ]);
  return { ttfb, fcp };
};
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
const metrics = typeof window === 'undefined' ? (new Promise(() => {}) as Promise<Metrics>) : getMetrics();

export const useWebVitals = () => {
  const [stateMetrics, setStateMetrics] = useState<Metrics>();
  useEffect(() => {
    metrics
      .then((receivedMetrics) => {
        setStateMetrics(receivedMetrics);
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, []);
  return stateMetrics;
};
