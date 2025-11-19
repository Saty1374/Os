# config.js - Configuration Constants

```javascript
/**
 * Configuration Module
 * Contains all application constants and configuration settings
 * 
 * OS Theory: This demonstrates separation of configuration from logic,
 * similar to how OS kernel parameters can be tuned without recompiling
 */

const CONFIG = {
    // System Monitoring Settings
    MONITORING: {
        UPDATE_INTERVAL: 2000,        // Update metrics every 2 seconds
        ALERT_THRESHOLD_CPU: 85,       // CPU alert at 85%
        ALERT_THRESHOLD_MEMORY: 85,    // Memory alert at 85%
        MAX_PROCESSES_DISPLAY: 8       // Show top 8 processes
    },

    // System Specifications (Simulated)
    SYSTEM: {
        CPU_CORES: 8,
        CPU_FREQUENCY: 3.5,            // GHz
        TOTAL_MEMORY: 16,              // GB
        DISK_SIZE: 512                 // GB
    },

    // Progress Bar Color Thresholds
    THRESHOLDS: {
        WARNING: 60,                   // Yellow warning at 60%
        DANGER: 80                     // Red danger at 80%
    },

    // Chat Settings
    CHAT: {
        TYPING_DELAY_MIN: 1000,        // Minimum typing indicator duration
        TYPING_DELAY_MAX: 2000,        // Maximum typing indicator duration
        MAX_MESSAGE_LENGTH: 500        // Maximum characters per message
    },

    // Process Names for Simulation
    PROCESS_NAMES: [
        'chrome.exe',
        'code.exe',
        'node.exe',
        'python.exe',
        'explorer.exe',
        'firefox.exe',
        'docker.exe',
        'postgres.exe',
        'mysql.exe',
        'nginx.exe',
        'java.exe',
        'teams.exe',
        'slack.exe',
        'spotify.exe',
        'system'
    ],

    // OS Theory Topics for AI Responses
    OS_TOPICS: {
        CPU: ['scheduling', 'context switching', 'multi-core', 'interrupts'],
        MEMORY: ['virtual memory', 'paging', 'segmentation', 'cache'],
        PROCESS: ['PCB', 'states', 'IPC', 'synchronization'],
        DISK: ['file system', 'I/O scheduling', 'buffering', 'caching'],
        DEADLOCK: ['conditions', 'prevention', 'detection', 'recovery']
    }
};

// Freeze the configuration object to prevent modifications
Object.freeze(CONFIG);
Object.freeze(CONFIG.MONITORING);
Object.freeze(CONFIG.SYSTEM);
Object.freeze(CONFIG.THRESHOLDS);
Object.freeze(CONFIG.CHAT);
Object.freeze(CONFIG.OS_TOPICS);
```
