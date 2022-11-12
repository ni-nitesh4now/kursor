import datetime
import random
import os

start_date = datetime.date(2022, 11, 12)
num_days = 100

def makeFakeCommits():
    for day in range(num_days):
        commit_date = start_date + datetime.timedelta(days=day)
        commit_message = f"Commit on {commit_date}"
        
        # Create and modify files
        createFiles()
        modifyFiles(commit_date, commit_message)
        
        # Staging
        os.system('git add file1.txt file2.txt')

        # Commit
        os.system(f'git commit --date="{commit_date}" -m "{commit_message}"')

        # Delete files
        deleteFiles()

def createFiles():
    with open('file1.txt', 'w') as file:
        file.write('This is file 1')
    with open('file2.txt', 'w') as file:
        file.write('This is file 2')

def modifyFiles(commit_date, commit_message):
    with open('file1.txt', 'a') as file:
        file.write(f'\n{commit_date} <- {commit_message}')
    with open('file2.txt', 'a') as file:
        file.write(f'\n{commit_date} <- {commit_message}')

def deleteFiles():
    os.remove('file1.txt')
    os.remove('file2.txt')

makeFakeCommits()
