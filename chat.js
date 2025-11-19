# chat.js - AI Chatbot Component

```javascript
/**
 * Chat Component Controller
 * Manages AI chatbot interactions and OS theory explanations
 * 
 * OS Theory: This represents a user-space application that queries
 * system information and provides educational context
 */

class ChatController {
    constructor(systemMonitor) {
        this.systemMonitor = systemMonitor;
        this.elements = this.cacheElements();
        this.setupEventListeners();
        this.initializeChat();
    }

    /**
     * Cache DOM elements
     */
    cacheElements() {
        return {
            chatMessages: document.getElementById('chatMessages'),
            chatInput: document.getElementById('chatInput'),
            sendBtn: document.getElementById('sendBtn'),
            initialTime: document.getElementById('initialTime')
        };
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Send button click
        this.elements.sendBtn.addEventListener('click', () => this.sendMessage());
        
        // Enter key press
        this.elements.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Quick action buttons
        document.querySelectorAll('.quick-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const message = e.target.getAttribute('data-message');
                this.sendQuickMessage(message);
            });
        });
    }

    /**
     * Initialize chat with timestamp
     */
    initializeChat() {
        this.elements.initialTime.textContent = this.getCurrentTime();
    }

    /**
     * Add message to chat
     */
    addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : ''}`;
        
        const time = this.getCurrentTime();
        
        messageDiv.innerHTML = `
            <div class="message-avatar">${isUser ? 'You' : 'AI'}</div>
            <div>
                <div class="message-content">${content}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        this.elements.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    /**
     * Add typing indicator
     */
    addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">AI</div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        this.elements.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    /**
     * Remove typing indicator
     */
    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) typingIndicator.remove();
    }

    /**
     * Generate AI response based on user message
     * OS Theory: This is the knowledge base that explains OS concepts
     */
    generateResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        const metrics = this.systemMonitor.getMetrics();
        
        // CPU-related queries
        if (lowerMessage.includes('cpu') || lowerMessage.includes('processor')) {
            if (lowerMessage.includes('usage') || lowerMessage.includes('current')) {
                return `🔍 <strong>Current CPU Status:</strong><br><br>
                    • Usage: <strong>${metrics.cpu.usage.toFixed(1)}%</strong><br>
                    • Cores: ${metrics.cpu.cores} logical processors<br>
                    • Frequency: ${metrics.cpu.frequency} GHz<br><br>
                    ${metrics.cpu.usage > 70 ? '⚠️ CPU usage is high. ' : '✅ CPU usage is normal. '}
                    <br><br><strong>OS Theory:</strong> The CPU scheduler uses algorithms like Round-Robin and Priority Scheduling to allocate processor time to processes. Context switches occur approximately ${this.systemMonitor.getContextSwitches()} times per second at this load level.`;
            }
            if (lowerMessage.includes('explain') || lowerMessage.includes('what is')) {
                return `📚 <strong>CPU & Process Management:</strong><br><br>
                    The CPU is managed by the OS kernel's scheduler, which:<br>
                    • Allocates time slices to processes (time-sharing)<br>
                    • Handles context switching between processes<br>
                    • Manages process states (Ready, Running, Waiting, Terminated)<br>
                    • Uses scheduling algorithms (FCFS, SJF, Round-Robin, Priority)<br><br>
                    <strong>Your System:</strong> With ${metrics.cpu.cores} cores, the OS can run ${metrics.cpu.cores} processes truly simultaneously using parallel processing.`;
            }
        }

        // Memory-related queries
        if (lowerMessage.includes('memory') || lowerMessage.includes('ram')) {
            if (lowerMessage.includes('usage') || lowerMessage.includes('current') || lowerMessage.includes('show')) {
                const memPercent = ((metrics.memory.used / metrics.memory.total) * 100).toFixed(1);
                return `💾 <strong>Memory Status:</strong><br><br>
                    • Used: <strong>${metrics.memory.used.toFixed(2)} GB</strong> (${memPercent}%)<br>
                    • Available: ${metrics.memory.available.toFixed(2)} GB<br>
                    • Total: ${metrics.memory.total} GB<br><br>
                    ${memPercent > 80 ? '⚠️ Memory pressure detected! ' : '✅ Memory levels are healthy. '}
                    <br><br><strong>OS Theory:</strong> The OS uses virtual memory management with paging. Your system likely uses a page size of 4KB, and the Memory Management Unit (MMU) handles address translation from virtual to physical addresses.`;
            }
            if (lowerMessage.includes('virtual') || lowerMessage.includes('explain')) {
                return `📚 <strong>Virtual Memory Management:</strong><br><br>
                    Virtual memory is a memory management technique where:<br>
                    • Each process has its own virtual address space<br>
                    • The OS maps virtual addresses to physical RAM<br>
                    • Pages can be swapped to disk when RAM is full<br>
                    • Provides memory isolation between processes<br><br>
                    <strong>Benefits:</strong><br>
                    • Programs can use more memory than physically available<br>
                    • Security through process isolation<br>
                    • Efficient memory utilization through demand paging`;
            }
        }

        // Process-related queries
        if (lowerMessage.includes('process') || lowerMessage.includes('application') || lowerMessage.includes('top')) {
            if (lowerMessage.includes('using') || lowerMessage.includes('consuming') || lowerMessage.includes('most')) {
                const topProcesses = metrics.processes.slice(0, 5);
                let response = `🔝 <strong>Top Resource-Consuming Processes:</strong><br><br>`;
                topProcesses.forEach((proc, i) => {
                    response += `${i + 1}. <strong>${proc.name}</strong><br>
                        &nbsp;&nbsp;&nbsp;PID: ${proc.pid} | CPU: ${proc.cpu.toFixed(1)}% | Memory: ${proc.memory.toFixed(0)} MB<br>`;
                });
                response += `<br><strong>OS Theory:</strong> Each process has a Process Control Block (PCB) containing its state, program counter, CPU registers, memory allocation, and I/O status. The OS maintains these in a process table.`;
                return response;
            }
            if (lowerMessage.includes('explain') || lowerMessage.includes('what is')) {
                return `📚 <strong>Process Management:</strong><br><br>
                    A process is a program in execution. The OS manages processes through:<br>
                    • <strong>Process Creation:</strong> fork() and exec() system calls<br>
                    • <strong>Process Scheduling:</strong> Deciding which process runs when<br>
                    • <strong>Inter-Process Communication (IPC):</strong> Pipes, message queues, shared memory<br>
                    • <strong>Process Synchronization:</strong> Semaphores, mutexes, monitors<br><br>
                    Currently, your system is managing ${metrics.processes.length}+ active processes.`;
            }
        }

        // Disk I/O queries
        if (lowerMessage.includes('disk') || lowerMessage.includes('i/o') || lowerMessage.includes('storage')) {
            const diskTotal = metrics.disk.read + metrics.disk.write;
            return `💿 <strong>Disk I/O Status:</strong><br><br>
                • Read Speed: ${metrics.disk.read.toFixed(1)} MB/s<br>
                • Write Speed: ${metrics.disk.write.toFixed(1)} MB/s<br>
                • Total Activity: ${diskTotal.toFixed(1)} MB/s<br>
                • Disk Usage: ${metrics.disk.usage}%<br><br>
                <strong>OS Theory:</strong> The I/O subsystem uses buffering, caching, and scheduling algorithms (like SCAN or C-LOOK) to optimize disk operations. Device drivers abstract hardware details, and the file system manages data organization on disk.`;
        }

        // Network queries
        if (lowerMessage.includes('network') || lowerMessage.includes('internet')) {
            const networkTotal = metrics.network.sent + metrics.network.received;
            return `🌐 <strong>Network Activity:</strong><br><br>
                • Upload: ${metrics.network.sent.toFixed(0)} KB/s<br>
                • Download: ${metrics.network.received.toFixed(0)} KB/s<br>
                • Total: ${networkTotal.toFixed(0)} KB/s<br><br>
                <strong>OS Theory:</strong> The OS network stack implements the TCP/IP protocol suite, handling packet routing, socket management, and network device drivers. System calls like socket(), bind(), listen(), and accept() enable network communication.`;
        }

        // Optimization recommendations
        if (lowerMessage.includes('optimize') || lowerMessage.includes('improve') || lowerMessage.includes('recommend')) {
            let recommendations = `💡 <strong>Optimization Recommendations:</strong><br><br>`;
            
            if (metrics.cpu.usage > 70) {
                recommendations += `• <strong>CPU:</strong> High usage detected. Close unnecessary applications or consider upgrading to a faster processor.<br>`;
            }
            if ((metrics.memory.used / metrics.memory.total) > 0.7) {
                recommendations += `• <strong>Memory:</strong> Consider closing browser tabs or adding more RAM. Enable virtual memory if not already active.<br>`;
            }
            recommendations += `• <strong>General:</strong> Keep only essential startup programs, update drivers regularly, and run disk cleanup.<br><br>
                <strong>OS Theory:</strong> Modern operating systems use dynamic priority adjustment and load balancing to optimize performance automatically.`;
            
            return recommendations;
        }

        // Scheduling algorithms
        if (lowerMessage.includes('schedul') || lowerMessage.includes('algorithm')) {
            return `📚 <strong>CPU Scheduling Algorithms:</strong><br><br>
                • <strong>FCFS (First-Come-First-Serve):</strong> Simple but can cause convoy effect<br>
                • <strong>SJF (Shortest Job First):</strong> Optimal average waiting time<br>
                • <strong>Round-Robin:</strong> Fair time-sharing with time quantum<br>
                • <strong>Priority Scheduling:</strong> Based on process priority<br>
                • <strong>Multilevel Queue:</strong> Different queues for different process types<br><br>
                Most modern OS use a combination of these algorithms for optimal performance.`;
        }

        // Deadlock
        if (lowerMessage.includes('deadlock')) {
            return `📚 <strong>Deadlock in OS:</strong><br><br>
                Deadlock occurs when processes wait indefinitely. Four conditions must hold:<br>
                • <strong>Mutual Exclusion:</strong> Resources cannot be shared<br>
                • <strong>Hold and Wait:</strong> Process holding resources requests more<br>
                • <strong>No Preemption:</strong> Resources cannot be forcibly taken<br>
                • <strong>Circular Wait:</strong> Circular chain of processes waiting<br><br>
                <strong>Prevention:</strong> Break any one of these conditions<br>
                <strong>Detection:</strong> Use resource allocation graphs<br>
                <strong>Recovery:</strong> Process termination or resource preemption`;
        }

        // File systems
        if (lowerMessage.includes('file system') || lowerMessage.includes('filesystem')) {
            return `📚 <strong>File System Management:</strong><br><br>
                File systems organize data on storage devices:<br>
                • <strong>Structure:</strong> Directories (folders) and files<br>
                • <strong>Allocation Methods:</strong> Contiguous, Linked, Indexed<br>
                • <strong>Common Types:</strong> NTFS (Windows), ext4 (Linux), APFS (macOS)<br>
                • <strong>Operations:</strong> Create, Read, Write, Delete, Seek<br><br>
                The file system maintains metadata (permissions, timestamps, size) and uses caching to improve performance.`;
        }

        // Default response
        return `I can help you with:<br><br>
            • <strong>Current Status:</strong> "What is my CPU usage?", "Show memory usage"<br>
            • <strong>Process Info:</strong> "Which processes are using most resources?"<br>
            • <strong>OS Concepts:</strong> "Explain virtual memory", "What is process scheduling?"<br>
            • <strong>Optimization:</strong> "How can I improve performance?"<br><br>
            Try asking about CPU, memory, processes, disk I/O, networking, or OS theory concepts!`;
    }

    /**
     * Send message handler
     */
    sendMessage() {
        const message = this.elements.chatInput.value.trim();
        
        if (!message) return;
        
        // Add user message
        this.addMessage(message, true);
        this.elements.chatInput.value = '';
        
        // Show typing indicator
        this.addTypingIndicator();
        
        // Generate and show AI response after delay
        const delay = CONFIG.CHAT.TYPING_DELAY_MIN + 
                     Math.random() * (CONFIG.CHAT.TYPING_DELAY_MAX - CONFIG.CHAT.TYPING_DELAY_MIN);
        
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, false);
        }, delay);
    }

    /**
     * Send quick message
     */
    sendQuickMessage(message) {
        this.elements.chatInput.value = message;
        this.sendMessage();
    }

    /**
     * Get current time formatted
     */
    getCurrentTime() {
        return new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }

    /**
     * Scroll chat to bottom
     */
    scrollToBottom() {
        this.elements.chatMessages.scrollTop = this.elements.chatMessages.scrollHeight;
    }
}
```
