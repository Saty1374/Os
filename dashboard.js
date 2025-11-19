# dashboard.js - Dashboard Component Controller

```javascript
/**
 * Dashboard Component Controller
 * Manages the visual representation of system metrics
 * 
 * OS Theory: This represents the user-space monitoring application
 * that visualizes kernel-provided system statistics
 */

class DashboardController {
    constructor(systemMonitor) {
        this.systemMonitor = systemMonitor;
        this.elements = this.cacheElements();
    }

    /**
     * Cache DOM elements for performance
     * OS Theory: Similar to OS caching frequently accessed data
     */
    cacheElements() {
        return {
            cpuValue: document.getElementById('cpuValue'),
            cpuProgress: document.getElementById('cpuProgress'),
            memoryValue: document.getElementById('memoryValue'),
            memoryLabel: document.getElementById('memoryLabel'),
            memoryProgress: document.getElementById('memoryProgress'),
            diskValue: document.getElementById('diskValue'),
            diskProgress: document.getElementById('diskProgress'),
            networkValue: document.getElementById('networkValue'),
            networkProgress: document.getElementById('networkProgress'),
            processTableBody: document.getElementById('processTableBody'),
            alertContainer: document.getElementById('alertContainer')
        };
    }

    /**
     * Update all dashboard metrics
     */
    updateDashboard() {
        const metrics = this.systemMonitor.getMetrics();
        
        this.updateCPU(metrics.cpu);
        this.updateMemory(metrics.memory);
        this.updateDisk(metrics.disk);
        this.updateNetwork(metrics.network);
        this.updateProcessTable(metrics.processes);
        this.updateAlerts();
    }

    /**
     * Update CPU display
     */
    updateCPU(cpu) {
        const cpuPercent = cpu.usage.toFixed(1);
        this.elements.cpuValue.textContent = cpuPercent + '%';
        this.elements.cpuProgress.style.width = cpuPercent + '%';
        this.elements.cpuProgress.className = 'progress-fill ' + this.getProgressClass(cpuPercent);
    }

    /**
     * Update Memory display
     */
    updateMemory(memory) {
        const memoryPercent = ((memory.used / memory.total) * 100).toFixed(1);
        this.elements.memoryValue.textContent = memoryPercent + '%';
        this.elements.memoryLabel.textContent = 
            `${memory.used.toFixed(1)} GB used of ${memory.total} GB`;
        this.elements.memoryProgress.style.width = memoryPercent + '%';
        this.elements.memoryProgress.className = 'progress-fill ' + this.getProgressClass(memoryPercent);
    }

    /**
     * Update Disk I/O display
     */
    updateDisk(disk) {
        const diskTotal = disk.read + disk.write;
        this.elements.diskValue.textContent = diskTotal.toFixed(1) + ' MB/s';
        this.elements.diskProgress.style.width = Math.min(100, (diskTotal / 200) * 100) + '%';
        this.elements.diskProgress.className = 'progress-fill';
    }

    /**
     * Update Network display
     */
    updateNetwork(network) {
        const networkTotal = network.sent + network.received;
        this.elements.networkValue.textContent = networkTotal.toFixed(0) + ' KB/s';
        this.elements.networkProgress.style.width = Math.min(100, (networkTotal / 1000) * 100) + '%';
        this.elements.networkProgress.className = 'progress-fill';
    }

    /**
     * Update process table
     * OS Theory: Displays process control block (PCB) information
     */
    updateProcessTable(processes) {
        this.elements.processTableBody.innerHTML = processes.map(proc => `
            <tr>
                <td>${proc.name}</td>
                <td>${proc.pid}</td>
                <td>${proc.cpu.toFixed(1)}%</td>
                <td>${proc.memory.toFixed(0)} MB</td>
                <td><span class="status-badge status-${proc.status}">${proc.status}</span></td>
            </tr>
        `).join('');
    }

    /**
     * Update alerts based on system state
     */
    updateAlerts() {
        const alerts = this.systemMonitor.checkAlerts();
        
        if (alerts.length > 0) {
            this.elements.alertContainer.innerHTML = alerts.map(alert => 
                `<div class="alert-banner">
                    <span class="alert-icon">⚠️</span>
                    <span>${alert.message}</span>
                </div>`
            ).join('');
        } else {
            this.elements.alertContainer.innerHTML = '';
        }
    }

    /**
     * Determine progress bar color class based on value
     */
    getProgressClass(value) {
        if (value > CONFIG.THRESHOLDS.DANGER) return 'danger';
        if (value > CONFIG.THRESHOLDS.WARNING) return 'warning';
        return '';
    }

    /**
     * Start periodic updates
     */
    startMonitoring() {
        // Initial update
        this.updateDashboard();
        
        // Set up periodic updates
        setInterval(() => {
            this.systemMonitor.updateMetrics();
            this.updateDashboard();
        }, CONFIG.MONITORING.UPDATE_INTERVAL);
    }
}
```
