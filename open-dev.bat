@echo off
cd /d C:\Users\Proteinbeer\Desktop\Vibe\Danmaek
start "" cmd /k npm.cmd run dev -- --host
timeout /t 2 >nul
start "" http://localhost:4321/
