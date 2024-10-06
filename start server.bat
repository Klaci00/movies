@echo off
cd ".\testbed1\Scripts"
call activate.bat
cd "..\..\backend\movies"
call py manage.py runserver
cmd /k