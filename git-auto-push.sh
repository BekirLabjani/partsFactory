#!/bin/bash

cd /g/develper/angular-projects/partsfactory || exit

# Remote URL setzen (optional, falls noch nicht richtig)
git remote set-url origin git@github.com:BekirLabjani/partsFactory.git

git add .
git commit -m "Automatischer Commit am $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main
