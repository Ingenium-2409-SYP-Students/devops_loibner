# GitHub Container Registry Login & Docker Compose Start
# Usage: .\start.ps1

$githubUsername = "loibnerg"
$plainToken =

Write-Host "Logging in to ghcr.io..." -ForegroundColor Cyan
$plainToken | docker login ghcr.io -u $githubUsername --password-stdin

if ($LASTEXITCODE -ne 0) {
    Write-Host "Login failed. Please check your credentials." -ForegroundColor Red
    exit 1
}

Write-Host "Login successful!" -ForegroundColor Green
Write-Host "Starting services with Docker Compose..." -ForegroundColor Cyan

docker compose -f "$PSScriptRoot\docker-compose.yml" up

