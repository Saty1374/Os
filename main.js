# main.js - Application Initialization

```javascript
/**
 * Main Application Entry Point
 * Initializes and coordinates all components
 * 
 * OS Theory: This represents the main() function or entry point
 * similar to how an OS boots and initializes subsystems
 */

/**
 * Application class - Coordinates all components
 */
class Application {
    constructor() {
        this.systemMonitor = null;
        this.dashboardController = null;
        this.chatController = null;
    }

    /**
     * Initialize the application
     * OS Theory: Similar to OS bootstrap process
     */
    initialize() {
        console.log('🚀 Initializing System Resource Monitor...');
        
        try {
            // Step 1: Initialize System Monitor (Core Service)
            console.log('📊 Starting system monitor service...');
            this.systemMonitor = systemMonitor; // Use global instance from systemMonitor.js
            
            // Step 2: Initialize Dashboard Controller (UI Component)
            console.log('🖥️  Initializing dashboard component...');
            this.dashboardController = new DashboardController(this.systemMonitor);
            
            // Step 3: Initialize Chat Controller (AI Component)
            console.log('🤖 Initializing AI chat component...');
            this.chatController = new ChatController(this.systemMonitor);
            
            // Step 4: Start monitoring
            console.log('▶️  Starting real-time monitoring...');
            this.dashboardController.startMonitoring();
            
            console.log('✅ Application initialized successfully!');
            console.log('');
            console.log('═══════════════════════════════════════════════════');
            console.log('  System Resource Monitor - OS Theory Project');
            console.log('═══════════════════════════════════════════════════');
            console.log('');
            console.log('📚 Architecture Overview:');
            console.log('  • config.js      → Configuration constants');
            console.log('  • systemMonitor.js → System resource simulation');
            console.log('  • dashboard.js   → Dashboard UI controller');
            console.log('  • chat.js        → AI chatbot controller');
            console.log('  • main.js        → Application coordinator');
            console.log('');
            console.log('🎯 OS Concepts Demonstrated:');
            console.log('  • Process Management & Scheduling');
            console.log('  • Memory Management (Virtual Memory, Paging)');
            console.log('  • CPU Scheduling Algorithms');
            console.log('  • I/O Management & Device Drivers');
            console.log('  • Inter-Process Communication');
            console.log('  • Deadlock Prevention & Detection');
            console.log('  • File System Organization');
            console.log('');
            console.log('💡 Try the chatbot to explore OS concepts!');
            console.log('═══════════════════════════════════════════════════');
            
        } catch (error) {
            console.error('❌ Application initialization failed:', error);
            this.handleInitializationError(error);
        }
    }

    /**
     * Handle initialization errors
     */
    handleInitializationError(error) {
        const errorMessage = `
            <div style="
                background: #fee;
                border: 2px solid #f00;
                border-radius: 8px;
                padding: 20px;
                margin: 20px;
                text-align: center;
                font-family: monospace;
            ">
                <h2 style="color: #c00; margin-top: 0;">⚠️ Initialization Error</h2>
                <p style="color: #600;">${error.message}</p>
                <p style="color: #666; font-size: 12px;">Check the console for more details</p>
            </div>
        `;
        document.body.innerHTML = errorMessage;
    }

    /**
     * Get system information
     */
    getSystemInfo() {
        return {
            monitor: this.systemMonitor ? 'Active' : 'Inactive',
            dashboard: this.dashboardController ? 'Active' : 'Inactive',
            chat: this.chatController ? 'Active' : 'Inactive',
            metrics: this.systemMonitor ? this.systemMonitor.getMetrics() : null
        };
    }
}

/**
 * Document Ready Handler
 * Waits for DOM to be fully loaded before initializing
 */
document.addEventListener('DOMContentLoaded', () => {
    // Create and initialize application
    const app = new Application();
    app.initialize();
    
    // Expose app to global scope for debugging
    window.app = app;
    
    // Expose useful debugging functions
    window.getMetrics = () => app.systemMonitor.getMetrics();
    window.getSystemInfo = () => app.getSystemInfo();
    
    console.log('💻 Debug Functions Available:');
    console.log('  • window.app         → Application instance');
    console.log('  • window.getMetrics() → Get current metrics');
    console.log('  • window.getSystemInfo() → Get system status');
});

/**
 * Handle page unload
 */
window.addEventListener('beforeunload', () => {
    console.log('👋 Shutting down System Resource Monitor...');
});
```
