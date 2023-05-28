import datetime
import random
import os

start_date = datetime.date(2022, 1, 5)
num_days = 10

def makeFakeCommits():
    for day in range(num_days):
        day += random.randint(1, 10)
        
        # Check if day exceeds num_days
        if day > num_days:
            break
        
        commit_date = start_date + datetime.timedelta(days=day)
        commit_message = f"Commit on {commit_date}"
        
        # Create and modify files
        createFiles(5)
        modifyFiles(commit_date, commit_message, 5)
        
        # Staging
        os.system('git add file*.txt')

        # Commit
        os.system(f'git commit --date="{commit_date}" -m "{commit_message}"')

        # Delete files
        deleteFiles(5)

    # Push the changes to the remote repository
    os.system('git push')

def createFiles(num_files):
    for i in range(num_files):
        filename = f'file{i+1}.txt'
        with open(filename, 'w') as file:
            file.write(f'This is {filename}')

def modifyFiles(commit_date, commit_message, num_files):
    for i in range(num_files):
        filename = f'file{i+1}.txt'
        with open(filename, 'a') as file:
            file.write(f'\n{commit_date} <- {commit_message}')

def deleteFiles(num_files):
    for i in range(num_files):
        filename = f'file{i+1}.txt'
        os.remove(filename)

makeFakeCommits()
