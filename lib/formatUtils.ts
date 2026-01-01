/**
 * Safe formatting utilities for React rendering
 * Prevents "Objects are not valid as a React child" errors
 */

/**
 * Format improvement object to string
 * Accepts: { from, to, change } or string
 * Returns: "from% → to% (change)" or null
 */
export function formatImprovement(
  improvement: string | { from?: number; to?: number; change?: number; percentage?: number } | undefined
): string | null {
  if (!improvement) return null;
  
  if (typeof improvement === 'string') {
    return improvement;
  }
  
  if (typeof improvement === 'object' && improvement !== null) {
    const from = improvement.from;
    const to = improvement.to;
    const change = improvement.change;
    const percentage = improvement.percentage;
    
    // Format: "from% → to% (change)"
    if (typeof from === 'number' && typeof to === 'number') {
      const changeValue = typeof change === 'number' ? change : (to - from);
      const sign = changeValue >= 0 ? '+' : '';
      return `${from.toFixed(1)}% → ${to.toFixed(1)}% (${sign}${changeValue.toFixed(1)}%)`;
    }
    
    // Fallback to change or percentage
    if (typeof change === 'number') {
      return `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`;
    }
    
    if (typeof percentage === 'number') {
      return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(1)}%`;
    }
  }
  
  return null;
}

/**
 * Format any value to safe string for React rendering
 * - string → return string
 * - number → return value.toString()
 * - array → value.join(', ')
 * - object → Object.entries(value).map(([k,v]) => `${k}: ${v}`).join(' | ')
 * - null/undefined → return null
 */
export function formatAnyValue(value: any): string | null {
  if (value === null || value === undefined) {
    return null;
  }
  
  if (typeof value === 'string') {
    return value;
  }
  
  if (typeof value === 'number') {
    return value.toString();
  }
  
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }
  
  if (Array.isArray(value)) {
    return value
      .filter(item => item != null)
      .map(item => formatAnyValue(item) || '—')
      .join(', ');
  }
  
  if (typeof value === 'object') {
    const entries = Object.entries(value)
      .filter(([key, val]) => key != null && val != null)
      .map(([key, val]) => {
        const valStr = formatAnyValue(val) || '—';
        return `${String(key)}: ${valStr}`;
      });
    
    return entries.length > 0 ? entries.join(' | ') : null;
  }
  
  return String(value);
}

/**
 * Format details safely
 * - string → return string
 * - array → join with ", "
 * - object → render key-value pairs
 */
export function formatDetails(
  details: string | string[] | Record<string, any> | undefined
): string | null {
  if (!details) return null;
  
  if (typeof details === 'string') {
    return details;
  }
  
  if (Array.isArray(details)) {
    return details
      .filter(item => item != null)
      .map(item => typeof item === 'string' ? item : formatAnyValue(item) || '—')
      .join(', ');
  }
  
  if (typeof details === 'object' && details !== null) {
    const entries = Object.entries(details)
      .filter(([key, value]) => key != null && value != null)
      .map(([key, value]) => {
        const valueStr = formatAnyValue(value) || '—';
        return `${String(key)}: ${valueStr}`;
      });
    
    return entries.length > 0 ? entries.join(' | ') : null;
  }
  
  return null;
}

