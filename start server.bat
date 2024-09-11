@echo off
cd "C:\movies\testbed1\Scripts"
call activate.bat
cd "C:\movies\backend\movies"
call py manage.py runserver
cmd /k