# 🛡️ SecureCam PRO | Enterprise IoT Honeypot

[![Docker](https://img.shields.io/badge/Docker-Enabled-blue?logo=docker&logoColor=white)](https://www.docker.com/)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014-black?logo=next.js)](https://nextjs.org/)
[![.NET](https://img.shields.io/badge/Backend-.NET%208-purple?logo=dotnet)](https://dotnet.microsoft.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Type](https://img.shields.io/badge/System-Honeypot-red)](https://t-pot.io)

SecureCam PRO is a high-fidelity **IoT Smart Camera Honeypot** designed to mimic professional enterprise surveillance systems (Hikvision/Dahua/Uniview). It serves as a deception platform for security researchers to study attacker behavior, capture exploit attempts, and integrate seamlessly with the **T-Pot** ecosystem.

---

## 📸 Dashboard Preview

> **Enterprise Design Language**: Dark professional atmosphere, realistic PTZ controls, and live stream simulation.

![Dashboard Preview](https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=1200&h=600)

---

## 🏗️ Project Architecture

The system is built using a modern, scalable 3-layer architecture:

### 1. 🖥️ Frontend (Next.js)
- **Framework**: Next.js 14 (App Router) + TypeScript.
- **Styling**: Tailwind CSS with a custom enterprise CCTV theme.
- **Features**: Live View, Playback Timeline, Event Logs, Network/System Settings.
- **Role**: Provides the visual bait for attackers, simulating a fully functional management console.

### 2. ⚙️ Backend (ASP.NET Core)
- **Framework**: .NET 8 Web API.
- **Role**: Handles simulated authentication, device state management, and honeypot logging.
- **Honeypot Logic**: Returns verbose errors, mimics vulnerable API responses, and logs all interaction data (attacker IP, commands, payload) to the console.

### 3. 📹 Stream Simulation (RTSP)
- **Engine**: `rtsp-simple-server`.
- **Role**: Exposes a fake RTSP stream on port 5544 to attract automated camera scanners and exploit scripts.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Includes Docker Compose)
- [Node.js 20+](https://nodejs.org/) (Optional, for local development)
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) (Optional, for local development)

---

## 📂 Project Structure

```text
smart-camera/
├── frontend-app/           # Next.js Dashboard (Bait UI)
├── smart-camera-service/   # .NET 8 Backend (Honeypot Logic)
├── docker-compose.yml      # Orchestration
├── .env.example            # Environment templates
└── README.md               # Documentation
```

---

## 🛠️ Installation & Quick Start

Follow these steps to deploy the honeypot in minutes:

### 1. Clone the Project
```bash
git clone <your-repository-url>
cd Smart_Camera_Simulation
```

### 2. Configure Environment
Copy the example environment file:
```bash
cp .env.example .env
```

### 3. Launch with Docker
Run the following command to build and start all services in the background:
```bash
docker compose up -d --build
```

### 4. Access the Platform
Once the containers are running, open your browser and navigate to:
- **Platform URL**: [http://localhost:3002](http://localhost:3002)
- **Default Credentials**: 
  - **Username**: `admin`
  - **Password**: `12345`

---

## 💻 Manual Development Setup (Non-Docker)

If you wish to run the layers individually for development:

### Backend (API)
```bash
cd smart-camera-service
dotnet restore
dotnet run
```

### Frontend (UI)
```bash
cd frontend-app
npm install
npm run dev
```

---

## 🛠️ Git Terminal Workflow

If you want to commit your changes directly from the terminal without using external tools or links:

### 1. Initialize Git (If first time)
```bash
git init
git remote add origin <your-repo-url>
```

### 2. Stage and Commit Changes
```bash
# Check changed files
git status

# Add all files to staging
git add .

# Commit with a descriptive message
git commit -m "feat: complete smart camera honeypot implementation"
```

### 3. Push to Repository
```bash
git branch -M main
git push -u origin main
```

---

## 🔐 Honeypot Vulnerabilities (The "Bait")

The system is intentionally "broken" in specific ways to encourage attacker interaction:

*   **Weak Auth**: Hardcoded legacy credentials (`admin/12345`).
*   **Verbose Errors**: Firmware update failure reveals internal memory addresses (`ERR_X892_BUFFER_OVERFLOW`).
*   **Exposed RTSP**: Port 5544 is open without authentication in compatibility mode.
*   **Debug Endpoints**: Hidden API logs and system info exports are easily accessible.

---

## 📊 T-Pot Integration

To integrate with your **T-Pot** instance:
1. Ensure your firewall allows traffic on ports `3002`, `8082`, and `5544`.
2. All logs from `smart-camera-service` are outputted to `stdout`.
3. Suricata will automatically flag RTSP and HTTP traffic if running on the same interface.

---

## 📄 License & Disclaimer

This project is licensed under the MIT License.

> [!CAUTION]
> **WARNING**: This software is a honeypot. It is designed to be vulnerable. **DO NOT** use this as a real camera management system or deploy it on a production network without understanding the risks. Use only for educational and security research purposes.

---
*Created by Antigravity AI for Security Researchers.*
