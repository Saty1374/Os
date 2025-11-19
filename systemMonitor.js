# systemMonitor.js - System Metrics Simulation Module

```javascript
/**
 * System Monitor Module
 * Simulates OS-level system resource monitoring
 * 
 * OS Theory: This represents the abstraction layer that would interface
 * with actual OS system calls (like getrusage(), /proc filesystem, WMI, etc.)
 */

class SystemMonitor {
    constructor() {
        this.metrics = {
            cpu: {
                usage: 35,                          // Initial CPU usage
                cores: CONFIG.SYSTEM.CPU_CORES,
                frequency: CONFIG.SYSTEM.CPU_FREQUENCY
            },
            memory: {
                used: 8.5,                          // Initial memory used (GB)
                total: CONFIG.SYSTEM.TOTAL_MEMORY,
                available: CONFIG.SYSTEM.TOTAL_MEMORY - 8.5
            },
            disk: {
                read: 0,
                write: 0,
                usage: 45                           // Disk space usage percentage
            },
            network: {
                sent: 0,
                received: 0
            },
            processes: []
        };
    }

    /**
     * Generate realistic process data
     * OS Theory: Simulates process table maintained by the OS
     */
    generateProcesses() {
        const processes = CONFIG.PROCESS_NAMES.map((name) => ({
            name: name,
            pid: 1000 + Math.floor(Math.random() * 9000),
            cpu: Math.random() * 25,
            memory: Math.random() * 1024,
            status: Math.random() > 0.8 ? 'high' : (Math.random() > 0.5 ? 'medium' : 'low'),
            state: this.getRandomProcessState()
        }));

        // Sort by CPU usage and return top processes
        return processes
            .sort((a, b) => b.cpu - a.cpu)
            .slice(0, CONFIG.MONITORING.MAX_PROCESSES_DISPLAY);
    }

    /**
     * Get random process state
     * OS Theory: Process states in OS (Ready, Running, Waiting, Terminated)
     */
    getRandomProcessState() {
        const states = ['running', 'ready', 'waiting', 'sleeping'];
        return states[Math.floor(Math.random() * states.length)];
    }

    /**
     * Update system metrics with realistic fluctuations
     * OS Theory: Simulates periodic sampling of system resources
     */
    updateMetrics() {
        // CPU usage with realistic patterns (gradual changes)
        this.metrics.cpu.usage = Math.max(5, Math.min(95, 
            this.metrics.cpu.usage + (Math.random() - 0.5) * 10
        ));

        // Memory usage - gradual changes (simulates allocation/deallocation)
        this.metrics.memory.used = Math.max(2, Math.min(14, 
            this.metrics.memory.used + (Math.random() - 0.5) * 0.5
        ));
        this.metrics.memory.available = this.metrics.memory.total - this.metrics.memory.used;

        // Disk I/O - burst patterns (simulates read/write operations)
        this.metrics.disk.read = Math.random() * 150;
        this.metrics.disk.write = Math.random() * 100;

        // Network activity (simulates network traffic)
        this.metrics.network.sent = Math.random() * 500;
        this.metrics.network.received = Math.random() * 800;

        // Update process list
        this.metrics.processes = this.generateProcesses();
    }

    /**
     * Get current metrics snapshot
     */
    getMetrics() {
        return this.metrics;
    }

    /**
     * Check if any resource alerts should be triggered
     * OS Theory: Similar to OS monitoring daemons that watch for resource exhaustion
     */
    checkAlerts() {
        const alerts = [];

        if (this.metrics.cpu.usage > CONFIG.MONITORING.ALERT_THRESHOLD_CPU) {
            alerts.push({
                type: 'cpu',
                severity: 'high',
                message: '⚠️ High CPU usage detected! Consider closing unnecessary applications.'
            });
        }

        const memoryPercent = (this.metrics.memory.used / this.metrics.memory.total) * 100;
        if (memoryPercent > CONFIG.MONITORING.ALERT_THRESHOLD_MEMORY) {
            alerts.push({
                type: 'memory',
                severity: 'high',
                message: '⚠️ Memory usage is critically high! System may slow down.'
            });
        }

        return alerts;
    }

    /**
     * Get process by PID (simulated)
     * OS Theory: Represents OS system call to query process information
     */
    getProcessByPID(pid) {
        return this.metrics.processes.find(proc => proc.pid === pid);
    }

    /**
     * Get total context switches (simulated)
     * OS Theory: Context switches occur when CPU switches between processes
     */
    getContextSwitches() {
        return Math.floor(this.metrics.cpu.usage * 100);
    }
}

// Create global instance
const systemMonitor = new SystemMonitor();
```
