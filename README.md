# System Resource Monitor Chatbot

**A comprehensive Operating System Theory demonstration project featuring real-time system monitoring and an AI-powered educational chatbot.**

![Project Status](https://img.shields.io/badge/status-production--ready-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![OS Theory](https://img.shields.io/badge/OS-Theory-orange)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [OS Theory Concepts Demonstrated](#os-theory-concepts-demonstrated)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technical Details](#technical-details)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This project demonstrates core Operating System concepts through an interactive web application that simulates system resource monitoring and provides educational explanations via an AI chatbot interface. It showcases process management, memory management, CPU scheduling, I/O operations, and more.

**Perfect for:**
- OS Theory coursework and presentations
- Understanding system resource management
- Learning about OS scheduling algorithms
- Exploring memory management concepts
- Understanding process lifecycle

---

## ✨ Features

### Real-Time Monitoring Dashboard
- **CPU Usage Monitoring**: Track multi-core CPU utilization with visual progress bars
- **Memory Management**: Display RAM usage, available memory, and virtual memory concepts
- **Disk I/O Operations**: Monitor read/write speeds and disk activity
- **Network Activity**: Track upload/download speeds
- **Process Table**: View top resource-consuming processes with PIDs and status

### AI-Powered Chatbot
- Natural language query processing
- Context-aware responses about current system state
- Educational OS theory explanations
- Quick action buttons for common queries
- Real-time typing indicators

### Alert System
- Automatic alerts for high CPU usage (>85%)
- Memory pressure warnings
- Color-coded status indicators (Normal/Warning/Danger)

### User Experience
- Responsive design (desktop, tablet, mobile)
- Dark mode support
- Smooth animations and transitions
- Professional design system

---

## 📚 OS Theory Concepts Demonstrated

### 1. **Process Management**
- Process Control Blocks (PCB)
- Process states (Ready, Running, Waiting, Sleeping)
- Process scheduling and time-sharing
- Inter-Process Communication (IPC)
- Context switching metrics

### 2. **Memory Management**
- Virtual memory concepts
- Paging and page tables
- Memory Management Unit (MMU) operations
- RAM allocation and deallocation
- Memory isolation between processes

### 3. **CPU Scheduling**
- First-Come-First-Serve (FCFS)
- Shortest Job First (SJF)
- Round-Robin scheduling
- Priority-based scheduling
- Multilevel queue scheduling

### 4. **I/O Management**
- Disk I/O operations
- Device driver abstraction
- I/O scheduling algorithms (SCAN, C-LOOK)
- Buffering and caching strategies

### 5. **Deadlock**
- Four necessary conditions
- Deadlock prevention strategies
- Detection using resource allocation graphs
- Recovery mechanisms

### 6. **File Systems**
- File system organization
- Allocation methods (Contiguous, Linked, Indexed)
- Directory structures
- File operations and metadata

### 7. **Network Management**
- TCP/IP protocol stack
- Socket programming concepts
- Network device drivers
- Packet routing

---

## 🏗️ Architecture

### Component-Based Design

```
System-Resource-Monitor-Chatbot/
├── index.html              # Main entry point (UI structure)
├── css/
│   ├── styles.css         # Global styles and design system
│   ├── dashboard.css      # Dashboard component styles
│   └── chat.css           # Chat component styles
├── js/
│   ├── config.js          # Configuration constants
│   ├── systemMonitor.js   # System metrics simulation
│   ├── dashboard.js       # Dashboard controller
│   ├── chat.js            # Chat controller & AI logic
│   └── main.js            # Application initialization
└── README.md              # Project documentation
```

### Module Descriptions

**1. config.js** - Configuration Module
- Centralized constants and settings
- System specifications
- Alert thresholds
- Update intervals
- Process names for simulation

**2. systemMonitor.js** - System Monitor Module
- Simulates OS-level resource monitoring
- Generates realistic system metrics
- Process table management
- Alert detection logic
- Represents OS system calls layer

**3. dashboard.js** - Dashboard Controller
- Manages visual representation of metrics
- Updates UI components
- DOM manipulation and caching
- Progress bar color logic
- Periodic metric updates

**4. chat.js** - Chat Controller
- AI chatbot logic and responses
- Natural language query processing
- OS theory knowledge base
- Message handling and UI updates
- Typing indicators and animations

**5. main.js** - Application Coordinator
- Initializes all components
- Manages component lifecycle
- Error handling
- Debug utilities
- Bootstrap process

---

## 🚀 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript
- Text editor or IDE

### Setup Steps

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/System-Resource-Monitor-Chatbot.git
   cd System-Resource-Monitor-Chatbot
   ```

2. **Verify file structure**
   Ensure all files are in the correct directories:
   ```
   System-Resource-Monitor-Chatbot/
   ├── index.html
   ├── css/
   │   ├── styles.css
   │   ├── dashboard.css
   │   └── chat.css
   └── js/
       ├── config.js
       ├── systemMonitor.js
       ├── dashboard.js
       ├── chat.js
       └── main.js
   ```

3. **Open in browser**
   - Double-click `index.html`, OR
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

---

## 💻 Usage

### Basic Usage

1. **Monitor Dashboard**
   - View real-time CPU, memory, disk, and network metrics
   - Observe process table with top resource consumers
   - Watch for automatic alerts

2. **Chat with AI Assistant**
   - Type questions in the chat input
   - Use quick action buttons for common queries
   - Ask about current system state or OS concepts

### Example Queries

**System Status Queries:**
- "What is my current CPU usage?"
- "Show me memory usage"
- "Which processes are using most resources?"
- "What's the disk I/O activity?"

**OS Theory Queries:**
- "Explain virtual memory"
- "What is process scheduling?"
- "Tell me about deadlock"
- "How does the CPU scheduler work?"
- "Explain file systems"

**Optimization Queries:**
- "How can I optimize performance?"
- "Give me recommendations"
- "What should I do about high CPU?"

### Developer Tools

Open browser console (F12) to access debug functions:
```javascript
// Get current system metrics
window.getMetrics()

// Get application status
window.getSystemInfo()

// Access application instance
window.app
```

---

## 📁 Project Structure

### Detailed File Breakdown

#### **index.html** (249 lines)
Main HTML structure with semantic markup:
- Dashboard section with metrics cards
- Process table component
- Chat interface with message area
- Quick action buttons
- Responsive grid layout

#### **css/styles.css** (98 lines)
Global styles and design system:
- CSS custom properties (variables)
- Dark mode support
- Base typography
- Layout utilities
- Animations (pulse, slideIn, typing)

#### **css/dashboard.css** (125 lines)
Dashboard-specific styles:
- Metric cards and headers
- Progress bars with color states
- Process table styles
- Responsive grid layout
- Hover effects and transitions

#### **css/chat.css** (148 lines)
Chat component styles:
- Message bubbles (user/AI)
- Typing indicators
- Suggestion chips
- Input area styling
- Quick action buttons

#### **js/config.js** (68 lines)
Configuration constants:
- Monitoring settings (intervals, thresholds)
- System specifications
- Process name list
- OS theory topics
- Immutable configuration object

#### **js/systemMonitor.js** (105 lines)
System monitoring logic:
- `SystemMonitor` class
- Metric generation and updates
- Process simulation
- Alert detection
- Context switch calculation

#### **js/dashboard.js** (112 lines)
Dashboard controller:
- `DashboardController` class
- DOM element caching
- Metric display updates
- Progress bar management
- Alert rendering

#### **js/chat.js** (285 lines)
Chat controller and AI logic:
- `ChatController` class
- Message handling
- AI response generation
- OS theory knowledge base
- Event listeners

#### **js/main.js** (98 lines)
Application initialization:
- `Application` class
- Component coordination
- Bootstrap process
- Error handling
- Debug utilities

**Total Lines of Code: ~1,288**

---

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript (ES6+)**: Classes, modules, async operations
- **No external dependencies**: Pure JavaScript implementation

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performance Optimizations
- DOM element caching for efficient updates
- CSS transitions for smooth animations
- Throttled metric updates (2-second intervals)
- Efficient event delegation
- Minimal reflows and repaints

### Design Patterns Used
- **Module Pattern**: Separate concerns into distinct modules
- **Class-Based Architecture**: OOP principles
- **Observer Pattern**: Event-driven updates
- **Singleton Pattern**: Global SystemMonitor instance
- **MVC Pattern**: Separation of data, view, and controller

---

## 📸 Screenshots

### Dashboard View
*Real-time monitoring with CPU, memory, disk, and network metrics*

### Process Table
*Top resource-consuming processes with PIDs and status*

### AI Chatbot
*Interactive chat with OS theory explanations*

### Alert System
*Automatic warnings for high resource usage*

---

## 🎓 Educational Value

### Learning Outcomes

**For Students:**
- Understand OS resource management concepts
- Learn about process lifecycle and scheduling
- Explore memory management techniques
- Grasp I/O subsystem operations
- Understand deadlock conditions and prevention

**For Instructors:**
- Interactive demonstration tool
- Visual representation of abstract concepts
- Hands-on exploration environment
- Real-time system behavior simulation

### Recommended Topics for Exploration

1. **Process Management**: Observe how processes compete for CPU
2. **Memory Paging**: Understand virtual memory concepts
3. **CPU Scheduling**: Learn about time-sharing and context switches
4. **I/O Operations**: Explore disk and network activity
5. **System Calls**: Understand how applications interact with OS

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Ideas
- Add more OS theory topics to chatbot
- Implement actual system monitoring (Node.js backend)
- Add more visualizations (charts, graphs)
- Improve mobile responsiveness
- Add internationalization (i18n)
- Create unit tests

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact & Support

- **GitHub Issues**: For bug reports and feature requests
- **Email**: your.email@example.com
- **Documentation**: See inline code comments for detailed explanations

---

## 🙏 Acknowledgments

- Inspired by real OS monitoring tools (htop, Task Manager, Activity Monitor)
- OS theory concepts from standard textbooks (Silberschatz, Tanenbaum)
- Design inspired by modern system administration dashboards

---

## 📊 Project Statistics

- **Lines of Code**: ~1,288
- **Files**: 10
- **Components**: 5 (Config, Monitor, Dashboard, Chat, Main)
- **OS Concepts**: 7+ major topics
- **Responsive Breakpoints**: 2 (1024px, 768px)
- **Update Frequency**: 2 seconds
- **Supported Queries**: 50+ variations

---

## 🔮 Future Enhancements

- [ ] Backend integration for actual system monitoring
- [ ] Historical data tracking and charts
- [ ] Export reports (PDF/CSV)
- [ ] User preferences and settings
- [ ] Multi-language support
- [ ] Advanced process filtering
- [ ] System health scoring
- [ ] Notification system
- [ ] Performance benchmarking

---

**⭐ If you find this project helpful, please consider giving it a star on GitHub!**

**Made with ❤️ for OS Theory students and educators**
