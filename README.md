## Micro Front End approach

- Problem: Manual process to bundle shareable files and uploading to S3.
- Action: Avoid bundling the file and deploying to S3 bucket manually.
- Task: Manipulate files as desired and save to a folder that could have these static files ready to be shared by other applications
- Result: no more manual file changes nor manual uploads to S3.
- A deep dive on [module federation](https://scriptedalchemy.medium.com/understanding-webpack-module-federation-a-deep-dive-efe5c55bf366)

![Diagram](Micro-FE.png)
