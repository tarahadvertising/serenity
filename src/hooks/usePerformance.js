import { useEffect, useRef, useState } from 'react';

export const usePerformanceMonitor = (componentName) => {
  const renderStartTime = useRef(performance.now());
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const renderEndTime = performance.now();
    const renderTime = renderEndTime - renderStartTime.current;
    
    if (import.meta.env.DEV) {
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
    }

    setMetrics({
      renderTime,
      memory: performance.memory ? {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576),
        total: Math.round(performance.memory.totalJSHeapSize / 1048576),
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
      } : null
    });
  }, [componentName]);

  return metrics;
};

export const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const useThrottle = (callback, limit) => {
  const inThrottle = useRef(false);

  return (...args) => {
    if (!inThrottle.current) {
      callback(...args);
      inThrottle.current = true;
      setTimeout(() => {
        inThrottle.current = false;
      }, limit);
    }
  };
};

export const useIdleCallback = (callback, options) => {
  const idleRef = useRef(null);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      idleRef.current = requestIdleCallback(callback, options);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(callback, 1);
    }

    return () => {
      if (idleRef.current && 'cancelIdleCallback' in window) {
        cancelIdleCallback(idleRef.current);
      }
    };
  }, [callback, options]);
};

export const useResourceTiming = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const entries = performance.getEntriesByType('resource');
      const resourceData = entries.map(entry => ({
        name: entry.name,
        duration: entry.duration,
        size: entry.transferSize || 0,
        type: entry.initiatorType
      }));
      setResources(resourceData);
    }
  }, []);

  return resources;
};
