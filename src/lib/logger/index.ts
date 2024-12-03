/**
 * Application logging utilities
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

/**
 * Centralized logging service
 */
export class Logger {
  /**
   * Logs message with specified level
   * @param level - Log level
   * @param message - Log message
   * @param metadata - Additional metadata
   */
  static log(level: LogLevel, message: string, metadata?: Record<string, unknown>) {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      metadata,
    };

    // TODO: Implement proper logging backend
    console.log(JSON.stringify(entry));
  }
}
