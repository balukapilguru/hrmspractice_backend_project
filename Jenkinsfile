pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hrmspractice_backend_project:latest .'
            }
        }

        stage('Docker Check') {
            steps {
                sh 'docker images hrmspractice_backend_project'
            }
        }
    }
}
